import Head from 'next/head'
import Link from 'next/link'

export default function TestYourRecallPrivacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — Test Your Recall</title>
        <meta name="description" content="Privacy Policy for the Test Your Recall mobile app." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={styles.main}>
        <div style={styles.container}>
          <h1 style={styles.h1}>Privacy Policy for Test Your Recall</h1>
          <p style={styles.updated}><strong>Last updated:</strong> January 2025</p>

          <p>Test Your Recall (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is a mobile application available on iOS and Android. This Privacy Policy explains how we collect, use, and protect your information when you use our app.</p>

          <hr style={styles.hr} />

          <h2 style={styles.h2}>1. Information We Collect</h2>

          <h3 style={styles.h3}>1.1 Account and Login Information</h3>
          <ul style={styles.ul}>
            <li><strong>Email and password:</strong> When you create an account with email and password, we collect and store your email address. Your password is securely hashed and not stored in plain text.</li>
            <li><strong>Username:</strong> If you choose to create an account, we collect the username you provide. Usernames may be shown on leaderboards or in other in-app features.</li>
            <li><strong>Sign-in with Apple, Google, or Facebook:</strong> If you use these options, we receive from the provider the information you have allowed them to share (such as an identifier, email, or name) in order to create and manage your account. We also store the username you choose. Each provider&apos;s use of your data is governed by their own privacy policy.</li>
          </ul>

          <h3 style={styles.h3}>1.2 Game and Profile Data (Logged-In Users)</h3>
          <p>When you are signed in, we collect and store:</p>
          <ul style={styles.ul}>
            <li>Game statistics (e.g., best score, games played, best time, daily streak)</li>
            <li>Daily challenge results (e.g., correct and total counts)</li>
            <li>The date you last played (for features like streaks)</li>
          </ul>
          <p>This data is used to provide gameplay features, leaderboards, and your in-app profile.</p>

          <h3 style={styles.h3}>1.3 Guest Mode</h3>
          <p>You may use the app in guest mode without creating an account. In guest mode, we do not collect or store account information or game statistics on our servers. Some data may still be stored on your device (for example, to remember your guest session), and our advertising provider may collect data when ads are shown (see Section 2.2).</p>

          <h3 style={styles.h3}>1.4 Information We Do Not Collect via Our Own Analytics</h3>
          <p>We do not use Google Analytics, Firebase, or other third-party analytics SDKs inside the app. The only analytics we use are the aggregate, non-personally-identifying reports provided by the Apple App Store and Google Play (e.g., downloads, platform, or region). We do not receive your name, email, or device ID from these store analytics.</p>

          <hr style={styles.hr} />

          <h2 style={styles.h2}>2. Third-Party Services and Data Collection</h2>

          <h3 style={styles.h3}>2.1 Authentication and Backend (Supabase)</h3>
          <p>We use Supabase to handle:</p>
          <ul style={styles.ul}>
            <li>User sign-up, sign-in, and account management</li>
            <li>Storing your account details (e.g., email, username) and game statistics</li>
          </ul>
          <p>Data you provide for your account and gameplay is processed and stored by Supabase in accordance with their privacy practices. For more information, see <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" style={styles.a}>Supabase Privacy Policy</a>.</p>

          <h3 style={styles.h3}>2.2 Advertising (Google AdMob)</h3>
          <p>The app shows ads (including interstitial and rewarded ads) provided by Google AdMob. When ads are shown, Google may collect information such as device identifiers, IP address, and ad interaction data for ad delivery, measurement, and fraud prevention. This is governed by Google&apos;s policies, not ours.</p>
          <p>If you purchase our ad-free option, you will not see ads in the app, and AdMob will not collect data from you for ad serving in our app.</p>
          <p>For more information, see <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={styles.a}>Google Privacy Policy</a> and <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" style={styles.a}>Google&apos;s ad-related disclosures</a>.</p>

          <h3 style={styles.h3}>2.3 In-App Purchases (Apple and Google)</h3>
          <p>In-app purchases (including the ad-free subscription) are processed by Apple (App Store) or Google (Play Store). We do not collect, see, or store your payment card or other payment details. We only receive information from the store that a purchase was completed so we can enable the ad-free experience. Purchase and payment data are handled according to Apple&apos;s and Google&apos;s respective privacy policies.</p>

          <h3 style={styles.h3}>2.4 OAuth Providers (Apple, Google, Facebook)</h3>
          <p>When you sign in with Apple, Google, or Facebook, your interaction with that provider is subject to their privacy policy. We only receive the information they make available to us (as described in Section 1.1) to create and manage your account.</p>

          <hr style={styles.hr} />

          <h2 style={styles.h2}>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul style={styles.ul}>
            <li>Create and manage your account and profile</li>
            <li>Provide gameplay, leaderboards, daily challenges, and related features</li>
            <li>Display ads (when you have not purchased the ad-free option)</li>
            <li>Process and honor in-app purchases (e.g., ad-free)</li>
            <li>Send you service-related messages (e.g., password reset emails)</li>
            <li>Comply with legal obligations and protect our rights and safety</li>
          </ul>
          <p>We do not sell your personal information.</p>

          <hr style={styles.hr} />

          <h2 style={styles.h2}>4. Data Storage and Security</h2>
          <ul style={styles.ul}>
            <li><strong>Our systems:</strong> Account and game data are stored on infrastructure provided by Supabase. We rely on industry-standard security practices and Supabase&apos;s safeguards.</li>
            <li><strong>Your device:</strong> Some data is stored on your device (e.g., via AsyncStorage) for session persistence, guest mode, and ad-free purchase status. This stays on your device unless you delete the app or clear its data.</li>
          </ul>
          <p>We cannot guarantee absolute security of data transmitted over the internet or stored on any system, but we take reasonable steps to protect your information.</p>

          <hr style={styles.hr} />

          <h2 style={styles.h2}>5. Data Retention</h2>
          <ul style={styles.ul}>
            <li><strong>Account and game data:</strong> We retain your account and game data for as long as your account exists. If you delete your account (see Section 7), we will delete or anonymize your personal data as described there.</li>
            <li><strong>Local device data:</strong> Data stored only on your device (e.g., session, guest mode, ad-free flag) is removed when you uninstall the app or clear its data.</li>
          </ul>

          <hr style={styles.hr} />

          <h2 style={styles.h2}>6. Children&apos;s Privacy</h2>
          <p>The app is not directed at children under 13 (or under 16 in the EEA/UK). We do not knowingly collect personal information from children in those age groups. If you believe we have collected such information, please contact us and we will delete it.</p>

          <hr style={styles.hr} />

          <h2 style={styles.h2}>7. Your Rights and Choices</h2>
          <p>Depending on where you live, you may have rights to:</p>
          <ul style={styles.ul}>
            <li><strong>Access</strong> the personal data we hold about you</li>
            <li><strong>Correct</strong> inaccurate data</li>
            <li><strong>Delete</strong> your data and account</li>
            <li><strong>Object</strong> to or <strong>restrict</strong> certain processing</li>
            <li><strong>Data portability</strong> (e.g., a copy of your data in a usable format)</li>
          </ul>
          <p>To exercise these rights, or to request account deletion, please contact us using the details in Section 10. We will respond within a reasonable time and in line with applicable law.</p>
          <ul style={styles.ul}>
            <li><strong>Account and ads:</strong> You can stop providing account data by not creating an account or by deleting it. You can avoid ad-related data collection from our app by purchasing the ad-free option.</li>
            <li><strong>Guest mode:</strong> You can limit account-related collection by using guest mode, though ad-related collection may still apply when ads are shown.</li>
          </ul>

          <hr style={styles.hr} />

          <h2 style={styles.h2}>8. International Data Transfers</h2>
          <p>We and our service providers (including Supabase and Google) may store and process data in countries other than your own. If you are in the European Economic Area, United Kingdom, or another region with strict data protection laws, we take steps to ensure appropriate safeguards (such as standard contractual clauses) where required.</p>

          <hr style={styles.hr} />

          <h2 style={styles.h2}>9. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will post the updated policy in the app or on our website and will change the &quot;Last updated&quot; date. If changes are significant, we may notify you through the app or by email where possible. Continued use of the app after changes means you accept the updated policy.</p>

          <hr style={styles.hr} />

          <h2 style={styles.h2}>10. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, your data, or your rights, please contact us:</p>
          <ul style={styles.ul}>
            <li><strong>Email:</strong> <a href="mailto:support@testyourrecall.com" style={styles.a}>support@testyourrecall.com</a></li>
            <li><strong>Or via:</strong> The in-app support or contact form.</li>
          </ul>

          <p style={styles.disclaimer}><em>This privacy policy is provided for informational purposes. You may wish to have it reviewed by a legal professional to ensure it meets the requirements of your jurisdiction and app stores.</em></p>
        </div>
      </main>
    </>
  )
}

const styles = {
  main: {
    minHeight: '100vh',
    padding: '2rem 1rem',
  },
  container: {
    maxWidth: '720px',
    margin: '0 auto',
    fontFamily: "'Noto Sans', sans-serif",
    fontSize: '16px',
    lineHeight: 1.6,
  },
  backLink: {
    display: 'inline-block',
    marginBottom: '2rem',
    color: 'inherit',
    textDecoration: 'underline',
  },
  h1: {
    fontSize: '1.75rem',
    fontWeight: 700,
    marginBottom: '0.5rem',
  },
  updated: {
    marginBottom: '1.5rem',
    color: 'rgb(var(--foreground-rgb, 0, 0, 0))',
    opacity: 0.9,
  },
  h2: {
    fontSize: '1.25rem',
    fontWeight: 600,
    marginTop: '1.5rem',
    marginBottom: '0.75rem',
  },
  h3: {
    fontSize: '1.1rem',
    fontWeight: 600,
    marginTop: '1.25rem',
    marginBottom: '0.5rem',
  },
  hr: {
    border: 'none',
    borderTop: '1px solid rgba(0,0,0,0.15)',
    margin: '2rem 0',
  },
  ul: {
    margin: '0.75rem 0',
    paddingLeft: '1.5rem',
  },
  a: {
    color: '#0066cc',
    textDecoration: 'underline',
  },
  disclaimer: {
    marginTop: '2rem',
    fontSize: '0.9rem',
    opacity: 0.85,
  },
}
