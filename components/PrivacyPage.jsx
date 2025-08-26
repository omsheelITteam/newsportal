
// import React from "react";

// const PrivacyPage = () => {
//   return (
//     <div className="max-w-4xl mx-auto px-4 py-10 text-slate-800">
//       <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

//       <p className="mb-4">
//         At <strong>NewsPortal</strong>, we value your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
//       <ul className="list-disc pl-6 mb-4">
//         <li>Your name and email address (if you sign up or comment)</li>
//         <li>Device and browser details</li>
//         <li>IP address and location data</li>
//         <li>Cookies and usage data</li>
//       </ul>

//       <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
//       <ul className="list-disc pl-6 mb-4">
//         <li>Providing and managing content</li>
//         <li>Improving our website’s performance and features</li>
//         <li>Sending newsletters or notifications (only if subscribed)</li>
//         <li>Ensuring website security and user protection</li>
//       </ul>

//       <h2 className="text-xl font-semibold mt-6 mb-2">3. Cookies and Tracking Technologies</h2>
//       <p className="mb-4">
//         We use cookies to improve your experience on our website, track analytics, and show personalized content. You can manage cookie preferences through your browser settings.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">4. Third-Party Services</h2>
//       <p className="mb-4">
//         We may use third-party tools (e.g., Google Analytics, AdSense) which collect data to help us analyze trends or serve relevant ads. These tools have their own privacy policies.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">5. Data Security</h2>
//       <p className="mb-4">
//         We implement standard security measures to protect your data. However, no online method is 100% secure. Use the site at your own risk.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">6. Your Rights</h2>
//       <p className="mb-4">
//         You may request access to or deletion of your personal data by contacting us. You may also unsubscribe from emails at any time.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">7. Updates to This Policy</h2>
//       <p className="mb-4">
//         We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised "Last Updated" date.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact Us</h2>
//       <p>
//         If you have any questions about this policy, please contact us at: <br />
//         <a href="mailto:contact@newsportal.com" className="text-blue-600 underline">
//           contact@newsportal.com
//         </a>
//       </p>

//       <p className="text-sm text-slate-500 mt-6">Last Updated: July 13, 2025</p>
//     </div>
//   );
// };

// export default PrivacyPage;





// PRIVACYPOLICY
// export default function PrivacyPolicy() {
//   const lastUpdated = "August 18, 2025";
//   return (
//     <div className="min-h-screen bg-black text-neutral-200">
//       {/* Hero */}
//       <section className="relative overflow-hidden border-b border-yellow-500/20">
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(250,204,21,0.12),transparent_60%)]" />
//         <div className="relative mx-auto max-w-6xl px-5 py-12 md:py-16">
//           <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
//             <div>
//               <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-neutral-900/60 px-3 py-1 text-xs font-medium text-yellow-400">
//                 🔐 Privacy & Cookies
//               </div>
//               <h1 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">
//                 Privacy Policy for <span className="rounded px-2 text-yellow-400">MyStartup<span className="text-white">NEWS</span> </span>
//               </h1>
//               <p className="mt-3 max-w-2xl text-sm text-neutral-400">
//                 This page explains what data we collect, how we use it, and the choices you have.
//               </p>
//             </div>
//             <p className="text-xs text-neutral-400">Last updated: {lastUpdated}</p>
//           </div>
//         </div>
//       </section>

//       {/* Layout */}
//       <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-5 py-10 md:grid-cols-[260px,1fr]">
//         {/* Sidebar TOC */}
//         <aside className="sticky top-6 h-fit rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4">
//           <p className="mb-3 text-xs font-semibold tracking-wide text-neutral-400">ON THIS PAGE</p>
//           <nav className="space-y-2 text-sm">
//             {[
//               ["1. Information We Collect", "collect"],
//               ["2. How We Use Information", "use"],
//               ["3. Cookies Policy", "cookies"],
//               ["4. Sharing of Information", "sharing"],
//               ["5. Data Protection & Security", "security"],
//               ["6. Your Rights", "rights"],
//               ["7. Changes to this Policy", "changes"],
//               ["8. Contact Us", "contact"],
//             ].map(([label, id]) => (
//               <a
//                 key={id}
//                 href={`${id}`}
//                 className="group flex items-center justify-between rounded-lg border border-transparent px-3 py-2 hover:border-yellow-500/40 hover:bg-neutral-900"
//               >
//                 <span>{label}</span>
//                 <span className="text-xs text-neutral-500 group-hover:text-yellow-400">↗</span>
//               </a>
//             ))}
//           </nav>
//         </aside>

//         {/* Content */}
//         <main className="space-y-6">
//           <Card id="collect" title="1. Information We Collect">
//             <ul className="list-disc pl-6 space-y-2">
//               <li><strong>Personal Information</strong>: name, email address, phone number, and login details when you register or subscribe.</li>
//               <li><strong>Usage Data</strong>: IP address, browser type, device information, and pages you visit on our website.</li>
//               <li><strong>Cookies & Tracking Technologies</strong>: used to personalize your experience and improve our services.</li>
//             </ul>
//           </Card>

//           <Card id="use" title="2. How We Use Information">
//             <ul className="list-disc pl-6 space-y-2">
//               <li>Provide news, articles, and related services.</li>
//               <li>Personalize your experience based on your interests.</li>
//               <li>Improve website performance, security, and features.</li>
//               <li>Send newsletters, alerts, and updates (only if you opt in).</li>
//               <li>Prevent fraudulent activity and comply with legal obligations.</li>
//             </ul>
//           </Card>

//           <Card id="cookies" title="3. Cookies Policy">
//             <p>
//               Cookies on <Highlight>MyStartupNEWS</Highlight> are used to deliver services, keep track of preferences, and enhance your browsing experience.
//             </p>
//             <ul className="mt-3 list-disc pl-6 space-y-2">
//               <li>You may disable cookies in your browser, but some features may not function properly.</li>
//               <li>Cookies are only used to store information necessary for our services; we do not access personal files on your device.</li>
//               <li>Some third‑party partners (e.g., advertisers) may also use cookies.</li>
//             </ul>
//           </Card>

//           <Card id="sharing" title="4. Sharing of Information">
//             <p>We <strong>do not sell or rent</strong> your personal data. We may share information only:</p>
//             <ul className="mt-3 list-disc pl-6 space-y-2">
//               <li>With trusted service providers who help operate our platform.</li>
//               <li>To comply with legal requirements or protect against fraud/security risks.</li>
//               <li>With advertisers/partners in an aggregated, non‑identifiable manner.</li>
//             </ul>
//           </Card>

//           <Card id="security" title="5. Data Protection & Security">
//             <ul className="list-disc pl-6 space-y-2">
//               <li>We implement strong technical and organizational measures to protect your data.</li>
//               <li>No online service can guarantee 100% security; use of the Site is at your own risk.</li>
//             </ul>
//           </Card>

//           <Card id="rights" title="6. Your Rights">
//             <ul className="list-disc pl-6 space-y-2">
//               <li>Access, update, or delete your personal information.</li>
//               <li>Opt out of promotional emails or newsletters.</li>
//               <li>Manage cookie preferences in your browser settings.</li>
//             </ul>
//           </Card>

//           <Card id="changes" title="7. Changes to this Policy">
//             <p>
//               We may update this Privacy Policy from time to time. Updates will be posted on this page, and significant changes will be communicated to users where appropriate.
//             </p>
//           </Card>

//           <Card id="contact" title="8. Contact Us">
//             <address className="not-italic">
//               <div className="font-semibold">MyStartupNEWS</div>
//               <div>Plot 128, Defence Colony, Sainikpuri, Hyderabad</div>
//               <div>Secunderabad, Telangana – 500094</div>
//               <div className="mt-1">Email: <a href="mailto:support@MyStartupnews.in" className="underline decoration-yellow-400 underline-offset-4 hover:text-yellow-300">support@MyStartupnews.in</a></div>
//             </address>
//             <p className="mt-4 text-sm text-neutral-400">
//               You are also advised to read our <a href="/terms" className="text-yellow-300 underline underline-offset-4">Terms and Conditions</a>.
//             </p>
//           </Card>
//         </main>
//       </div>

//       {/* Footer stripe */}
//       <footer className="border-t border-yellow-500/20 bg-neutral-950/60">
//         <div className="mx-auto max-w-6xl px-5 py-6 text-xs text-neutral-400">
//           © {new Date().getFullYear()} <span className="text-yellow-400 font-semibold">MyStartupNEWS</span>. All rights reserved.
//         </div>
//       </footer>
//     </div>
//   );
// }

// function Card({ id, title, children }) {
//   return (
//     <section id={id} className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 p-5 md:p-6 shadow-[0_0_0_1px_rgba(250,204,21,0.05)]">
//       <h2 className="mb-2 text-lg md:text-xl font-bold tracking-tight">
//         <span className="mr-2 inline-block h-5 w-1 rounded bg-yellow-400 align-middle" />
//         {title}
//       </h2>
//       <div className="prose prose-invert max-w-none prose-p:leading-relaxed prose-li:leading-relaxed text-neutral-300">
//         {children}
//       </div>
//     </section>
//   );
// }

// function Highlight({ children }) {
//   return <span className="font-semibold text-yellow-400">{children}</span>;
// }


// PRIVACYPOLICY
export default function PrivacyPolicy() {
  const lastUpdated = "August 18, 2025";
  return (
    <div className="min-h-screen bg-black text-neutral-200 mx-26">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-yellow-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(250,204,21,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-5 py-12 md:py-16">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-neutral-900/60 px-3 py-1 text-xs font-medium text-yellow-400">
                🔐 Privacy & Cookies
              </div>
              <h1 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">
                Privacy Policy for <span className="rounded px-2 text-yellow-400">MyStartup<span className="text-white">NEWS</span> </span>
              </h1>
              <p className="mt-3 max-w-2xl text-sm text-neutral-400">
                This page explains what data we collect, how we use it, and the choices you have.
              </p>
            </div>
            <p className="text-xs text-neutral-400">Last updated: {lastUpdated}</p>
          </div>
        </div>
      </section>

      {/* Layout */}
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex gap-6">
          {/* Sidebar TOC */}
          <aside className="w-64 flex-shrink-0">
            <div className="sticky top-6 rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4">
              <p className="mb-3 text-xs font-semibold tracking-wide text-neutral-400">ON THIS PAGE</p>
              <nav className="space-y-2 text-sm">
                {[
                  ["1. Information We Collect", "collect"],
                  ["2. How We Use Information", "use"],
                  ["3. Cookies Policy", "cookies"],
                  ["4. Sharing of Information", "sharing"],
                  ["5. Data Protection & Security", "security"],
                  ["6. Your Rights", "rights"],
                  ["7. Changes to this Policy", "changes"],
                  ["8. Contact Us", "contact"],
                ].map(([label, id]) => (
                  <a
                    key={id}
                    href={`${id}`}
                    className="group flex items-center justify-between rounded-lg border border-transparent px-3 py-2 hover:border-yellow-500/40 hover:bg-neutral-900"
                  >
                    <span>{label}</span>
                    <span className="text-xs text-neutral-500 group-hover:text-yellow-400">↗</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <main className="flex-1 space-y-6">
          <Card id="collect" title="1. Information We Collect">
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Information</strong>: name, email address, phone number, and login details when you register or subscribe.</li>
              <li><strong>Usage Data</strong>: IP address, browser type, device information, and pages you visit on our website.</li>
              <li><strong>Cookies & Tracking Technologies</strong>: used to personalize your experience and improve our services.</li>
            </ul>
          </Card>

          <Card id="use" title="2. How We Use Information">
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide news, articles, and related services.</li>
              <li>Personalize your experience based on your interests.</li>
              <li>Improve website performance, security, and features.</li>
              <li>Send newsletters, alerts, and updates (only if you opt in).</li>
              <li>Prevent fraudulent activity and comply with legal obligations.</li>
            </ul>
          </Card>

          <Card id="cookies" title="3. Cookies Policy">
            <p>
              Cookies on <Highlight>MyStartupNEWS</Highlight> are used to deliver services, keep track of preferences, and enhance your browsing experience.
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>You may disable cookies in your browser, but some features may not function properly.</li>
              <li>Cookies are only used to store information necessary for our services; we do not access personal files on your device.</li>
              <li>Some third‑party partners (e.g., advertisers) may also use cookies.</li>
            </ul>
          </Card>

          <Card id="sharing" title="4. Sharing of Information">
            <p>We <strong>do not sell or rent</strong> your personal data. We may share information only:</p>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>With trusted service providers who help operate our platform.</li>
              <li>To comply with legal requirements or protect against fraud/security risks.</li>
              <li>With advertisers/partners in an aggregated, non‑identifiable manner.</li>
            </ul>
          </Card>

          <Card id="security" title="5. Data Protection & Security">
            <ul className="list-disc pl-6 space-y-2">
              <li>We implement strong technical and organizational measures to protect your data.</li>
              <li>No online service can guarantee 100% security; use of the Site is at your own risk.</li>
            </ul>
          </Card>

          <Card id="rights" title="6. Your Rights">
            <ul className="list-disc pl-6 space-y-2">
              <li>Access, update, or delete your personal information.</li>
              <li>Opt out of promotional emails or newsletters.</li>
              <li>Manage cookie preferences in your browser settings.</li>
            </ul>
          </Card>

          <Card id="changes" title="7. Changes to this Policy">
            <p>
              We may update this Privacy Policy from time to time. Updates will be posted on this page, and significant changes will be communicated to users where appropriate.
            </p>
          </Card>

          <Card id="contact" title="8. Contact Us">
            <address className="not-italic">
              <div className="font-semibold">MyStartupNEWS</div>
              <div>Plot 128, Defence Colony, Sainikpuri, Hyderabad</div>
              <div>Secunderabad, Telangana – 500094</div>
              <div className="mt-1">Email: <a href="mailto:support@MyStartupnews.in" className="underline decoration-yellow-400 underline-offset-4 hover:text-yellow-300">support@MyStartupnews.in</a></div>
            </address>
            <p className="mt-4 text-sm text-neutral-400">
              You are also advised to read our <a href="/terms" className="text-yellow-300 underline underline-offset-4">Terms and Conditions</a>.
            </p>
          </Card>
          </main>
        </div>
      </div>

      {/* Footer stripe */}
      {/* <footer className="border-t border-yellow-500/20 bg-neutral-950/60">
        <div className="mx-auto max-w-6xl px-5 py-6 text-xs text-neutral-400">
          © {new Date().getFullYear()} <span className="text-yellow-400 font-semibold">MyStartupNEWS</span>. All rights reserved.
        </div>
      </footer> */}
    </div>
  );
}

function Card({ id, title, children }) {
  return (
    <section id={id} className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 p-5 md:p-6 shadow-[0_0_0_1px_rgba(250,204,21,0.05)]">
      <h2 className="mb-2 text-lg md:text-xl font-bold tracking-tight">
        <span className="mr-2 inline-block h-5 w-1 rounded bg-yellow-400 align-middle" />
        {title}
      </h2>
      <div className="prose prose-invert max-w-none prose-p:leading-relaxed prose-li:leading-relaxed text-neutral-300">
        {children}
      </div>
    </section>
  );
}

function Highlight({ children }) {
  return <span className="font-semibold text-yellow-400">{children}</span>;
}