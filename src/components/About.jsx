import { useState, useEffect } from 'react';
import './About.css';

function About() {
  const [aboutContent, setAboutContent] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    fetch('/data/about.md')
      .then(response => response.text())
      .then(text => setAboutContent(text))
      .catch(err => console.error('Error loading about content:', err));
  }, []);

  // Simple markdown to HTML conversion for basic formatting
  const renderMarkdown = (text) => {
    if (!text) return '';

    // Normalize line endings (Windows \r\n to \n) and split by blank lines
    return text
      .replace(/\r\n/g, '\n')
      .split(/\n\s*\n/)
      .map(p => p.trim())
      .filter(p => p.length > 0)
      .map((paragraph, index) => {
        // Handle headers
        if (paragraph.startsWith('## ')) {
          return <h3 key={index}>{paragraph.replace('## ', '')}</h3>;
        }
        if (paragraph.startsWith('# ')) {
          return <h2 key={index}>{paragraph.replace('# ', '')}</h2>;
        }
        // Handle regular paragraphs
        return <p key={index}>{paragraph}</p>;
      });
  };

  const stats = [
    { value: '12+', label: 'Years Experience', icon: '{ }' },
    { value: '10+', label: 'Projects Completed', icon: '</>' },
    { value: '50+', label: 'Students Trained', icon: '> _' },
    { value: '∞', label: 'Cups of Coffee', icon: '☕' },
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know the developer behind the code
          </p>
        </div>

        <div className="about-content">
          <div className="about-terminal card-terminal">
            <div className="card-terminal-header">
              <span className="card-terminal-dot red"></span>
              <span className="card-terminal-dot yellow"></span>
              <span className="card-terminal-dot green"></span>
            </div>
            <div className={`card-terminal-body about-text ${isExpanded ? 'expanded' : 'collapsed'}`}>
              {renderMarkdown(aboutContent)}
            </div>
            <button
              className="about-read-more"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Show Less' : 'Read More'}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={isExpanded ? 'rotated' : ''}
              >
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
          </div>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <span className="stat-icon">{stat.icon}</span>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
