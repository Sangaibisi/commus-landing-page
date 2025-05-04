<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>COMMUS – Preview</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-blue-100 via-blue-50 to-blue-25 text-gray-900 font-sans">
  <!-- HERO -->
  <section class="text-center py-16 px-4">
    <h1 class="text-5xl font-extrabold text-blue-800 drop-shadow">COMMUS</h1>
    <p class="mt-4 text-xl text-blue-700">Smart SDLC Coordination Platform</p>
    <p class="mt-6 max-w-2xl mx-auto">Built by engineers, for engineering teams — COMMUS turns process friction into flow.</p>
    <a href="#features" class="mt-8 inline-block px-8 py-3 bg-blue-700 text-white rounded-full shadow-lg">Explore Features</a>
  </section>

  <!-- FEATURES -->
  <section id="features" class="bg-white py-16 px-4">
    <h2 class="text-3xl font-bold text-center text-blue-800 mb-10">Key Features</h2>
    <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div class="bg-blue-50 p-6 rounded-xl shadow"><h3 class="font-semibold text-blue-800">Environment Freeze</h3><p class="mt-2 text-sm">Lock branches instantly so QA can test in peace.</p></div>
      <div class="bg-blue-50 p-6 rounded-xl shadow"><h3 class="font-semibold text-blue-800">Multi‑VCS Support</h3><p class="mt-2 text-sm">Bitbucket, GitLab, GitHub self‑hosted—out of the box.</p></div>
      <div class="bg-blue-50 p-6 rounded-xl shadow"><h3 class="font-semibold text-blue-800">REST & Webhook API</h3><p class="mt-2 text-sm">Seamless integration with existing CI/CD pipelines.</p></div>
    </div>
  </section>

  <!-- ARCHITECTURE -->
  {/* ================= ARCHITECTURE ================= */}
      <section id="architecture" className="py-20 bg-white">
        <style>{`
          .flow-step{display:flex;flex-direction:column;align-items:center;justify-content:center;width:140px;padding:20px 12px;background:#ffffff;border-radius:12px;box-shadow:0 4px 10px rgba(0,0,0,.08);} 
          .flow-step h3{margin-top:6px;font-size:14px;font-weight:600;color:#1e3a8a;} 
          .flow-step p{margin-top:2px;font-size:12px;color:#475569;} 
          .flow-icon{font-size:26px;color:#2563eb;} 
          .flow-arrow svg{width:38px;height:38px;stroke:#2563eb;} 
        `}</style>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-800 mb-12">High‑Level Flow</h2>

        {/* Responsive flow */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-6xl mx-auto px-4">
          <div className="flow-step">
            <div className="flow-icon">💻</div>
            <h3>Developer</h3>
            <p>Git Client</p>
          </div>

          <div className="flow-arrow hidden md:block">
            <svg fill="none" viewBox="0 0 24 24">
              <path d="M4 12h16m0 0-5-5m5 5-5 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="flow-step">
            <div className="flow-icon">📦</div>
            <h3>Git Repo</h3>
            <p>Bitbucket / GitLab / GitHub</p>
          </div>

          <div className="flow-arrow hidden md:block">
            <svg fill="none" viewBox="0 0 24 24">
              <path d="M4 12h16m0 0-5-5m5 5-5 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="flow-step">
            <div className="flow-icon">🛡️</div>
            <h3>Pre‑receive Hook</h3>
            <p>Intercepts Push</p>
          </div>

          <div className="flow-arrow hidden md:block">
            <svg fill="none" viewBox="0 0 24 24">
              <path d="M4 12h16m0 0-5-5m5 5-5 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="flow-step">
            <div className="flow-icon">⚙️</div>
            <h3>COMMUS API</h3>
            <p>Policy Engine</p>
          </div>

          <div className="flow-arrow hidden md:block">
            <svg fill="none" viewBox="0 0 24 24">
              <path d="M4 12h16m0 0-5-5m5 5-5 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="flow-step">
            <div className="flow-icon">🔔</div>
            <h3>Notifications</h3>
            <p>Slack / Teams</p>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8 max-w-xl mx-auto">
          Push traverses each stage; COMMUS validates policies — returns <strong>Allow / Deny</strong> and alerts your team.
        </p>
      </section>

  <!-- CTA -->
  <section class="py-20 bg-blue-700 text-white text-center">
    <h2 class="text-4xl font-bold">Ready to Eliminate Release Chaos?</h2>
    <p class="mt-4 max-w-xl mx-auto">Request a personalized demo and discover how COMMUS transforms your SDLC coordination.</p>
    <a href="mailto:info@commus.io" class="mt-8 inline-block px-10 py-4 bg-white text-blue-700 font-semibold rounded-full shadow-lg">Contact Sales</a>
  </section>
</body>
</html>
