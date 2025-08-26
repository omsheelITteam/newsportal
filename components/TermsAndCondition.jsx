// TERMSANDCONDITIONS
export default function TermsAndConditions() {
  const lastUpdated = "August 18, 2025";
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-yellow-400/20 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <a href="/" className="inline-flex items-center gap-2 group">
           
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              <span className="text-yellow-400">My</span>
              <span className="text-yellow-400">Startup</span>
              <span className="text-white">NEWS</span>
            </h1>
          </a>
          <div className="text-xs text-neutral-400">Last updated: {lastUpdated}</div>
        </div>
      </header>

      {/* Main Card */}
      <main className="mx-auto max-w-5xl px-4 py-8">
        <div className="relative overflow-hidden rounded-2xl border border-yellow-400/30 bg-neutral-900 shadow-xl">
          {/* Accent */}
          <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-[radial-gradient(ellipse_at_top,rgba(250,204,21,0.25),transparent_60%)]" />

          <div className="relative p-6 sm:p-10">
            {/* Title */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-neutral-950 px-3 py-1 text-xs font-medium text-yellow-400">
                 Terms & Conditions
              </div>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold leading-tight">
                Terms and Conditions for <span className="px-2 rounded  text-yellow-400">MyStartup<span className="text-white">NEWS</span></span>
              </h2>
              <p className="mt-3 text-sm text-neutral-400">Please read these Terms carefully before using our website and services.</p>
            </div>

            {/* Quick Nav */}
            <nav className="mb-10 grid gap-2 sm:grid-cols-2">
              {[
                ["1. Acceptance of Terms", "acceptance"],
                ["2. Services Provided", "services"],
                ["3. User Accounts", "accounts"],
                ["4. Writers & Contributors", "writers"],
                ["5. Intellectual Property", "ip"],
                ["6. Use of Cookies", "cookies"],
                ["7. User Conduct", "conduct"],
                ["8. Third-Party Links", "links"],
                ["9. Limitation of Liability", "liability"],
                ["10. Termination of Access", "termination"],
                ["11. Governing Law", "law"],
                ["12. Contact Us", "contact"],
              ].map(([label, id]) => (
                <a
                  key={id}
                  href={`${id}`}
                  className="group flex items-center justify-between rounded-xl border border-neutral-700/60 bg-neutral-950 px-4 py-3 text-sm transition hover:border-yellow-400/60 hover:bg-neutral-900"
                >
                  <span className="font-medium">{label}</span>
                  <span className="text-xs text-neutral-400 group-hover:text-yellow-400">Jump ↗</span>
                </a>
              ))}
            </nav>

            {/* Sections */}
            <Section id="acceptance" title="1. Acceptance of Terms">
              By accessing or using <Highlight>MyStartupNEWS</Highlight> (the "Site"), you agree to be bound by these Terms and our Privacy Policy. If you do not agree, please discontinue use of the Site immediately.
            </Section>

            <Section id="services" title="2. Services Provided">
              <Highlight>MyStartupNEWS</Highlight> provides real-time news, articles, features, op-eds, and related content. We may update, modify, or discontinue any part of our services at any time without prior notice.
            </Section>

            <Section id="accounts" title="3. User Accounts">
              <ul className="list-disc pl-6 space-y-2">
                <li>Some features require an account with accurate and current information.</li>
                <li>You are responsible for maintaining the confidentiality of your login credentials and all activity under your account.</li>
                <li>Notify us immediately of any unauthorized use or security breach.</li>
              </ul>
            </Section>

            <Section id="writers" title="4. Writers & Contributors">
              <ul className="list-disc pl-6 space-y-2">
                <li>Contributors may submit news, articles, or opinions for publication.</li>
                <li>By submitting content, you grant <Highlight>MyStartupNEWS</Highlight> a non-exclusive, worldwide, royalty‑free license to use, reproduce, distribute, and promote the content in connection with the Site.</li>
                <li>Content must not infringe intellectual property, contain defamatory material, or violate any law. We may edit, reject, or remove content at our discretion.</li>
              </ul>
            </Section>

            <Section id="ip" title="5. Intellectual Property">
              Unless otherwise stated, all Site materials (text, graphics, logos, videos, design) are owned by or licensed to <Highlight>MyStartupNEWS</Highlight>. You may not copy, reproduce, or redistribute content without our prior written permission, except for fair personal use such as sharing links with attribution.
            </Section>

            <Section id="cookies" title="6. Use of Cookies">
              We use cookies to improve user experience, personalize content, and enhance security. For details on types of cookies and your choices, please review our Cookie Policy.
            </Section>

            <Section id="conduct" title="7. User Conduct">
              You agree not to:
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Post unlawful, harmful, defamatory, or offensive content.</li>
                <li>Interfere with or disrupt the Site or its infrastructure.</li>
                <li>Use the Site for unauthorized commercial activities or spamming.</li>
              </ul>
              Violation may result in suspension or termination of access.
            </Section>

            <Section id="links" title="8. Third‑Party Links">
              The Site may contain links to external websites not operated by us. <Highlight>MyStartupNEWS</Highlight> is not responsible for their content, policies, or practices. Accessing third‑party sites is at your own risk.
            </Section>

            <Section id="liability" title="9. Limitation of Liability">
              The Site and its content are provided on an “as is” basis without warranties of any kind. To the fullest extent permitted by law, <Highlight>MyStartupNEWS</Highlight> shall not be liable for any indirect, incidental, consequential, or punitive damages, or for loss of data, revenue, or profits arising from your use of the Site.
            </Section>

            <Section id="termination" title="10. Termination of Access">
              We may suspend or terminate access to the Site immediately, without prior notice or liability, for any reason including violation of these Terms.
            </Section>

            <Section id="law" title="11. Governing Law">
              These Terms are governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana.
            </Section>

            <Section id="contact" title="12. Contact Us">
              <div className="space-y-1">
                <div><strong>MyStartupNEWS</strong></div>
                <div>Email: support@MyStartupnews.example</div>
                <div>Address: Your Office Address, Hyderabad, Telangana</div>
              </div>
            </Section>

            {/* Footer actions */}
            <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-800 pt-6">
              <p className="text-xs text-neutral-400">
                By continuing to use <span className="text-yellow-400 font-semibold">MyStartupNEWS</span>, you acknowledge that you have read and agree to these Terms.
              </p>
              <a
                href="#top"
                className="rounded-2xl bg-yellow-400 px-4 py-2 text-sm font-semibold text-neutral-900 shadow hover:shadow-lg transition"
              >
                Back to top ↑
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h3 className="mb-2 text-xl sm:text-2xl font-bold">
        <span className="mr-2 inline-block h-5 w-1 rounded bg-yellow-400 align-middle" />
        {title}
      </h3>
      <div className="prose prose-invert max-w-none prose-p:leading-relaxed prose-li:leading-relaxed text-neutral-300">
        {children}
      </div>
      <div className="my-6 h-px bg-gradient-to-r from-yellow-400/60 to-transparent" />
    </section>
  );
}

function Highlight({ children }) {
  return (
    <span className="font-semibold text-yellow-400">{children}</span>
  );
}