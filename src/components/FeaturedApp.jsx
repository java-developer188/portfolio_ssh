import { useState } from 'react';
import './FeaturedApp.css';

function FeaturedApp() {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const screenshots = [
    '/data/images/energykhata/homescreen.webp',
    '/data/images/energykhata/calculationscreen.webp',
    '/data/images/energykhata/historyscreen.webp',
    '/data/images/energykhata/optionsscreen.webp',
    '/data/images/energykhata/helpscreen.webp',
  ];

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
  };

  const prevScreenshot = () => {
    setCurrentScreenshot((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section id="featured-app" className="section featured-app">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured App</h2>
          <p className="section-subtitle">
            My production-level application available on Google Play Store
          </p>
        </div>

        <div className="featured-app-card">
          <div className="featured-app-content">
            <div className="featured-app-badge">
              <span className="badge-live">LIVE ON PLAY STORE</span>
            </div>

            <div className="featured-app-title-row">
              <h3 className="featured-app-title">Energy Khata</h3>
              <a
                href="https://github.com/java-developer188/energyKhata"
                target="_blank"
                rel="noopener noreferrer"
                className="github-icon-btn"
                title="View Source Code"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="github-tooltip">View Source Code</span>
              </a>
            </div>

            <p className="featured-app-description">
              A comprehensive energy management mobile application that helps users track and manage
              their energy consumption efficiently. Built with modern Android development practices,
              this app demonstrates production-level code quality, user experience design, and
              real-world problem solving.
            </p>

            <div className="featured-app-features">
              <div className="feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Track energy consumption</span>
              </div>
              <div className="feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Manage utility bills</span>
              </div>
              <div className="feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Usage analytics & insights</span>
              </div>
              <div className="feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Clean, intuitive UI</span>
              </div>
            </div>

            <div className="featured-app-tech">
              <span className="tag tag-green">Kotlin</span>
              <span className="tag tag-blue">Android</span>
              <span className="tag tag-orange">Material Design</span>
              <span className="tag tag-purple">SQLite</span>
            </div>

            <div className="featured-app-buttons">
              {/* Official Google Play Badge */}
              <a
                href="https://play.google.com/store/apps/details?id=com.energykhata&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="google-play-badge"
              >
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                />
              </a>
            </div>
          </div>

          {/* Screenshot Gallery with Phone Mockup */}
          <div className="featured-app-gallery">
            <div className="gallery-phone">
              <div className="phone-frame">
                <div className="phone-notch"></div>
                <div className="phone-screen">
                  <img
                    src={screenshots[currentScreenshot]}
                    alt={`Energy Khata Screenshot ${currentScreenshot + 1}`}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.querySelector('.phone-placeholder').style.display = 'flex';
                    }}
                  />
                  <div className="phone-placeholder">
                    <span className="placeholder-icon">⚡</span>
                    <span className="placeholder-text">Energy Khata</span>
                    <span className="placeholder-hint">Add screenshots to:</span>
                    <span className="placeholder-path">/data/images/energykhata/</span>
                  </div>
                </div>
              </div>

              {/* Gallery Navigation */}
              <div className="gallery-nav">
                <button className="gallery-btn" onClick={prevScreenshot} aria-label="Previous screenshot">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6"/>
                  </svg>
                </button>
                <div className="gallery-dots">
                  {screenshots.map((_, index) => (
                    <button
                      key={index}
                      className={`gallery-dot ${index === currentScreenshot ? 'active' : ''}`}
                      onClick={() => setCurrentScreenshot(index)}
                      aria-label={`Go to screenshot ${index + 1}`}
                    />
                  ))}
                </div>
                <button className="gallery-btn" onClick={nextScreenshot} aria-label="Next screenshot">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedApp;
