import React from 'react';
import './App.css';
import Photo from './image/ivan.png';

function App() {
  return (
    <div className="App" id="top">
      <AboutSection />
      <SkillsSection />
      <WorkExperience />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

function AboutSection() {
  return (
    <div className="section">
      <div className="image-container">
        <img src={Photo} width={315} height={400}/>
          <div className="about-text">
          <h2>About Me</h2>
        <p>Hello! I’m Ivan Babenko. I am passionate about UI/UX design, web design, and front-end development.</p>
        <div className="contact-info">
        <p>Age: 19</p>
        <p>Email: vanyababenko@gmail.com</p>
        <p>Phone: +063-623-43-50</p>
          <p>Address: 22, City Center, Kyiv, Ukraine</p>
          </div>
        </div>
      </div>
    </div>
  );
}


function SkillsSection() {
  const skills = [
    { name: 'HTML', level: 60 },
    { name: 'CSS', level: 55 },
    { name: 'JavaScript', level: 30 },
    { name: 'Photoshop', level: 80 },
    { name: 'Figma', level: 70 },
    { name: 'Illustrator', level: 75 },
  ];

  return (
    <div className="section">
      <h1>Professional Skills</h1>
      {skills.map((skill) => (
        <div key={skill.name} className="skill">
          <span>{skill.name}</span>
          <div className="progress-bar" style={{ width: `${skill.level}%` }}></div>
        </div>
      ))}
    </div>
  );
}

function WorkExperience() {
  return (
    <div className="section">
      <h1>Work Experience</h1>
      <div className="timeline-card">
        <h3>Graphic Designer - Freelance</h3>
        <p className="date">October 2022 - October 2023</p>
        <p>Created unique logos and illustrations while leveraging Adobe Photoshop to deliver high-quality visual content tailored to client needs.</p>
      </div>
    </div>
  );
}

function EducationSection() {
  return (
    <div className="section">
      <h1>Education</h1>
      <div className="timeline-card">
        <h3>School №39</h3>
        <p className="date">2012 - 2023</p>
        <p>Graduated with honors, excelling in critical thinking and problem-solving.</p>
      </div>
      <div className="timeline-card">
        <h3>Bachelor of CyberSecurity - University Trade and Economics</h3>
        <p className="date">2023 - 2027</p>
        <p>Gaining expertise in network protection, cryptography, and risk management.</p>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="section">
      <h1>Contact</h1>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your E-mail" required />
        <textarea rows="4" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>Design by Ivan Babenko</p>
    </footer>
  );
}

export default App;