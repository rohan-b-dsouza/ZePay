ZePay – Digital Wallet Platform

ZePay is a full-stack digital wallet system that enables users to securely manage balances and transfer money between accounts.
The backend is built with Node.js, Express, and MongoDB, focusing on secure authentication, reliable transactions, and proper financial data handling.

This project is inspired by real-world digital wallet systems such as Paytm and other fintech payment platforms.<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Fintech Brand Names</title>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --bg: #0a0a0f;
    --surface: #111118;
    --border: rgba(255,255,255,0.06);
    --text: #f0f0f5;
    --muted: #5a5a72;
    --accent1: #00e5b4;
    --accent2: #7b5ea7;
    --accent3: #ff6b35;
    --accent4: #3b82f6;
    --accent5: #f59e0b;
    --accent6: #ec4899;
  }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Syne', sans-serif;
    min-height: 100vh;
    padding: 60px 24px;
    overflow-x: hidden;
  }

  body::before {
    content: '';
    position: fixed;
    top: -40%;
    left: -20%;
    width: 70%;
    height: 70%;
    background: radial-gradient(ellipse, rgba(0,229,180,0.04) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }

  body::after {
    content: '';
    position: fixed;
    bottom: -30%;
    right: -10%;
    width: 60%;
    height: 60%;
    background: radial-gradient(ellipse, rgba(123,94,167,0.05) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }

  .wrapper {
    max-width: 1100px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .header {
    text-align: center;
    margin-bottom: 72px;
    animation: fadeUp 0.8s ease both;
  }

  .label {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent1);
    margin-bottom: 20px;
    display: block;
  }

  h1 {
    font-size: clamp(36px, 6vw, 64px);
    font-weight: 800;
    line-height: 1.0;
    letter-spacing: -0.03em;
    color: var(--text);
    margin-bottom: 16px;
  }

  h1 em {
    font-family: 'Instrument Serif', serif;
    font-style: italic;
    font-weight: 400;
    color: var(--accent1);
  }

  .subtitle {
    font-family: 'DM Mono', monospace;
    font-size: 13px;
    color: var(--muted);
    letter-spacing: 0.05em;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2px;
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 48px;
  }

  .card {
    background: var(--surface);
    padding: 36px 32px;
    cursor: pointer;
    position: relative;
    transition: background 0.2s ease;
    animation: fadeUp 0.6s ease both;
    overflow: hidden;
  }

  .card:hover {
    background: #16161f;
  }

  .card::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 3px;
    height: 100%;
    background: var(--card-color);
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  .card:hover::before { opacity: 1; }

  .card-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .brand-name {
    font-size: 28px;
    font-weight: 800;
    letter-spacing: -0.03em;
    color: var(--text);
    line-height: 1;
  }

  .brand-tag {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    padding: 4px 10px;
    border-radius: 4px;
    background: rgba(255,255,255,0.05);
    color: var(--muted);
    border: 1px solid var(--border);
    white-space: nowrap;
    margin-top: 4px;
  }

  .brand-tagline {
    font-size: 13px;
    color: var(--muted);
    font-weight: 400;
    margin-bottom: 20px;
    font-family: 'DM Mono', monospace;
    letter-spacing: 0.02em;
    line-height: 1.6;
  }

  .brand-desc {
    font-size: 14px;
    color: #888899;
    line-height: 1.65;
    font-weight: 400;
    letter-spacing: 0.01em;
  }

  .brand-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 20px;
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    color: var(--card-color);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .brand-pill::before {
    content: '';
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--card-color);
    display: block;
  }

  .highlight-section {
    background: linear-gradient(135deg, rgba(0,229,180,0.04), rgba(123,94,167,0.04));
    border: 1px solid rgba(0,229,180,0.12);
    border-radius: 16px;
    padding: 36px 40px;
    animation: fadeUp 0.6s 0.3s ease both;
  }

  .highlight-label {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent1);
    margin-bottom: 24px;
  }

  .picks {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .pick {
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 100px;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -0.01em;
    transition: all 0.2s ease;
    cursor: default;
  }

  .pick:hover {
    background: rgba(255,255,255,0.06);
    border-color: rgba(255,255,255,0.12);
    transform: translateY(-1px);
  }

  .pick-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
  }

  .pick-reason {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    color: var(--muted);
    font-weight: 400;
    margin-left: 2px;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .card:nth-child(1) { animation-delay: 0.05s; }
  .card:nth-child(2) { animation-delay: 0.10s; }
  .card:nth-child(3) { animation-delay: 0.15s; }
  .card:nth-child(4) { animation-delay: 0.20s; }
  .card:nth-child(5) { animation-delay: 0.25s; }
  .card:nth-child(6) { animation-delay: 0.30s; }
</style>
</head>
<body>
<div class="wrapper">

  <header class="header">
    <span class="label">Digital Wallet · Fintech Branding</span>
    <h1>Names that feel<br><em>real</em> & fundable</h1>
    <p class="subtitle">6 brand-ready identities for your payment platform</p>
  </header>

  <div class="grid">

    <div class="card" style="--card-color: #00e5b4;">
      <div class="card-top">
        <div class="brand-name">Kivo</div>
        <div class="brand-tag">Global · Clean</div>
      </div>
      <div class="brand-tagline">"Move money, simply."</div>
      <div class="brand-desc">Short, punchy, and internationally pronounceable. Feels like a Y Combinator-backed startup. Easy to trademark and has strong domain availability potential.</div>
      <div class="brand-pill">Top Pick</div>
    </div>

    <div class="card" style="--card-color: #3b82f6;">
      <div class="card-top">
        <div class="brand-name">Zepay</div>
        <div class="brand-tag">Speed · Energy</div>
      </div>
      <div class="brand-tagline">"Pay at the speed of now."</div>
      <div class="brand-desc">Combines "Ze" (zero friction) + "Pay". Energetic, youthful, and sounds like a genuine fintech product. Great for UPI/QR-based payments.</div>
      <div class="brand-pill">Strong Recall</div>
    </div>

    <div class="card" style="--card-color: #f59e0b;">
      <div class="card-top">
        <div class="brand-name">Fynlo</div>
        <div class="brand-tag">Finance · Flow</div>
      </div>
      <div class="brand-tagline">"Your finances, in flow."</div>
      <div class="brand-desc">A blend of "Fin" (financial) + "flow". Sounds premium and modern. Works well for both B2C wallets and B2B payment infrastructure plays.</div>
      <div class="brand-pill">Premium Feel</div>
    </div>

    <div class="card" style="--card-color: #ec4899;">
      <div class="card-top">
        <div class="brand-name">Rupee<span style="color:#ec4899;">X</span></div>
        <div class="brand-tag">India · Bold</div>
      </div>
      <div class="brand-tagline">"India's next-gen wallet."</div>
      <div class="brand-desc">Rooted in the Indian market like Paytm but feels newer. The "X" signals tech-forward thinking. Instantly understood by the target demographic.</div>
      <div class="brand-pill">India-First</div>
    </div>

    <div class="card" style="--card-color: #7b5ea7;">
      <div class="card-top">
        <div class="brand-name">Credge</div>
        <div class="brand-tag">Trust · Credit</div>
      </div>
      <div class="brand-tagline">"Where credit meets credibility."</div>
      <div class="brand-desc">"Cred" (credibility/credit) + "edge". Sounds established and trustworthy — ideal if the product expands into BNPL, credit lines, or financial scores.</div>
      <div class="brand-pill">Expandable</div>
    </div>

    <div class="card" style="--card-color: #ff6b35;">
      <div class="card-top">
        <div class="brand-name">Velo</div>
        <div class="brand-tag">Velocity · Minimal</div>
      </div>
      <div class="brand-tagline">"Fast money. Zero friction."</div>
      <div class="brand-desc">Derived from "velocity". Clean, global, and premium. Works across markets and has the kind of name that could be on a physical debit card without looking out of place.</div>
      <div class="brand-pill">Globally Scalable</div>
    </div>

  </div>

  <div class="highlight-section">
    <div class="highlight-label">★ Recommended shortlist</div>
    <div class="picks">
      <div class="pick">
        <div class="pick-dot" style="background:#00e5b4;"></div>
        Kivo
        <span class="pick-reason">Best overall</span>
      </div>
      <div class="pick">
        <div class="pick-dot" style="background:#ff6b35;"></div>
        Velo
        <span class="pick-reason">Premium & global</span>
      </div>
      <div class="pick">
        <div class="pick-dot" style="background:#3b82f6;"></div>
        Zepay
        <span class="pick-reason">Highest recall</span>
      </div>
      <div class="pick">
        <div class="pick-dot" style="background:#ec4899;"></div>
        RupeeX
        <span class="pick-reason">India market</span>
      </div>
    </div>
  </div>

</div>
</body>
</html>
