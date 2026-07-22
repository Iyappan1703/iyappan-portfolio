import { motion } from 'framer-motion';
import {
  FaAward,
  FaBug,
  FaBriefcase,
  FaCode,
  FaCodeBranch,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaGlobe,
  FaGraduationCap,
  FaLaptopCode,
  FaLightbulb,
  FaLinkedin,
  FaMicrochip,
  FaMapMarkerAlt,
  FaPalette,
  FaPhone,
  FaRocket,
  FaShieldAlt,
  FaTools,
} from 'react-icons/fa';
import profile from './assets/profile.jpg.jpeg';

const skills = [
  { name: 'Python', icon: <FaCode /> },
  { name: 'HTML', icon: <FaCode /> },
  { name: 'CSS', icon: <FaPalette /> },
  { name: 'JavaScript', icon: <FaCode /> },
  { name: 'React', icon: <FaRocket /> },
  { name: 'Figma', icon: <FaPalette /> },
  { name: 'Canva', icon: <FaPalette /> },
  { name: 'Git', icon: <FaCodeBranch /> },
  { name: 'GitHub', icon: <FaGithub /> },
  { name: 'VS Code', icon: <FaLaptopCode /> },
  { name: 'Bug Bounty', icon: <FaBug /> },
  { name: 'Basic IoT', icon: <FaMicrochip /> },
];

const featuredProducts = [
  {
    title: 'Emergency SOS Band',
    subtitle: 'Smart Emergency Safety Prototype',
    description:
      'Developed under BELIEF & OpenOrbit 100 Days Challenge and presented at IKMC 2025, this prototype focuses on rapid emergency response and personal safety.',
    icon: <FaShieldAlt />,
  },
  {
    title: 'Automatic Disc Lock System',
    subtitle: 'Smart Motorcycle Security Prototype',
    description:
      'An ignition-based secure locking concept designed to strengthen motorcycle protection and provide an intelligent anti-theft mechanism.',
    icon: <FaTools />,
  },
];

const projects = [
  {
    title: 'Money Laundering Pattern Detection',
    description:
      'An analytical project focused on identifying suspicious financial behaviors through intelligent pattern recognition and risk-based insights.',
  },
  {
    title: 'Gamified Learning Platform',
    description:
      'A student-focused learning experience designed to make education interactive, engaging, and motivating through playful progression.',
  },
  {
    title: 'Aqua Meta',
    description:
      'A forward-looking sustainability solution that blends emerging tech with practical environmental awareness and digital innovation.',
  },
];

const experiences = [
  {
    role: 'Help Desk Intern',
    company: 'AdroIT Technologies',
    period: 'Internship Experience',
    details: 'Worked in an IT support environment, strengthening troubleshooting, communication, and practical problem-solving abilities.',
  },
  {
    role: 'R&D Product Development Team',
    company: 'Innovation Focus',
    period: 'Project-Based Experience',
    details: 'Contributed to brainstorming, prototyping, and building concepts that connect engineering with real-world usability.',
  },
];

const certificates = [
  'Oracle AI Foundations Associate',
  'NPTEL IoT Elite',
  'NPTEL Industry 4.0 Elite',
  'Help Desk Internship',
];

const achievements = ['NCC A Certificate', 'NSS Volunteer', 'IIC Member'];

const resumeText = `Iyappan N
Computer Science and Engineering Student
Email: iyappan@example.com
LinkedIn: linkedin.com/in/iyappan
GitHub: github.com/iyappan
Skills: Python, React, UI/UX, Cybersecurity, Product Development
Experience: Help Desk Intern at AdroIT Technologies
Projects: Emergency SOS Band, Automatic Disc Lock System, Aqua Meta
Certificates: Oracle AI Foundations Associate, NPTEL IoT Elite, NPTEL Industry 4.0 Elite`;


function App() {
  return (
    <div className="app-shell">
      <style>{`
        :root {
          color-scheme: dark;
          font-family: 'Inter', 'Segoe UI', sans-serif;
          background: #04050b;
          color: #f5f7ff;
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          background:
            radial-gradient(circle at top left, rgba(112, 92, 255, 0.25), transparent 28%),
            radial-gradient(circle at bottom right, rgba(48, 175, 255, 0.2), transparent 35%),
            #04050b;
          color: #f5f7ff;
        }
        a { color: inherit; text-decoration: none; }
        .app-shell { min-height: 100vh; padding: 20px; }
        .glass {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.14);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.28);
        }
        .nav {
          max-width: 1200px;
          margin: 0 auto 20px;
          padding: 16px 22px;
          border-radius: 999px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 16px;
          z-index: 30;
        }
        .nav-links { display: flex; gap: 14px; flex-wrap: wrap; color: #dfe3ff; }
        .nav-links a:hover { color: #7edcff; }
        .main-content { max-width: 1200px; margin: 0 auto; display: grid; gap: 20px; }
        .hero, .section-card { border-radius: 28px; padding: 24px; }
        .hero {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 24px;
          align-items: center;
        }
        .hero-right {
          display: grid;
          gap: 24px;
          justify-items: center;
          width: 100%;
        }
        .profile-frame {
          width: 260px;
          aspect-ratio: 1 / 1;
          border-radius: 50%;
          padding: 6px;
          background: radial-gradient(circle at top, rgba(124, 92, 255, 0.35), rgba(46, 223, 255, 0.08));
          box-shadow: 0 0 40px rgba(124, 92, 255, 0.22);
        }
        .profile-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          border: 3px solid rgba(255, 255, 255, 0.18);
        }
        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(126, 92, 255, 0.2);
          color: #c8cfff;
          font-size: 0.84rem;
          margin-bottom: 14px;
        }
        .hero h1 {
          font-size: clamp(2.1rem, 3.7vw, 3.3rem);
          line-height: 1.08;
          margin: 0 0 12px;
        }
        .hero p, .muted { color: #c4cbe8; line-height: 1.75; }
        .hero-actions { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 18px; }
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          border-radius: 999px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .btn:hover { transform: translateY(-2px); }
        .btn-primary {
          background: linear-gradient(135deg, #7c5cff, #2edfff);
          color: white;
          box-shadow: 0 15px 30px rgba(83, 111, 255, 0.24);
        }
        .btn-secondary {
          background: rgba(255, 255, 255, 0.08);
          color: #f4f7ff;
          border: 1px solid rgba(255, 255, 255, 0.14);
        }
        .hero-panel {
          padding: 20px;
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(97, 71, 255, 0.16), rgba(46, 223, 255, 0.12));
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
        .stat-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; margin-top: 16px; }
        .stat {
          padding: 12px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.06);
        }
        .section-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
        }
        .section-heading h2 { margin: 0; font-size: 1.2rem; }
        .card-grid { display: grid; gap: 14px; }
        .grid-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .grid-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        .skill-card, .product-card, .project-card, .experience-card, .cert-card, .achievement-card, .contact-card {
          padding: 16px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: transform 0.25s ease, border-color 0.25s ease;
        }
        .skill-card:hover, .product-card:hover, .project-card:hover, .experience-card:hover, .cert-card:hover, .achievement-card:hover, .contact-card:hover {
          transform: translateY(-4px);
          border-color: rgba(125, 220, 255, 0.4);
        }
        .skill-card { display: flex; align-items: center; gap: 10px; }
        .icon-pill { color: #7edcff; font-size: 1.1rem; }
        .contact-card { display: flex; justify-content: space-between; align-items: flex-start; gap: 24px; flex-wrap: wrap; }
        .contact-list {
          display: grid;
          gap: 10px;
          margin-top: 16px;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #d8e0ff;
        }
        .contact-item span {
          color: #8fa5d4;
        }
        .socials { display: flex; gap: 12px; font-size: 1.1rem; }
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-bottom: 12px;
        }
        .footer-links a { color: #dfe3ff; }
        .footer-links a:hover { color: #7edcff; }
        footer {
          max-width: 1200px;
          margin: 24px auto 0;
          text-align: center;
          color: #8e95b8;
          padding-bottom: 12px;
        }
        @media (max-width: 900px) {
          .hero { grid-template-columns: 1fr; }
          .grid-2, .grid-3 { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .app-shell { padding: 14px; }
          .nav { padding: 14px 16px; border-radius: 20px; }
          .nav-links { font-size: 0.9rem; }
          .hero, .section-card { padding: 18px; }
          .stat-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <header className="nav glass">
        <div style={{ fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Iyappan N</div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#products">Products</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="/resume.pdf" download>Resume</a>
        </nav>
      </header>

      <main className="main-content">
        <motion.section
          className="hero glass"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="eyebrow">
              <FaRocket />
              Computer Science and Engineering Student
            </div>
            <h1>Hi, I'm Iyappan N</h1>
            <h2 style={{ margin: '8px 0', fontSize: '1.15rem', color: '#bfeeff' }}>UI/UX Designer • Frontend Developer • Python Developer</h2>
            <p>
              I am passionate about UI/UX Design, Frontend Development, Python, Cybersecurity, and Product Development. I enjoy building practical engineering solutions that solve real-world problems while creating modern digital experiences.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/resume.pdf" download>
                <FaDownload /> Download Resume
              </a>
              <a className="btn btn-secondary" href="#contact">
                <FaEnvelope /> Contact Me
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="profile-frame">
              <img src={profile} alt="Iyappan N profile" />
            </div>
            <div className="hero-panel">
              <div className="eyebrow">
                <FaLightbulb />
                Current Focus
              </div>
              <h3 style={{ margin: '0 0 8px' }}>UI/UX • Frontend • Cybersecurity • Product Thinking</h3>
              <p className="muted">
                Combining creativity and engineering to turn ideas into trustworthy, user-friendly products.
              </p>
              <div className="stat-grid">
                <div className="stat">
                  <strong>4+</strong>
                  <div className="muted">Domains</div>
                </div>
                <div className="stat">
                  <strong>3+</strong>
                  <div className="muted">Projects</div>
                </div>
                <div className="stat">
                  <strong>100%</strong>
                  <div className="muted">Driven</div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section id="about" className="section-card glass" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          <div className="section-heading">
            <h2>About</h2>
            <span className="muted">Passion • Purpose • Progress</span>
          </div>
          <p className="muted" style={{ margin: 0 }}>
            I am a Computer Science and Engineering student passionate about creating beautiful interfaces, building practical products, and exploring technology that makes a difference. My interests span UI/UX Design, Frontend Development, Python, Cybersecurity, and Product Development.
          </p>
        </motion.section>

        <motion.section id="skills" className="section-card glass" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          <div className="section-heading">
            <h2>Skills</h2>
            <span className="muted">Technical & creative toolkit</span>
          </div>
          <div className="card-grid grid-3">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-card">
                <div className="icon-pill">{skill.icon}</div>
                <div>{skill.name}</div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section id="products" className="section-card glass" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          <div className="section-heading">
            <h2>Featured Products</h2>
            <span className="muted">Prototype innovation</span>
          </div>
          <div className="card-grid grid-2">
            {featuredProducts.map((item) => (
              <div key={item.title} className="product-card">
                <div className="icon-pill" style={{ fontSize: '1.3rem', marginBottom: 8 }}>{item.icon}</div>
                <h3 style={{ margin: '0 0 6px' }}>{item.title}</h3>
                <p style={{ margin: '0 0 8px', color: '#8fdfff', fontWeight: 600 }}>{item.subtitle}</p>
                <p className="muted" style={{ margin: 0 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section id="projects" className="section-card glass" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          <div className="section-heading">
            <h2>Projects</h2>
            <span className="muted">Selected work</span>
          </div>
          <div className="card-grid grid-3">
            {projects.map((project) => (
              <div key={project.title} className="project-card">
                <h3 style={{ margin: '0 0 8px' }}>{project.title}</h3>
                <p className="muted" style={{ margin: 0 }}>{project.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section id="experience" className="section-card glass" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          <div className="section-heading">
            <h2>Experience</h2>
            <span className="muted">Professional exposure</span>
          </div>
          <div className="card-grid grid-2">
            {experiences.map((item) => (
              <div key={item.role} className="experience-card">
                <div className="eyebrow" style={{ marginBottom: 10 }}>
                  <FaBriefcase />
                  {item.period}
                </div>
                <h3 style={{ margin: '0 0 8px' }}>{item.role}</h3>
                <p style={{ margin: '0 0 6px', color: '#8fdfff' }}>{item.company}</p>
                <p className="muted" style={{ margin: 0 }}>{item.details}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section id="certificates" className="section-card glass" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          <div className="section-heading">
            <h2>Certificates</h2>
            <span className="muted">Recognitions</span>
          </div>
          <div className="card-grid grid-3">
            {certificates.map((cert) => (
              <div key={cert} className="cert-card">
                <div className="icon-pill" style={{ marginBottom: 6 }}><FaGraduationCap /></div>
                <h3 style={{ margin: '0 0 6px' }}>{cert}</h3>
                <p className="muted" style={{ margin: 0 }}>Certified achievement</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section id="achievements" className="section-card glass" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          <div className="section-heading">
            <h2>Achievements</h2>
            <span className="muted">Leadership & service</span>
          </div>
          <div className="card-grid grid-3">
            {achievements.map((achievement) => (
              <div key={achievement} className="achievement-card">
                <div className="icon-pill" style={{ marginBottom: 6 }}><FaAward /></div>
                <h3 style={{ margin: '0 0 6px' }}>{achievement}</h3>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section id="contact" className="section-card glass" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          <div className="contact-card">
            <div>
              <div className="eyebrow">
                <FaEnvelope />
                Let’s connect
              </div>
              <h2 style={{ margin: '0 0 8px' }}>Open to collaboration, innovation, and meaningful work.</h2>
              <p className="muted" style={{ margin: 0 }}>I’m always excited to connect with people building thoughtful products and impactful technology.</p>
              <div className="contact-list">
                <div className="contact-item">
                  <FaEnvelope />
                  <span>Email:</span>
                  iyappan3170@gmail.com
                </div>
                <div className="contact-item">
                  <FaPhone />
                  <span>Phone:</span>
                  +91 6384918900, 8072568913
                </div>
                <div className="contact-item">
                  <FaMapMarkerAlt />
                  <span>Location:</span>
                  Chennai, Tamil Nadu, India
                </div>
                <div className="contact-item">
                  <FaGithub />
                  <span>GitHub:</span>
                  https://github.com/Iyappan1703
                </div>
                <div className="contact-item">
                  <FaLinkedin />
                  <span>LinkedIn:</span>
                  linkedin.com/in/iyappan-n-a720b2315
                </div>
              </div>
            </div>
            <div className="socials">
              <a href="https://github.com/Iyappan1703" aria-label="GitHub"><FaGithub /></a>
              <a href="https://linkedin.com/in/iyappan-n-a720b2315" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="mailto:iyappan3170@gmail.com" aria-label="Email"><FaEnvelope /></a>
            </div>
          </div>
        </motion.section>
      </main>

      <footer>
        <div className="footer-links">
          <a href="https://github.com/Iyappan1703" aria-label="GitHub"><FaGithub /></a>
          <a href="https://linkedin.com/in/iyappan-n-a720b2315" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="mailto:iyappan3170@gmail.com" aria-label="Email"><FaEnvelope /></a>
        </div>
        © 2026 Iyappan N. Crafted with modern design and engineering curiosity.
      </footer>
    </div>
  );
}

export default App;
