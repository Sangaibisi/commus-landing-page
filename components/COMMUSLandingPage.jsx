import { Check, Users, ShieldCheck, CloudCog } from "lucide-react";

export default function COMMUSLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-50 text-gray-900">
      <header className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-800">COMMUS</h1>
        <p className="mt-4 text-xl text-blue-700">
          Smart SDLC Coordination Platform
        </p>
        <p className="mt-6 text-lg max-w-2xl mx-auto">
          Built by engineers, for engineering teams — COMMUS turns process friction into flow.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <ShieldCheck className="text-blue-600" /> Vision & Purpose
          </h2>
          <p>
            COMMUS helps large-scale development and QA teams replace fragile verbal coordination
            with system-enforced rules, enhancing delivery reliability and reducing risk.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Users className="text-blue-600" /> Target Audience
          </h2>
          <p>
            COMMUS is designed for software development companies. Its users include developers,
            QA engineers, test leads, and release coordinators.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <CloudCog className="text-blue-600" /> The Problem & Solution
          </h2>
          <p className="mb-4">
            In projects with multiple environments (e.g., dev, test, prod), communication gaps often lead
            to errors. QA teams can't prevent pushes mid-testing reliably.
          </p>
          <p>
            COMMUS allows test leads to freeze branches through a web UI, enforced by pre-receive hooks
            in Git — no more Slack messages like "please don’t push to test."
          </p>
        </div>
      </section>

      <section className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Key Benefits</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <li className="flex items-start gap-3">
              <Check className="text-green-600 mt-1" />
              Prevents test disruption with rule-based branch locking
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-green-600 mt-1" />
              Eliminates dependency on verbal coordination
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-green-600 mt-1" />
              Enhances visibility over environment readiness
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-green-600 mt-1" />
              Supports Bitbucket, GitLab, and GitHub (self-hosted)
            </li>
          </ul>
        </div>
      </section>

      <footer className="text-center py-10 text-sm text-gray-600">
        © 2025 COMMUS. Built with care for high-performing engineering teams.
      </footer>
    </div>
  );
}
