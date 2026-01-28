import { useEffect, useState } from 'react';
import './Hero.css';

function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Backend Developer | Java Enthusiast | Trainer';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      {/* Binary decoration */}
      <div className="hero-binary-left">
        <span>01001010</span>
        <span>01000001</span>
        <span>01010110</span>
        <span>01000001</span>
      </div>
      <div className="hero-binary-right">
        <span>01000011</span>
        <span>01001111</span>
        <span>01000100</span>
        <span>01000101</span>
      </div>

      <div className="hero-content">
        <div className="hero-intro">
          <div className="hero-profile">
            <img
              src="/data/images/profile.jpg"
              alt="Syed Sibte Haider"
              className="profile-image"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect fill="%23161b22" width="200" height="200"/><circle cx="100" cy="70" r="40" fill="%2330363d"/><ellipse cx="100" cy="170" rx="60" ry="50" fill="%2330363d"/><text fill="%2358a6ff" font-family="monospace" font-size="16" x="100" y="200" text-anchor="middle">SSH</text></svg>';
              }}
            />
          </div>
          <div className="hero-terminal">
          <div className="terminal-header">
            <span className="terminal-dot red"></span>
            <span className="terminal-dot yellow"></span>
            <span className="terminal-dot green"></span>
          </div>
          <div className="terminal-body">
            <div className="terminal-line">
              <span className="terminal-prompt">$</span>
              <span className="terminal-command">whoami</span>
            </div>
            <div className="terminal-output">
              <h1 className="hero-name">Syed Sibte Haider</h1>
            </div>
            <div className="terminal-line">
              <span className="terminal-prompt">$</span>
              <span className="terminal-command">cat role.txt</span>
            </div>
            <div className="terminal-output">
              <p className="hero-tagline">
                <span className="typing-text">{displayText}</span>
                <span className="cursor">|</span>
              </p>
            </div>
            <div className="terminal-line">
              <span className="terminal-prompt">$</span>
              <span className="terminal-command cursor-blink"></span>
            </div>
          </div>
          </div>
        </div>

        <p className="hero-description">
          Building scalable systems with clean code and endless cups of coffee
        </p>

        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => scrollToSection('#projects')}>
            <span className="btn-icon">{'</>'}</span>
            View Projects
          </button>
          <a
            href="https://github.com/java-developer188"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <svg className="github-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>

        <div className="hero-scroll-indicator" onClick={() => scrollToSection('#about')}>
          <span>scroll down</span>
          <div className="scroll-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
