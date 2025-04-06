import { useState } from 'react'
import comingSoon from './assets/coming-soon.svg'
import github from './assets/github-mark.svg'
import './App.css'

function App() {

  return (
    <>
      <div className="main">
      
      <div><img src={comingSoon} className="comingSoon" alt="coming soon logo" /></div>
      <div>
      <h1>Syed Sibte Haider</h1>
        <a href="https://github.com/java-developer188" target="_blank">
          <img src={github} className="logo github" alt="github logo" />
        </a>
        <div className="card">
            Hi, I'm Syed Sibte Haider — a passionate Software Developer with a strong focus on building scalable, reliable, and efficient systems. I enjoy turning complex problems into simple. While my complete portfolio is coming soon, I wanted to share a glimpse of who I am. I'm currently working on exciting projects involving RESTful APIs, microservices, databases, and cloud integration. I believe in continuous learning and clean code, and I'm always open to new challenges and collaborations. Thanks for dropping by! Stay tuned for the full experience!
        </div>
      </div>
      </div>
      
    </>
  )
}

export default App
