import { useState, useEffect } from 'react';
import './Skills.css';

function Skills() {
  const [skills, setSkills] = useState({ categories: [] });

  useEffect(() => {
    fetch('/data/skills.json')
      .then(response => response.json())
      .then(data => setSkills(data))
      .catch(err => console.error('Error loading skills:', err));
  }, []);

  const getTagClass = (index) => {
    const classes = ['tag-green', 'tag-blue', 'tag-orange', 'tag-purple'];
    return classes[index % classes.length];
  };

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I work with
          </p>
        </div>

        <div className="skills-grid">
          {skills.categories.map((category, catIndex) => (
            <div key={catIndex} className="skill-category card-terminal">
              <div className="card-terminal-header">
                <span className="card-terminal-dot red"></span>
                <span className="card-terminal-dot yellow"></span>
                <span className="card-terminal-dot green"></span>
              </div>
              <div className="card-terminal-body">
                <h3 className="skill-category-name">
                  <span className="bracket">{'{'}</span>
                  {category.name}
                  <span className="bracket">{'}'}</span>
                </h3>
                <div className="skill-tags">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`tag ${getTagClass(catIndex)}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
