import { useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
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
		<section id="architecture" className="py-20 bg-white">
		  <div className="max-w-6xl mx-auto px-4 text-center">
			<h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-12">
			  Inside the COMMUS Engine
			</h2>
			<div className="grid md:grid-cols-2 gap-10 text-left">
			  {/* Box 1 */}
			  <div className="flex items-start gap-4">
				<div className="text-blue-700 mt-1">
				  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
					<path d="M3 3v18h18" />
				  </svg>
				</div>
				<div>
				  <h3 className="text-xl font-semibold text-gray-800">Git Hook Interceptor</h3>
				  <p className="mt-2 text-gray-600">
					COMMUS integrates at the Git level via pre‑receive hooks to intercept every push before it hits your repository.
				  </p>
				</div>
			  </div>

			  {/* Box 2 */}
			  <div className="flex items-start gap-4">
				<div className="text-blue-700 mt-1">
				  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
					<path d="M9 12h6M9 16h6M5 8h14" />
				  </svg>
				</div>
				<div>
				  <h3 className="text-xl font-semibold text-gray-800">Rule-Based Policy Engine</h3>
				  <p className="mt-2 text-gray-600">
					Flexible branch freezing rules enforced in real-time—no need for manual coordination.
				  </p>
				</div>
			  </div>

			  {/* Box 3 */}
			  <div className="flex items-start gap-4">
				<div className="text-blue-700 mt-1">
				  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
					<path d="M4 6h16M4 12h16M4 18h16" />
				  </svg>
				</div>
				<div>
				  <h3 className="text-xl font-semibold text-gray-800">Automated CI/CD Integration</h3>
				  <p className="mt-2 text-gray-600">
					Freeze or unfreeze environments based on signals from Jenkins, GitHub Actions, GitLab CI, and more.
				  </p>
				</div>
			  </div>

			  {/* Box 4 */}
			  <div className="flex items-start gap-4">
				<div className="text-blue-700 mt-1">
				  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
					<path d="M3 3h18v18H3V3z" />
				  </svg>
				</div>
				<div>
				  <h3 className="text-xl font-semibold text-gray-800">Dashboards & Alerts</h3>
				  <p className="mt-2 text-gray-600">
					Visualize environment health and freeze status in real time with Slack & Teams alerts.
				  </p>
				</div>
			  </div>
			</div>
		  </div>
		</section>


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
