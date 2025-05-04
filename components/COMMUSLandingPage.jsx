import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  CloudCog,
  GitBranchPlus,
  ShieldCheck,
  Users,
  Send,
} from "lucide-react";

/**
 * COMMUS Landing Page – Enterprise‑grade marketing SPA
 * Fully self‑contained component, ready for Next.js / React + TailwindCSS
 */
export default function COMMUSLandingPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ---------------- Navigation & Data ---------------- */
  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how" },
    { label: "Architecture", href: "#architecture" },
    { label: "About", href: "#about" },
  ];

  const featureData = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-700" />,
      title: "Environment Freeze",
      desc: "Lock branches instantly so QA can test in peace.",
    },
    {
      icon: <GitBranchPlus className="w-8 h-8 text-blue-700" />,
      title: "Multi‑VCS Support",
      desc: "Bitbucket, GitLab, GitHub self‑hosted—out of the box.",
    },
    {
      icon: <CloudCog className="w-8 h-8 text-blue-700" />,
      title: "REST & Webhook API",
      desc: "Seamless integration with existing CI/CD pipelines.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-700" />,
      title: "Role‑based Access",
      desc: "Granular permissions for devs, testers, release managers.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-700" />,
      title: "Insight Dashboards",
      desc: "Track environment health & freeze history in real‑time.",
    },
    {
      icon: <Send className="w-8 h-8 text-blue-700" />,
      title: "Slack & Teams Alerts",
      desc: "Automatic notifications when environments change state.",
    },
  ];

  const howSteps = [
    {
      step: "1",
      title: "Connect Repository",
      desc: "Install pre‑receive hooks in minutes—zero downtime.",
    },
    {
      step: "2",
      title: "Define Freeze Rules",
      desc: "QA leads configure branch locks via intuitive UI.",
    },
    {
      step: "3",
      title: "Automate & Monitor",
      desc: "CI/CD signals trigger auto freeze / unfreeze cycles.",
    },
  ];

  /* ---------------- Component JSX ---------------- */
  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-blue-100 via-blue-50 to-blue-25 text-gray-900 scroll-smooth">
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-700">COMMUS</span>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="hover:text-blue-700 font-medium">
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              className="px-5 py-2 bg-blue-700 text-white rounded-full hover:shadow-lg transition"
            >
              Request Demo
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-blue-700" />
            <span className="w-6 h-0.5 bg-blue-700" />
            <span className="w-6 h-0.5 bg-blue-700" />
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="py-2 border-b border-gray-200"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              className="mt-4 px-5 py-2 bg-blue-700 text-white rounded-full text-center"
              onClick={() => setMobileOpen(false)}
            >
              Request Demo
            </a>
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        {/* Decorative blobs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.15, scale: 1.2 }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-blue-200 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.1, scale: 1.3 }}
          transition={{ duration: 14, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -bottom-40 -right-20 w-[28rem] h-[28rem] bg-blue-300 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold text-blue-800 drop-shadow"
          >
            Turn SDLC Friction <br className="hidden md:block" /> Into Flow 🚀
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl max-w-2xl mx-auto"
          >
            COMMUS empowers QA and Dev teams with enforceable Git environment controls—no more
            fragile chat coordination.
          </motion.p>
          <motion.a
            href="#cta"
            whileHover={{ scale: 1.05 }}
            className="inline-block mt-10 px-8 py-3 bg-blue-700 text-white rounded-full shadow-lg"
          >
            See It In Action
          </motion.a>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section id="features" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800">Key Features</h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Built with enterprise‑grade scalability and security in mind
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {featureData.map((f) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-blue-50 rounded-xl p-6 shadow-md text-left"
              >
                {f.icon}
                <h3 className="mt-4 text-xl font-semibold text-blue-800">{f.title}</h3>
                <p className="mt-2 text-gray-700">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section id="how" className="py-20 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            How COMMUS Fits Into Your Workflow
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {howSteps.map((s) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative bg-white rounded-xl shadow-lg p-8 flex flex-col items-center"
              >
                <span className="absolute -top-6 flex items-center justify-center w-12 h-12 rounded-full bg-blue-700 text-white text-xl font-bold shadow-lg">
                  {s.step}
                </span>
                <h3 className="mt-6 text-xl font-semibold text-blue-800">{s.title}</h3>
                <p className="mt-3 text-gray-700">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ARCHITECTURE ================= */}
{/* ================= ARCHITECTURE ================= */}
<section id="architecture" className="py-20 bg-white">
  <style>{`
    .flow-step{
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      width:140px;padding:20px 12px;background:#ffffff;border-radius:12px;
      box-shadow:0 4px 10px rgba(0,0,0,.08);
    }
    .flow-step h3{margin-top:6px;font-size:14px;font-weight:600;color:#1e3a8a;}
    .flow-step p{margin-top:2px;font-size:12px;color:#475569;}
    .flow-icon{font-size:26px;color:#2563eb;}
    .flow-arrow svg{width:38px;height:38px;stroke:#2563eb;}
  `}</style>

  <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-800 mb-12">
    High-Level Flow
  </h2>

  {/* Responsive flow */}
  <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-6xl mx-auto px-4">
    {/* Developer */}
    <div className="flow-step">
      <div className="flow-icon">💻</div>
      <h3>Developer</h3>
      <p>Git Client</p>
    </div>

    {/* Arrow */}
    <div className="flow-arrow hidden md:block">
      <svg fill="none" viewBox="0 0 24 24">
        <path d="M4 12h16m0 0-5-5m5 5-5 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>

    {/* Git Repo */}
    <div className="flow-step">
      <div className="flow-icon">📦</div>
      <h3>Git Repo</h3>
      <p>Bitbucket / GitLab / GitHub</p>
    </div>

    {/* Arrow */}
    <div className="flow-arrow hidden md:block">
      <svg fill="none" viewBox="0 0 24 24">
        <path d="M4 12h16m0 0-5-5m5 5-5 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>

    {/* Hook */}
    <div className="flow-step">
      <div className="flow-icon">🛡️</div>
      <h3>Pre-receive Hook</h3>
      <p>Intercepts Push</p>
    </div>

    {/* Arrow */}
    <div className="flow-arrow hidden md:block">
      <svg fill="none" viewBox="0 0 24 24">
        <path d="M4 12h16m0 0-5-5m5 5-5 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>

    {/* COMMUS */}
    <div className="flow-step">
      <div className="flow-icon">⚙️</div>
      <h3>COMMUS API</h3>
      <p>Policy Engine</p>
    </div>

    {/* Arrow */}
    <div className="flow-arrow hidden md:block">
      <svg fill="none" viewBox="0 0 24 24">
        <path d="M4


      {/* ================= CTA ================= */}
      <section id="cta" className="py-24 bg-blue-700 text-white text-center">
        <h2 className="text-4xl font-bold">Ready to Eliminate Release Chaos?</h2>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          Request a personalized demo and discover how COMMUS transforms your SDLC coordination.
        </p>
        <a
          href="mailto:info@commus.io"
          className="inline-block mt-8 px-10 py-4 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:bg-blue-50"
        >
          Contact Sales
        </a>
      </section>

      {/* ================= FOOTER ================= */}
      <footer id="about" className="bg-gray-100 py-10 text-center text-sm text-gray-600">
        <p>
          © 2025 COMMUS. Built by engineers, for engineering teams — turning process friction into
          flow.
        </p>
      </footer>
    </div>
  );
}
