import { readFile, writeFile } from 'node:fs/promises'
import { extname, join } from 'node:path'

const distDir = new URL('../dist/', import.meta.url)
const distPath = (file) => join(distDir.pathname, file)

const mimeTypes = {
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
}

const assetDataUri = async (file) => {
  const ext = extname(file)
  const mime = mimeTypes[ext] ?? 'application/octet-stream'
  const buffer = await readFile(distPath(file.replace(/^\//, '')))
  return `data:${mime};base64,${buffer.toString('base64')}`
}

let html = await readFile(distPath('index.html'), 'utf8')

for (const match of [...html.matchAll(/<link rel="stylesheet" crossorigin href="([^"]+\.css)">/g)]) {
  const [tag, href] = match
  const css = await readFile(distPath(href.replace(/^\//, '')), 'utf8')
  html = html.replace(tag, `<style>${css}</style>`)
}

for (const match of [...html.matchAll(/<script type="module" crossorigin src="([^"]+\.js)"><\/script>/g)]) {
  const [tag, src] = match
  const js = await readFile(distPath(src.replace(/^\//, '')), 'utf8')
  html = html.replace(tag, `<script type="module">${js}</script>`)
}

const imageRefs = [
  '/favicon.png',
  '/hanvanta-icon-256.png',
  '/hanvanta-logo.png',
]

for (const ref of imageRefs) {
  const dataUri = await assetDataUri(ref)
  html = html.replaceAll(ref, dataUri)
}

await writeFile(distPath('hanvanta-single.html'), html)
