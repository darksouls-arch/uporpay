import Nav, { Logo } from "./components/Nav";
import WaitlistForm from "./components/WaitlistForm";

export default function Home() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="hero">
        <div className="city" />
        <div className="grid-fx" />

        <div className="hero-inner">
          <div className="pill">
            <span className="bolt">⚡</span> <span className="accent-lime">SHOW UP.</span> OR PAY.
          </div>
          <h1 className="headline">
            Show Up.
            <span className="lime">Or Pay.</span>
          </h1>
          <p className="subhead">
            Stake real money on plans with friends.
            <br />
            No-shows lose. Attendees win.
          </p>

          <div className="hero-stage" id="features">
            {/* LEFT FEATURES */}
            <div className="features-col left">
              <div className="feature">
                <div className="icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h4>REAL STAKES</h4>
                <p>Real accountability.<br />Real money.</p>
              </div>
              <div className="feature">
                <div className="icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h4>GPS CHECK-IN</h4>
                <p>We verify your<br />location. No cheating.</p>
              </div>
            </div>

            {/* PHONE MOCKUP */}
            <div className="phone-wrap">
              <div className="phone">
                <div className="screen">
                  <div className="status-bar">
                    <span>9:41</span>
                    <div className="right-icons">
                      <span>•••</span>
                      <span>📶</span>
                      <span>🔋</span>
                    </div>
                  </div>
                  <div className="event-label">Active Event</div>
                  <div className="event-title">
                    Sunday Cricket
                    <div className="menu-dots">
                      <span></span><span></span><span></span>
                    </div>
                  </div>

                  <div className="pot-card">
                    <div className="label">TOTAL POT</div>
                    <div className="amount">₹3,500</div>
                    <div className="pot-meta">
                      <span>8 / 11 Joined</span>
                      <span className="time">02:12:57 to go</span>
                    </div>
                  </div>

                  <div className="avatars">
                    <div className="av av-1"></div>
                    <div className="av av-2"></div>
                    <div className="av av-3"></div>
                    <div className="av av-4"></div>
                    <div className="av av-more">+3</div>
                  </div>

                  <div className="radar">
                    <div className="radar-dot">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  </div>

                  <div className="check-btn">CHECK IN</div>
                  <div className="within">You are within range</div>
                </div>
              </div>
            </div>

            {/* RIGHT FEATURES */}
            <div className="features-col right">
              <div className="feature">
                <div className="icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h4>NO-SHOWS PAY</h4>
                <p>No-shows lose<br />the entire pot.</p>
              </div>
              <div className="feature">
                <div className="icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="6" width="20" height="14" rx="2" />
                    <path d="M2 10h20" />
                    <circle cx="17" cy="15" r="1.2" fill="currentColor" />
                  </svg>
                </div>
                <h4>WINNERS GET PAID</h4>
                <p>Pot is split automatically<br />among attendees.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WAITLIST */}
      <section className="container" id="waitlist">
        <div className="waitlist">
          <div>
            <h3>
              Be the first
              <span className="lime">To lock it in.</span>
            </h3>
            <p>
              Join the waitlist and get early access
              <br />
              to UpOrPay. Limited spots!
            </p>
          </div>
          <WaitlistForm />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how" id="how">
        <div className="container">
          <h2 className="section-title">
            HOW <span className="lime">UPORPAY</span> WORKS
          </h2>
          <div className="steps">
            <div className="step">
              <div className="step-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18M12 14v4M10 16h4" />
                </svg>
              </div>
              <h4>1. CREATE EVENT</h4>
              <p>Create an event, set the stake and invite friends.</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="6" width="20" height="14" rx="2" />
                  <path d="M2 10h20" />
                  <text x="9" y="17" fontSize="7" fill="currentColor" stroke="none" fontWeight={800}>₹</text>
                </svg>
              </div>
              <h4>2. STAKE MONEY</h4>
              <p>Everyone pays the stake to join the event.</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h4>3. SHOW UP</h4>
              <p>We verify attendance with GPS check-in.</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9H4a2 2 0 0 1-2-2V5h4" />
                  <path d="M18 9h2a2 2 0 0 0 2-2V5h-4" />
                  <path d="M6 5h12v6a6 6 0 0 1-12 0V5z" />
                  <path d="M9 19h6M10 22h4M12 15v4" />
                </svg>
              </div>
              <h4>4. WIN OR LOSE</h4>
              <p>No-shows pay. Pot is split among attendees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST + TESTIMONIAL */}
      <section className="container">
        <div className="trust">
          <div>
            <h4>BUILT FOR REAL FRIEND GROUPS</h4>
            <p className="sub">From game nights to trips, make every plan count.</p>
            <div className="trust-avatars">
              <div className="av av-1"></div>
              <div className="av av-2"></div>
              <div className="av av-3"></div>
              <div className="av av-4"></div>
              <div className="av av-1"></div>
              <div className="av av-2"></div>
              <div className="av av-more count">2K+</div>
            </div>
            <p className="sub" style={{ marginTop: 14 }}>
              …and 2,000+ more are waiting!
            </p>
          </div>
          <div className="quote">
            <div className="quote-mark">&ldquo;</div>
            <div className="quote-body">
              Finally an app that makes my friends serious about plans. We&apos;ve saved more money than we&apos;ve lost.
              <span className="who">— Rohan, Mumbai</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact">
        <Logo small />
        <div className="footer-copy">© 2026 UpOrPay. All rights reserved.</div>
        <div className="social">
          <a href="#" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </a>
          <a href="#" aria-label="Twitter">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 5.8a8.5 8.5 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.3 8.3 0 0 1-2.6 1A4.1 4.1 0 0 0 11.7 9a11.7 11.7 0 0 1-8.5-4.3 4.1 4.1 0 0 0 1.3 5.5A4 4 0 0 1 2.7 9v.1a4.1 4.1 0 0 0 3.3 4 4.2 4.2 0 0 1-1.9.1 4.1 4.1 0 0 0 3.8 2.9A8.3 8.3 0 0 1 2 17.5 11.6 11.6 0 0 0 8.3 19c7.5 0 11.6-6.2 11.6-11.6v-.5A8.3 8.3 0 0 0 22 5.8z" />
            </svg>
          </a>
          <a href="#" aria-label="Discord">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.3 4.4A19 19 0 0 0 15.6 3l-.3.5a14 14 0 0 0-6.6 0L8.4 3a19 19 0 0 0-4.7 1.4C.9 8.5.1 12.5.5 16.5a19.4 19.4 0 0 0 5.7 2.9l1.2-1.7a12 12 0 0 1-1.9-.9l.5-.4a13.6 13.6 0 0 0 12 0l.5.4a12 12 0 0 1-1.9.9l1.2 1.7a19.4 19.4 0 0 0 5.7-2.9c.5-4.6-.6-8.6-3.2-12.1zM8.7 14.4c-1.1 0-2-1-2-2.3s.9-2.3 2-2.3 2 1 2 2.3-.9 2.3-2 2.3zm6.6 0c-1.1 0-2-1-2-2.3s.9-2.3 2-2.3 2 1 2 2.3-.9 2.3-2 2.3z" />
            </svg>
          </a>
        </div>
      </footer>
    </>
  );
}
