import React, { useMemo } from 'react'
import Spline from '@splinetool/react-spline'
import { ShieldCheck, PlugZap, Server, Lock, BarChart3, Database, ArrowRight } from 'lucide-react'

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wide text-white/70">
      {children}
    </span>
  )
}

function Stat({ value, label }) {
  return (
    <div>
      <div className="text-2xl font-semibold text-white">{value}</div>
      <div className="text-xs text-white/60 mt-1">{label}</div>
    </div>
  )
}

export default function App() {
  const navItems = useMemo(() => ([
    { label: 'Capabilities', href: '#features' },
    { label: 'Security', href: '#security' },
    { label: 'Reliability', href: '#reliability' },
    { label: 'Pricing', href: '#pricing' },
  ]), [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="flex items-center gap-3">
              <div className="h-6 w-6 rounded-md bg-gradient-to-br from-emerald-400 to-cyan-400 shadow-lg" />
              <span className="text-white text-base font-semibold tracking-wide">Synapse</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} className="hover:text-white transition-colors">{n.label}</a>
              ))}
            </nav>
            <div className="hidden md:block">
              <a href="#demo" className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-black hover:bg-emerald-400 transition-colors">
                Request Enterprise Demo
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[92vh] w-full overflow-hidden" aria-label="Hero">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Dark gradient and subtle tint overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Pill>AI-Powered Cross-Platform Integration</Pill>
          </div>
          <h1 className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
            Seamless data synchronization. Zero-maintenance integration.
          </h1>
          <p className="mt-5 max-w-2xl text-white/70 text-base sm:text-lg">
            Synapse connects legacy enterprise systems with modern platforms using AI-driven mapping, validation, and monitoring. Built for CIOs and IT leaders who demand reliability, security, and speed.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#demo" className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-3 text-sm font-medium text-black hover:bg-emerald-400 transition-colors">
              Request Enterprise Demo
              <ArrowRight size={18} />
            </a>
            <a href="#features" className="inline-flex items-center rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/80 hover:bg-white/10 transition-colors">
              Explore capabilities
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <Stat value="99.99%" label="Uptime SLA" />
            <Stat value="< 60d" label="Enterprise Go-Live" />
            <Stat value="> 250" label="Connectors" />
            <Stat value="SOC 2" label="Type II Certified" />
          </div>
        </div>
      </section>

      {/* Logos / Trust */}
      <section id="trust" className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-center text-xs uppercase tracking-wider text-white/50">Trusted by forward-thinking enterprises</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 opacity-70">
            {['Apex Systems', 'Northwind', 'Globex', 'UmbraTech', 'BlueVector', 'Helios Group'].map((n) => (
              <div key={n} className="flex items-center justify-center rounded-md border border-white/10 bg-white/5 py-3 text-sm text-white/70">
                {n}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-white/10 bg-gradient-to-b from-black to-[#07090a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Designed for high‑stakes integration</h2>
            <p className="mt-3 text-white/70">AI-assisted mapping and automated maintenance keep your data flowing across ERP, CRM, HCM, and bespoke legacy stacks.</p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Feature icon={<PlugZap className="h-5 w-5 text-emerald-400" />} title="Universal Connectors" desc="250+ prebuilt connectors across mainframes, on‑prem apps, and SaaS. Extensible via SDK." />
            <Feature icon={<Server className="h-5 w-5 text-emerald-400" />} title="Self‑Healing Pipelines" desc="AI detects schema drift and auto‑patches mappings without downtime." />
            <Feature icon={<Database className="h-5 w-5 text-emerald-400" />} title="Deterministic Sync" desc="Exactly‑once delivery, idempotent retries, and end‑to‑end lineage." />
            <Feature icon={<ShieldCheck className="h-5 w-5 text-emerald-400" />} title="Enterprise‑grade Security" desc="SOC 2 Type II, SSO/SAML, field‑level encryption, and private networking." />
            <Feature icon={<Lock className="h-5 w-5 text-emerald-400" />} title="Governance & Controls" desc="Granular RBAC, audit trails, and policy‑based data residency." />
            <Feature icon={<BarChart3 className="h-5 w-5 text-emerald-400" />} title="Observability" desc="Real‑time dashboards, anomaly alerts, and predictive incident prevention." />
          </div>
        </div>
      </section>

      {/* Reliability / Security highlight */}
      <section id="reliability" className="relative border-t border-white/10 bg-[#07090a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Pill>Reliability & Security</Pill>
            <h3 className="mt-4 text-2xl sm:text-3xl font-semibold">Engineered for mission‑critical workloads</h3>
            <p className="mt-3 text-white/70">Multi‑AZ orchestration, automatic failover, and continuous verification deliver consistent throughput under peak loads. Security is baked in from design to operation.</p>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" /> Private VPC peering and IP allow‑listing</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" /> End‑to‑end encryption (in transit and at rest)</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" /> Continuous compliance: SOC 2 Type II, ISO 27001</li>
            </ul>
          </div>
          <div id="security" className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="grid grid-cols-3 gap-6">
              <CardSmall title="Runtime Isolation" desc="Per‑tenant isolation with resource quotas." />
              <CardSmall title="Key Management" desc="Customer‑managed keys via KMS." />
              <CardSmall title="Access Control" desc="SAML/SCIM, SSO, and just‑in‑time roles." />
            </div>
            <div className="mt-6 rounded-lg bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 p-5 border border-emerald-400/20">
              <div className="text-sm text-white/80">“Synapse eliminated months of custom integration work. We went live in six weeks and haven’t touched a single mapping since.”</div>
              <div className="mt-3 text-xs text-white/50">VP, Enterprise Architecture — Global Manufacturing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section id="pricing" className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h3 className="text-3xl font-semibold">Transparent enterprise pricing</h3>
          <p className="mt-3 text-white/70">Tiered by volume and connectors. Annual agreements with priority support and SLAs.</p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80">
            Contact sales for a tailored quote.
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section id="demo" className="relative border-t border-white/10 bg-[#07090a]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <div className="flex items-center justify-between gap-6 flex-wrap">
              <div>
                <h4 className="text-2xl font-semibold">Request Enterprise Demo</h4>
                <p className="mt-2 text-white/70 text-sm">Show us your stack. We’ll map a live integration plan in under a week.</p>
              </div>
              <a href="mailto:enterprise@synapse.example?subject=Enterprise%20Demo%20Request" className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-3 text-sm font-medium text-black hover:bg-emerald-400 transition-colors">
                Email sales
                <ArrowRight size={18} />
              </a>
            </div>
            <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input required placeholder="Work email" className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" />
              <input required placeholder="Company" className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" />
              <input placeholder="# of systems to integrate" className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" />
              <input placeholder="Timeline (e.g., Q1)" className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" />
              <textarea placeholder="Notes" rows={4} className="sm:col-span-2 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" />
              <button type="submit" className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 px-5 py-3 text-sm font-medium text-black hover:bg-emerald-400 transition-colors">
                Request Enterprise Demo
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-5 w-5 rounded-md bg-gradient-to-br from-emerald-400 to-cyan-400" />
            <span className="text-white/70 text-sm">© {new Date().getFullYear()} Synapse. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Security</a>
            <a href="#" className="hover:text-white">Compliance</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Feature({ icon, title, desc }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-emerald-400/10 ring-1 ring-emerald-400/30">
          {icon}
        </div>
        <div className="font-medium">{title}</div>
      </div>
      <p className="mt-3 text-sm text-white/70">{desc}</p>
    </div>
  )
}

function CardSmall({ title, desc }) {
  return (
    <div className="rounded-lg border border-white/10 bg-black/40 p-4">
      <div className="text-sm font-medium">{title}</div>
      <div className="mt-1 text-xs text-white/60">{desc}</div>
    </div>
  )
}
