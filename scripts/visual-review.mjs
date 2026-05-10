import { mkdir } from 'node:fs/promises'
import { chromium } from 'playwright'

const url = process.env.REVIEW_URL ?? 'http://127.0.0.1:5173/'
const outDir = new URL('../qa-screenshots/', import.meta.url)

await mkdir(outDir, { recursive: true })

const browser = await chromium.launch()
const viewports = [
  { name: 'desktop', width: 1440, height: 1000 },
  { name: 'mobile', width: 390, height: 844 },
]

for (const viewport of viewports) {
  const page = await browser.newPage({ viewport })
  await page.goto(url, { waitUntil: 'networkidle' })
  const height = await page.evaluate(() => document.body.scrollHeight)
  for (let y = 0; y <= height; y += Math.round(viewport.height * 0.7)) {
    await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y)
    await page.waitForTimeout(80)
  }
  await page.evaluate(() => {
    document.querySelectorAll('.reveal').forEach((node) => node.classList.add('reveal--visible'))
  })
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.waitForTimeout(250)
  await page.screenshot({
    path: new URL(`./hanvanta-${viewport.name}.png`, outDir).pathname,
    fullPage: true,
  })

  const report = await page.evaluate(() => {
    const sections = [...document.querySelectorAll('main > section')].map((section) => ({
      id: section.id || section.className,
      height: Math.round(section.getBoundingClientRect().height),
    }))
    const overflowing = [...document.querySelectorAll('body *')]
      .filter((node) => node.scrollWidth > node.clientWidth + 2)
      .slice(0, 12)
      .map((node) => ({
        tag: node.tagName.toLowerCase(),
        className: String(node.className || ''),
        text: node.textContent.trim().slice(0, 80),
        scrollWidth: node.scrollWidth,
        clientWidth: node.clientWidth,
      }))
    return {
      title: document.title,
      sections,
      overflowing,
      bodyHeight: document.body.scrollHeight,
    }
  })

  console.log(JSON.stringify({ viewport: viewport.name, ...report }, null, 2))
  await page.close()
}

await browser.close()
