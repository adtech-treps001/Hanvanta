import './style.css'
import {
  capabilities,
  companyDetails,
  comparisonRows,
  connectorGroups,
  cta,
  customerReferences,
  dataFlows,
  demoProducts,
  faqs,
  hero,
  industries,
  keywordClusters,
  operatingSignals,
  platformDifferentiators,
  processSteps,
  products,
  privacyPoints,
  solutions,
  socialLinks,
  stackPillars,
  toolComparisonRows,
  toolGroups,
  trustSignals,
  workflowExamples,
} from './content.js'

const productMarkup = products
  .map(
    ({ name, status, url, accent, positioning, description, modules }) => `
      <article class="product-card product-card--${accent} reveal">
        <div class="product-card__top">
          <span class="product-card__mark">${name.slice(0, 1)}</span>
          <span class="status status--${status === 'Live' ? 'live' : 'soon'}">${status}</span>
        </div>
        <div class="product-card__body">
          <p class="product-card__kicker">Product by Hanvanta</p>
          <h3>${name}</h3>
          <p class="product-card__positioning">${positioning}</p>
          <p>${description}</p>
        </div>
        <div class="tag-row" aria-label="${name} modules">
          ${modules.map((module) => `<span>${module}</span>`).join('')}
        </div>
        ${
          url
            ? `<a class="text-link" href="${url}" target="_blank" rel="noreferrer">Visit product</a>`
            : '<span class="text-link text-link--disabled">Under process</span>'
        }
      </article>
    `,
  )
  .join('')

const demoProductMarkup = demoProducts
  .map(
    ({ title, status, text, stack }, index) => `
      <article class="demo-card reveal" style="--demo-index: ${index}">
        <div class="demo-card__top">
          <span>${String(index + 1).padStart(2, '0')}</span>
          <strong>${status}</strong>
        </div>
        <h3>${title}</h3>
        <p>${text}</p>
        <div class="tag-row">
          ${stack.map((item) => `<span>${item}</span>`).join('')}
        </div>
      </article>
    `,
  )
  .join('')

const customerMarkup = customerReferences
  .map(
    ({ name, url, category, note }) => `
      <article class="customer-card reveal">
        <span>${category}</span>
        <h3>${name}</h3>
        <p>${note}</p>
        ${
          url
            ? `<a class="text-link" href="${url}" target="_blank" rel="noreferrer">View website</a>`
            : '<span class="text-link text-link--disabled">Website pending</span>'
        }
      </article>
    `,
  )
  .join('')

const capabilityIcons = {
  'Chatbot and assistant layer': `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 7.5h14v8H9l-4 3v-11Z" />
      <path d="M9 11h.01M12 11h.01M15 11h.01" />
    </svg>
  `,
  'Knowledge engine': `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 5.5h7.5L18 9v9.5H7v-13Z" />
      <path d="M14 5.5V9h4M9.5 12h5M9.5 15h4" />
    </svg>
  `,
  'AI employees': `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
      <path d="M5.5 19c.8-3 3-4.5 6.5-4.5s5.7 1.5 6.5 4.5" />
      <path d="M18.5 6.5h2M19.5 5.5v2" />
    </svg>
  `,
  'System connectors': `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 8h4M13 8h4M11 8a2 2 0 1 0 2 0" />
      <path d="M7 16h4M13 16h4M11 16a2 2 0 1 0 2 0" />
      <path d="M12 10v4" />
    </svg>
  `,
  'Communication intelligence': `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 6.5h10v7H8l-3 2.5v-9.5Z" />
      <path d="M12 14.5h4l3 2.5v-8h-3" />
    </svg>
  `,
  'Content generation workflows': `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17.5 6 21l3.5-1 8-8a2.1 2.1 0 0 0-3-3l-8 8Z" />
      <path d="M13.5 10.5l3 3M6.5 6.5h5M6.5 9.5h3" />
    </svg>
  `,
  'Machine and field intelligence': `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 14h12v5H6v-5Z" />
      <path d="M8 14V9l4-3 4 3v5M9 19v2M15 19v2" />
      <path d="M10 16.5h.01M14 16.5h.01" />
    </svg>
  `,
  'Controlled data layer': `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 10V8a5 5 0 0 1 10 0v2" />
      <path d="M6 10h12v9H6v-9Z" />
      <path d="M12 14v2" />
    </svg>
  `,
}

const capabilityMarkup = capabilities
  .map(
    ({ title, text, accent }) => `
      <article class="feature-card feature-card--${accent} reveal">
        <div class="feature-card__top">
          <span class="feature-card__icon">${capabilityIcons[title] ?? capabilityIcons['AI employees']}</span>
          <span class="feature-card__signal"></span>
        </div>
        <h3>${title}</h3>
        <p>${text}</p>
      </article>
    `,
  )
  .join('')

const stackMarkup = stackPillars
  .map(
    ({ title, text, tag }) => `
      <article class="stack-card reveal">
        <span>${tag}</span>
        <h3>${title}</h3>
        <p>${text}</p>
      </article>
    `,
  )
  .join('')

const connectorInitials = {
  Gmail: 'G',
  Outlook: 'O',
  WhatsApp: 'WA',
  Slack: 'S',
  Teams: 'T',
  'Website chat': '</>',
  Salesforce: 'SF',
  HubSpot: 'HS',
  Zoho: 'Z',
  ERP: 'ERP',
  CRM: 'CRM',
  HRMS: 'HR',
  'Google Drive': 'GD',
  SharePoint: 'SP',
  Notion: 'N',
  Databases: 'DB',
  Spreadsheets: 'XL',
  APIs: 'API',
  MES: 'MES',
  SCADA: 'SC',
  PLC: 'PLC',
  IoT: 'IoT',
  Cameras: 'CAM',
  Robotics: 'BOT',
}

const connectorMarkup = connectorGroups
  .map(
    ({ title, text, connectors }) => `
      <article class="connector-card reveal">
        <div>
          <h3>${title}</h3>
          <p>${text}</p>
        </div>
        <div class="connector-icon-grid">
          ${connectors
            .map(
              (connector) => `
                <span class="connector-icon" aria-label="${connector}">
                  <i>${connectorInitials[connector] ?? connector.slice(0, 2)}</i>
                  <b>${connector}</b>
                </span>
              `,
            )
            .join('')}
        </div>
      </article>
    `,
  )
  .join('')

const comparisonMarkup = comparisonRows
  .slice(0, 4)
  .map(
    ({ tool, perspective }) => `
      <article class="secret-card reveal">
        <span></span>
        <h3>${tool}</h3>
        <p>${perspective}</p>
      </article>
    `,
  )
  .join('')

const toolComparisonMarkup = toolComparisonRows
  .map(
    ({ known, familiarUse, hanvantaView }) => `
      <tr>
        <th scope="row">${known}</th>
        <td data-label="Where it helps">${familiarUse}</td>
        <td data-label="Hanvanta perspective">${hanvantaView}</td>
      </tr>
    `,
  )
  .join('')

const toolGroupMarkup = toolGroups
  .map(
    ({ title, text, tools }) => `
      <article class="tool-group">
        <h4>${title}</h4>
        <p>${text}</p>
        <div class="tool-keyword-list">
          ${tools.map((tool) => `<span>${tool}</span>`).join('')}
        </div>
      </article>
    `,
  )
  .join('')

const keywordClusterMarkup = keywordClusters.map((keyword) => `<span>${keyword}</span>`).join('')

const workflowExampleMarkup = workflowExamples
  .slice(0, 2)
  .map(
    ({ title, path, outcome }, index) => `
      <article class="workflow-card reveal" style="--workflow-index: ${index}">
        <span>${String(index + 1).padStart(2, '0')}</span>
        <h3>${title}</h3>
        <p>${path}</p>
        <strong>${outcome}</strong>
      </article>
    `,
  )
  .join('')

const differentiatorMarkup = platformDifferentiators
  .map(
    ({ point, detail }) => `
      <article class="differentiator-card">
        <h4>${point}</h4>
        <p>${detail}</p>
      </article>
    `,
  )
  .join('')

const dataFlowMarkup = dataFlows
  .map(
    ({ source, signal, destination, accent }, index) => `
      <article class="data-flow data-flow--${accent} reveal" style="--flow-index: ${index}">
        <span class="data-flow__number">${String(index + 1).padStart(2, '0')}</span>
        <div>
          <h3>${source}</h3>
          <p>${signal}</p>
        </div>
        <span class="data-flow__line" aria-hidden="true"></span>
        <div>
          <h3>${destination}</h3>
          <p>Connected into Hanvanta's product and automation layer.</p>
        </div>
      </article>
    `,
  )
  .join('')

const operatingSignalMarkup = operatingSignals
  .map(
    (signal, index) => `
      <span class="signal-step" style="--step-index: ${index}">
        <i></i>${signal}
      </span>
    `,
  )
  .join('')

const solutionMarkup = solutions
  .map(
    (solution, index) => `
      <li class="solution-item reveal">
        <span>0${index + 1}</span>
        <p>${solution}</p>
      </li>
    `,
  )
  .join('')

const industryMarkup = industries
  .map(
    ({ name, text }) => `
      <article class="industry-card reveal">
        <h3>${name}</h3>
        <p>${text}</p>
      </article>
    `,
  )
  .join('')

const processMarkup = processSteps
  .map(
    ({ title, text }, index) => `
      <article class="process-card reveal">
        <span>${String(index + 1).padStart(2, '0')}</span>
        <h3>${title}</h3>
        <p>${text}</p>
      </article>
    `,
  )
  .join('')

const trustMarkup = trustSignals
  .map((signal) => `<li class="trust-pill reveal">${signal}</li>`)
  .join('')

const companyDetailMarkup = companyDetails
  .map(
    ({ label, value }) => `
      <div>
        <dt>${label}</dt>
        <dd>${value}</dd>
      </div>
    `,
  )
  .join('')

const socialMarkup = socialLinks
  .map(({ name, url }) =>
    url
      ? `<a href="${url}" target="_blank" rel="noreferrer">${name}</a>`
      : `<span aria-disabled="true">${name} link pending</span>`,
  )
  .join('')

const privacyMarkup = privacyPoints
  .map((point) => `<li>${point}</li>`)
  .join('')

const faqMarkup = faqs
  .slice(0, 3)
  .map(
    ({ question, answer }) => `
      <article class="faq-card reveal">
        <h3>${question}</h3>
        <p>${answer}</p>
      </article>
    `,
  )
  .join('')

const ecosystemNodes = [
  'Zetalta',
  'RestauAI',
  'Zonbrot',
  'Voice AI',
  'Automation',
  'IoT',
  'Robotics',
  'Cloud Integrations',
  'Data Intelligence',
]

const ecosystemMarkup = ecosystemNodes
  .map((node, index) => `<span class="ecosystem-node ecosystem-node--${index + 1}">${node}</span>`)
  .join('')

document.querySelector('#app').innerHTML = `
  <div class="scroll-progress" aria-hidden="true"><span></span></div>

  <div class="page-shell">
    <header class="site-header">
      <a class="brand" href="#top" aria-label="Hanvanta home">
        <img class="brand__logo" src="/hanvanta-logo.png" width="399" height="228" alt="Hanvanta. Business, Simplified. Systems, Unified." />
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
        Menu
      </button>
      <nav class="site-nav" id="site-nav" aria-label="Primary navigation">
        <a href="#problem">Problem</a>
        <a href="#video">Story</a>
        <a href="#thesis">Thesis</a>
        <a href="#products">Products</a>
        <a href="#demos">Demos</a>
        <a href="#customers">Customers</a>
        <a class="button button--small" href="#contact">Contact Sales</a>
      </nav>
    </header>

    <main id="top">
      <section class="hero-section section">
        <div class="hero-brand-intro" aria-hidden="true">
          <span>Hanvanta</span>
          <strong>Business, Simplified. Systems, Unified.</strong>
        </div>
        <div class="hero-motion" aria-hidden="true">
          <span class="hero-motion__ring hero-motion__ring--one"></span>
          <span class="hero-motion__ring hero-motion__ring--two"></span>
          <span class="hero-motion__beam hero-motion__beam--one"></span>
          <span class="hero-motion__beam hero-motion__beam--two"></span>
          <span class="hero-motion__node hero-motion__node--one">AI employees</span>
          <span class="hero-motion__node hero-motion__node--two">Knowledge engine</span>
          <span class="hero-motion__node hero-motion__node--three">Policy control</span>
          <span class="hero-motion__node hero-motion__node--four">Workflow automation</span>
        </div>
        <div class="hero-center reveal reveal--visible">
          <div class="hero-ornament" aria-hidden="true">
            <span></span>
            <i></i>
            <span></span>
          </div>
          <p class="hero-label">${hero.eyebrow}</p>
          <h1>${hero.subtitle}</h1>
          <p class="lead">${hero.text}</p>
          <div class="hero-chip-row">
            ${hero.chips.map((chip) => `<span>${chip}</span>`).join('')}
          </div>
          <div class="hero-actions">
            <a class="button button--dark" href="#contact">${hero.primaryCta}</a>
            <a class="button button--secondary" href="#thesis">${hero.secondaryCta}</a>
          </div>
          <p class="hero-footnote">A business-first AI company with a technical operating layer underneath: connectors, orchestration, memory, agents, policy, and measurable outcomes.</p>
        </div>
      </section>

      <section class="section problem-section" id="problem">
        <div class="section-heading reveal">
          <p class="eyebrow">Investor-grade thesis</p>
          <h2>Hanvanta turns scattered business operations into connected AI execution.</h2>
        </div>
        <div class="thesis-grid">
          <article class="thesis-card thesis-card--pain reveal">
            <span>01</span>
            <h3>Small business foundation</h3>
            <p>For companies with minimal systems or low digital presence, Hanvanta builds the AI-ready digital base: website, chat, customer workflows, content, and simple automation.</p>
          </article>
          <article class="thesis-card thesis-card--shift reveal">
            <span>02</span>
            <h3>Growing company unification</h3>
            <p>For medium businesses with static tools or legacy processes, Hanvanta connects CRM, finance, HR, inventory, communication, approvals, and workflows into shared source-linked context.</p>
          </article>
          <article class="thesis-card thesis-card--answer reveal">
            <span>03</span>
            <h3>Enterprise waste reduction</h3>
            <p>For enterprises with expensive disconnected systems, Hanvanta reduces tool waste by unifying ERP, CRM, supply chain, MES, factory floor, IoT, robotics, data, policy, and AI execution.</p>
          </article>
        </div>
      </section>

      <section class="section video-section" id="video">
        <div class="hyperframe-panel reveal">
          <div class="hyperframe-copy">
            <p class="eyebrow">Remotion-style pitch story</p>
            <h2>How Hanvanta connects systems, teams, data, and AI agents into one working loop.</h2>
            <div class="video-timeline" aria-label="Hanvanta product story timeline">
              <span><b>0s</b> scattered systems</span>
              <span><b>5s</b> knowledge graph</span>
              <span><b>10s</b> agents + people</span>
              <span><b>15s</b> visible execution</span>
            </div>
          </div>
          <div class="motion-frame remotion-frame" aria-label="Animated Hanvanta hyperframe video">
            <div class="motion-frame__top">
              <span></span>
              <span></span>
              <span></span>
              <strong>Agentic operating layer</strong>
            </div>
            <div class="motion-frame__canvas">
              <div class="remotion-caption remotion-caption--one">Work starts scattered across systems</div>
              <div class="remotion-caption remotion-caption--two">Hanvanta builds governed memory and knowledge graph</div>
              <div class="remotion-caption remotion-caption--three">Agents and people execute together</div>
              <div class="remotion-caption remotion-caption--four">Feedback improves the next workflow</div>
              <span class="orbit-dot orbit-dot--one"></span>
              <span class="orbit-dot orbit-dot--two"></span>
              <span class="orbit-dot orbit-dot--three"></span>
              <div class="glass-panel glass-panel--chat">
                <small>Chat request</small>
                <b>Build campaign panel</b>
              </div>
              <div class="glass-panel glass-panel--memory">
                <small>Source-linked context</small>
                <b>Brand + CRM + assets + history</b>
              </div>
              <div class="glass-panel glass-panel--approval">
                <small>Policy layer</small>
                <b>RBAC + ABAC approval</b>
              </div>
              <div class="glass-panel glass-panel--deploy">
                <small>Customer cloud</small>
                <b>Workflow deployed</b>
              </div>
            </div>
          </div>
        </div>
        <div class="workflow-grid">
          ${workflowExampleMarkup}
        </div>
      </section>

      <section class="section comparison-section" id="thesis">
        <div class="section-heading reveal">
          <p class="eyebrow">Technical plus business view</p>
          <h2>The product is not one AI tool. It is the layer that makes many tools useful inside a company.</h2>
        </div>
        <div class="secret-grid">
          ${comparisonMarkup}
        </div>
        <div class="comparison-table-wrap reveal" aria-label="How Hanvanta relates to popular AI and automation tools">
          <table class="comparison-table">
            <thead>
              <tr>
                <th scope="col">People recognize</th>
                <th scope="col">Where it helps</th>
                <th scope="col">Hanvanta perspective</th>
              </tr>
            </thead>
            <tbody>
              ${toolComparisonMarkup}
            </tbody>
          </table>
        </div>
        <div class="tool-keyword-panel reveal">
          <div>
            <p class="eyebrow">Foundation layer</p>
            <h3>Use the best engines where they fit. Keep company control above them.</h3>
            <p>Groq, NVIDIA, Sarvam, local models, workflow engines, browser agents, and voice systems become governed provider layers behind Hanvanta routing, access control, logs, cost controls, and deployment boundaries.</p>
          </div>
          <div class="tool-group-grid">
            ${toolGroupMarkup}
          </div>
        </div>
        <div class="benchmark-panel reveal">
          <div>
            <p class="eyebrow">SEO and buyer language</p>
            <h3>Keywords buyers already search for.</h3>
            <p>The site now uses recognizable terms while keeping the product message simple: unified context, connected workflows, AI agents, and governed execution.</p>
          </div>
          <div class="tool-keyword-list">
            ${keywordClusterMarkup}
          </div>
        </div>
        <ul class="trust-list trust-list--compact reveal">
          ${trustMarkup}
        </ul>
      </section>

      <section class="section section--products" id="products">
        <div class="section-heading reveal">
          <p class="eyebrow">Proof of build direction</p>
          <h2>Product wedges inside the Hanvanta ecosystem.</h2>
        </div>
        <div class="product-grid">
          ${productMarkup}
        </div>
      </section>

      <section class="section demo-section" id="demos">
        <div class="section-heading reveal">
          <p class="eyebrow">Demo lab</p>
          <h2>Upcoming demos will make the operating-layer thesis tangible.</h2>
        </div>
        <div class="demo-grid">
          ${demoProductMarkup}
        </div>
        <p class="demo-note reveal">
          Provider keys for Groq, NVIDIA, Sarvam, and future model or voice systems are treated as private infrastructure: routed through Hanvanta's backend layer with access control, logging, fallbacks, cost limits, and customer-specific deployment boundaries.
        </p>
      </section>

      <section class="section customer-section" id="customers">
        <div class="section-heading reveal">
          <p class="eyebrow">Early customer contexts</p>
          <h2>Real businesses where Hanvanta-style workflows can be demonstrated.</h2>
        </div>
        <div class="customer-grid">
          ${customerMarkup}
        </div>
      </section>

      <section class="section faq-section" id="faq">
        <div class="section-heading reveal">
          <p class="eyebrow">Investor and buyer clarity</p>
          <h2>Common questions about Hanvanta.</h2>
        </div>
        <div class="faq-grid">
          ${faqMarkup}
        </div>
      </section>

      <section class="section contact-section" id="contact">
        <div class="contact-grid reveal">
          <div class="contact-panel">
            <img class="contact-logo" src="/hanvanta-logo.png" width="720" height="370" alt="Hanvanta" />
            <p class="eyebrow">Start with Hanvanta</p>
            <h2>${cta.title}</h2>
            <p>${cta.text}</p>
            <dl class="company-details">
              ${companyDetailMarkup}
            </dl>
            <div class="social-links" aria-label="Hanvanta social links">
              ${socialMarkup}
            </div>
          </div>
          <form class="contact-form" action="https://api.web3forms.com/submit" method="post">
            <input type="hidden" name="access_key" value="53461c4b-9039-4af8-9d4f-74aed304b923" />
            <input type="hidden" name="subject" value="New Hanvanta consultation request" />
            <input type="hidden" name="from_name" value="Hanvanta Website" />
            <input type="checkbox" name="botcheck" class="hidden-field" tabindex="-1" autocomplete="off" />
            <label>
              Name
              <input name="name" type="text" autocomplete="name" required />
            </label>
            <label>
              Work email
              <input name="email" type="email" autocomplete="email" required />
            </label>
            <label>
              Company
              <input name="company" type="text" autocomplete="organization" />
            </label>
            <label>
              What should Hanvanta help with?
              <textarea name="message" rows="5" required></textarea>
            </label>
            <button class="button button--dark" type="submit">${cta.button}</button>
            <p class="form-status" role="status">Submissions are sent securely to Hanvanta through Web3Forms.</p>
          </form>
          <div class="privacy-mini" id="privacy">
            <strong>Privacy posture</strong>
            <span>Customer data stays governed by the customer with approved connectors, policy controls, and auditability.</span>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <p>Hanvanta</p>
      <p><a href="#privacy">Privacy</a> · <a href="#contact">Contact</a> · © 2026 Hanvanta Technologies Pvt Limited</p>
    </footer>
  </div>
`

const navToggle = document.querySelector('.nav-toggle')
const siteNav = document.querySelector('#site-nav')

navToggle?.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true'
  navToggle.setAttribute('aria-expanded', String(!isOpen))
  siteNav?.classList.toggle('site-nav--open', !isOpen)
})

siteNav?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    navToggle?.setAttribute('aria-expanded', 'false')
    siteNav.classList.remove('site-nav--open')
  }
})

const progressBar = document.querySelector('.scroll-progress span')

const updateProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0
  progressBar?.style.setProperty('--progress', `${Math.min(progress, 1) * 100}%`)
}

window.addEventListener('scroll', updateProgress, { passive: true })
window.addEventListener('resize', updateProgress)
updateProgress()

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--visible')
        revealObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.12 },
)

document.querySelectorAll('.reveal:not(.reveal--visible)').forEach((element) => {
  revealObserver.observe(element)
})

const contactForm = document.querySelector('.contact-form')
const formStatus = document.querySelector('.form-status')

contactForm?.addEventListener('submit', async (event) => {
  event.preventDefault()

  if (!(contactForm instanceof HTMLFormElement)) {
    return
  }

  const submitButton = contactForm.querySelector('button[type="submit"]')
  submitButton?.setAttribute('disabled', 'true')
  formStatus?.classList.remove('form-status--success', 'form-status--error')
  if (formStatus) {
    formStatus.textContent = 'Sending your message...'
  }

  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm),
    })
    const result = await response.json()

    if (result.success) {
      contactForm.reset()
      formStatus?.classList.add('form-status--success')
      if (formStatus) {
        formStatus.textContent = 'Message sent. Hanvanta will receive this request at contact@hanvanta.com.'
      }
    } else {
      throw new Error(result.message || 'Web3Forms could not send the message.')
    }
  } catch (error) {
    formStatus?.classList.add('form-status--error')
    if (formStatus) {
      formStatus.textContent = `Message not sent: ${error.message}`
    }
  } finally {
    submitButton?.removeAttribute('disabled')
  }
})
