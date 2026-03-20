import Link from 'next/link';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <ThemePortrait width={160} height={160} priority />
        </div>

        <h1 className="hero-title">
          <span className="hero-name">Marcos Raymundo</span>
        </h1>

        <p className="hero-tagline">
          Service Engineer at{' '}
          <a href="https://www.microsoft.com/" className="hero-highlight">
            Microsoft
          </a>
          , where I work supporting the{' '}
          <a href="https://www.microsoft.com/en-us/health-solutions/clinical-workflow/cde-one?msockid=1ca03aac06ea67842c502dbb078566b8" className="hero-highlight">
            CDE One and Clintegrity
          </a>{' '}
          products in the healthcare space.
          <br />
        </p>

        <div className="hero-chips">
          <span className="hero-chip">USMC Veteran</span>
          <span className="hero-chip">Service Engineer</span>
          <span className="hero-chip">B.S. Management & Accounting</span>
          <span className="hero-chip">B.S. Computer Science, Software Engineering</span>
          <span className="hero-chip">Active Security Clearance</span>
        </div>

        <div className="hero-cta">
          {/* <Link href="/about" className="button button-primary">
            About Me
          </Link> */}
          <Link href="/resume" className="button button-secondary">
            View Resume
          </Link>
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}
