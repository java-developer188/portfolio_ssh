import { useState, useEffect, useRef } from 'react';
import './Training.css';

function Training() {
  const [training, setTraining] = useState({
    philosophy: '',
    experiences: [],
    testimonials: []
  });
  const [expandedCard, setExpandedCard] = useState(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    fetch('/data/training.json')
      .then(response => response.json())
      .then(data => setTraining(data))
      .catch(err => console.error('Error loading training data:', err));
  }, []);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 380;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const toggleExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getAvatarColor = (name) => {
    const colors = [
      '#7ee787', '#58a6ff', '#f778ba', '#ff7b72',
      '#ffa657', '#d2a8ff', '#79c0ff', '#56d364'
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <section id="training" className="section training">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Training</h2>
          <p className="section-subtitle">
            Sharing knowledge and building the next generation of developers
          </p>
        </div>

        {/* Philosophy Section */}
        <div className="training-philosophy">
          <div className="card-terminal">
            <div className="card-terminal-header">
              <span className="card-terminal-dot red"></span>
              <span className="card-terminal-dot yellow"></span>
              <span className="card-terminal-dot green"></span>
            </div>
            <div className="card-terminal-body">
              <h3 className="philosophy-title">
                <span className="comment">My Approach to Training</span>
              </h3>
              <p className="philosophy-text">{training.philosophy}</p>
            </div>
          </div>
        </div>

        {/* Training Experiences */}
        <div className="training-experiences">
          <h3 className="subsection-title">
            <span className="keyword">class</span> TrainingExperience <span className="bracket">{'{'}</span>
          </h3>

          <div className="experiences-grid">
            {training.experiences.map((exp, index) => (
              <div key={index} className="experience-card card">
                {exp.logo && (
                  <div className="experience-logo">
                    <a href={exp.website} target="_blank" rel="noopener noreferrer">
                      <img src={exp.logo} alt={`${exp.institution} logo`} />
                    </a>
                  </div>
                )}
                <div className="experience-content">
                  <h4 className="experience-institution">{exp.institution}</h4>
                  <p className="experience-course">{exp.course}</p>
                  <div className="experience-meta">
                    <span className="experience-duration">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                      {exp.duration}
                    </span>
                  </div>
                  <p className="experience-description">{exp.description}</p>
                  {exp.linkedin && (
                    <a
                      href={exp.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="experience-linkedin"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      See CodeGirls Training on LinkedIn
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="subsection-close">
            <span className="bracket">{'}'}</span>
          </p>
        </div>

        {/* Testimonials */}
        <div className="training-testimonials">
          <h3 className="subsection-title">
            <span className="keyword">const</span> testimonials = <span className="bracket">[</span>
          </h3>

          <div className="testimonials-carousel-wrapper">
            <button
              className="carousel-btn carousel-btn-left"
              onClick={() => scrollCarousel('left')}
              aria-label="Previous testimonials"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>

            <div className="testimonials-carousel" ref={carouselRef}>
              {training.testimonials.map((testimonial, index) => (
                <div key={index} className={`testimonial-card ${expandedCard === index ? 'expanded' : ''}`}>
                  <div className="testimonial-quote">
                    <svg className="quote-icon" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                    <p className={`testimonial-text ${expandedCard === index ? 'expanded' : ''}`}>
                      {testimonial.text}
                    </p>
                    {testimonial.text.length > 150 && (
                      <button
                        className="read-more-btn"
                        onClick={() => toggleExpand(index)}
                      >
                        {expandedCard === index ? 'Show Less' : 'Read More'}
                      </button>
                    )}
                  </div>
                  <div className="testimonial-author">
                    {testimonial.photo ? (
                      <img className="testimonial-photo" src={testimonial.photo} alt={testimonial.name} />
                    ) : (
                      <div
                        className="testimonial-avatar"
                        style={{ backgroundColor: getAvatarColor(testimonial.name) }}
                      >
                        {getInitials(testimonial.name)}
                      </div>
                    )}
                    <div className="testimonial-info">
                      <span className="testimonial-name">{testimonial.name}</span>
                      <span className="testimonial-role">{testimonial.role}</span>
                    </div>
                    {testimonial.linkedin && (
                      <a
                        href={testimonial.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="testimonial-linkedin"
                        title={`Connect with ${testimonial.name}`}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button
              className="carousel-btn carousel-btn-right"
              onClick={() => scrollCarousel('right')}
              aria-label="Next testimonials"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>

          <p className="subsection-close">
            <span className="bracket">]</span>;
          </p>
        </div>
      </div>
    </section>
  );
}

export default Training;
