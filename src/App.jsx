import React, { useEffect, useState } from "react";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Code2, Github, Linkedin,
  Mail, Menu, Moon, Sun, X, Braces, Database, GraduationCap, Laptop,
  Lightbulb, MapPin, ExternalLink
} from "lucide-react";
import { profile, projects } from "./data";
import SectionHeading from "./components/SectionHeading";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";

const navItems = [
  ["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"],
  ["Experience", "#experience"], ["Education", "#education"], ["Contact", "#contact"]
];

function SocialLink({ href, label, children }) {
  const placeholder = href.includes("your-");
  return (
    <a className={`social-link ${placeholder ? "social-placeholder" : ""}`}
      href={placeholder ? undefined : href}
      target={placeholder ? undefined : "_blank"}
      rel={placeholder ? undefined : "noreferrer"}
      aria-label={label}
      title={placeholder ? "Replace this placeholder URL in src/data.js" : label}>
      {children}<span>{label}</span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = lightMode ? "light" : "dark";
  }, [lightMode]);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  function closeMenu() { setMenuOpen(false); }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="container nav-container">
          <a className="brand" href="#home" aria-label="Tushar Kumar home">
            <span className="brand-mark">TK</span><span>Tushar Kumar<span className="brand-dot">.</span></span>
          </a>
          <nav className={`main-nav ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} onClick={closeMenu}>{label}</a>
            ))}
            <button className="theme-toggle mobile-theme" onClick={() => setLightMode(!lightMode)} aria-label={lightMode ? "Switch to dark mode" : "Switch to light mode"}>
              {lightMode ? <Moon size={17} /> : <Sun size={17} />}<span>{lightMode ? "Dark mode" : "Light mode"}</span>
            </button>
          </nav>
          <div className="nav-actions">
            <button className="theme-toggle desktop-theme" onClick={() => setLightMode(!lightMode)} aria-label={lightMode ? "Switch to dark mode" : "Switch to light mode"} title={lightMode ? "Switch to dark mode" : "Switch to light mode"}>
              {lightMode ? <Moon size={17} /> : <Sun size={17} />}
            </button>
            <a className="nav-contact" href="#contact">Let's talk <ArrowUpRight size={15} /></a>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen}>
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero section-pad" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="availability"><span className="availability-dot" /> Open to software development opportunities</div>
              <p className="eyebrow hero-eyebrow">HELLO, I'M</p>
              <h1>Tushar Kumar<span className="heading-period">.</span></h1>
              <h2 className="hero-role">Computer Science Engineering Student <span>/</span> Aspiring Software Developer</h2>
              <p className="hero-intro">I build web experiences and work on practical software development projects. I'm focused on strengthening my programming fundamentals and turning ideas into useful applications.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">View my projects <ArrowDownRight size={17} /></a>
                <a className="button button-secondary" href="#contact">Contact me <ArrowUpRight size={16} /></a>
              </div>
              <div className="social-row">
                <SocialLink href={profile.github} label="GitHub"><Github size={17} /></SocialLink>
                <SocialLink href={profile.linkedin} label="LinkedIn"><Linkedin size={17} /></SocialLink>
                <a className="social-link" href={`mailto:${profile.email}`}><Mail size={17} /><span>Email</span></a>
              </div>
            </div>
            <div className="hero-visual" aria-label="Decorative code editor illustration">
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />
              <div className="code-window">
                <div className="window-bar">
                  <div className="window-dots"><i /><i /><i /></div>
                  <span>about-me.jsx</span><span className="window-lock"><Code2 size={14} /></span>
                </div>
                <div className="code-body">
                  <div className="code-line"><span className="line-no">01</span><span><b className="code-purple">const</b> <b className="code-blue">developer</b> = {"{"}</span></div>
                  <div className="code-line"><span className="line-no">02</span><span className="indent"><b className="code-red">name</b>: <b className="code-green">"Tushar Kumar"</b>,</span></div>
                  <div className="code-line"><span className="line-no">03</span><span className="indent"><b className="code-red">focus</b>: <b className="code-green">"Software"</b>,</span></div>
                  <div className="code-line"><span className="line-no">04</span><span className="indent"><b className="code-red">language</b>: <b className="code-green">"Java"</b>,</span></div>
                  <div className="code-line"><span className="line-no">05</span><span className="indent"><b className="code-red">curious</b>: <b className="code-orange">true</b>,</span></div>
                  <div className="code-line"><span className="line-no">06</span><span>{"};"}</span></div>
                  <div className="code-line code-spacer"><span className="line-no">07</span><span /></div>
                  <div className="code-line"><span className="line-no">08</span><span><b className="code-purple">function</b> <b className="code-blue">keepBuilding</b>() {"{"}</span></div>
                  <div className="code-line"><span className="line-no">09</span><span className="indent"><b className="code-purple">return</b> <b className="code-green">"learn → build → improve"</b>;</span></div>
                  <div className="code-line"><span className="line-no">10</span><span>{"}"}</span></div>
                  <div className="code-cursor" aria-hidden="true" />
                </div>
              </div>
              <div className="floating-chip chip-java"><span className="chip-symbol">J</span><span><b>Java</b><small>Primary language</small></span></div>
              <div className="floating-chip chip-react"><Braces size={19} /><span><b>React</b><small>Frontend</small></span></div>
              <div className="visual-caption"><span className="caption-line" /> Built with curiosity, one project at a time.</div>
            </div>
          </div>
          <div className="container hero-bottom">
            <span><MapPin size={15} /> Roorkee, India</span>
            <a href="#about">Scroll to explore <ArrowDownRight size={15} /></a>
          </div>
        </section>

        <section className="section-pad section-border" id="about">
          <div className="container two-column">
            <SectionHeading eyebrow="01 / ABOUT" title={<>A little about <span>me.</span></>} />
            <div className="about-content">
              <p className="about-lead">I'm a Computer Science Engineering student at Quantum University, Roorkee, working toward becoming a capable software developer.</p>
              <p>I spend my time learning programming, practicing problem-solving, and building projects that help me apply what I learn. I'm especially interested in Java, web development, and how software can solve practical problems.</p>
              <p>I'm looking for opportunities where I can contribute, learn from experienced developers, and improve by working on real-world problems.</p>
              <a className="text-link" href="#contact">Let's connect <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="section-pad section-border" id="skills">
          <div className="container">
            <SectionHeading eyebrow="02 / TOOLKIT" title={<>Technical <span>skills.</span></>} description="The tools and concepts I'm learning and using in my projects." />
            <div className="skills-grid">
              <article className="skill-card"><div className="skill-icon"><Code2 size={20} /></div><h3>Programming</h3><p>Writing logic and building a strong programming foundation.</p><div className="tag-list"><span className="tag">Java</span></div></article>
              <article className="skill-card"><div className="skill-icon"><Laptop size={20} /></div><h3>Web Development</h3><p>Creating responsive interfaces and interactive web experiences.</p><div className="tag-list"><span className="tag">HTML</span><span className="tag">CSS</span><span className="tag">JavaScript</span><span className="tag">React</span></div></article>
              <article className="skill-card"><div className="skill-icon"><Braces size={20} /></div><h3>Core Concepts</h3><p>Practicing problem-solving and understanding foundational concepts.</p><div className="tag-list"><span className="tag">Data Structures & Algorithms</span><span className="tag">OOP</span></div></article>
              <article className="skill-card"><div className="skill-icon"><Database size={20} /></div><h3>Database</h3><p>Learning to query and work with structured data.</p><div className="tag-list"><span className="tag">SQL</span></div></article>
            </div>
          </div>
        </section>

        <section className="section-pad section-border" id="projects">
          <div className="container">
            <div className="section-heading-row">
              <SectionHeading eyebrow="03 / SELECTED WORK" title={<>Projects I've <span>worked on.</span></>} description="A few projects that reflect what I'm learning and building." />
              <span className="project-count">03 projects</span>
            </div>
            <div className="projects-grid">
              {projects.map((project, index) => <ProjectCard project={project} index={index} key={project.title} />)}
            </div>
            <p className="project-footnote"><span className="footnote-dot" /> Project links are placeholders. Replace them with your real repository and live demo URLs before publishing.</p>
          </div>
        </section>

        <section className="section-pad section-border" id="experience">
          <div className="container two-column">
            <SectionHeading eyebrow="04 / EXPERIENCE & RESEARCH" title={<>Learning through <span>practice.</span></>} description="Experience and research work, presented without inflated claims." />
            <div className="timeline">
              <article className="timeline-item">
                <span className="timeline-marker"><Laptop size={17} /></span>
                <div className="timeline-meta"><span>INTERNSHIP</span><span>Dates: add details</span></div>
                <h3>Internship — Techyvibe Technology</h3>
                <p>Worked on an AI image-generation web project during an internship. Add your official role, dates, and verified responsibilities before publishing this section.</p>
                <div className="tag-list"><span className="tag">HTML</span><span className="tag">CSS</span><span className="tag">JavaScript</span><span className="tag">React</span></div>
              </article>
              <article className="timeline-item">
                <span className="timeline-marker"><Lightbulb size={17} /></span>
                <div className="timeline-meta"><span>ONGOING RESEARCH</span><span>In progress</span></div>
                <h3>Green AI: Sustainable AI Practices</h3>
                <p>Exploring sustainable AI practices and the importance of considering computational resources and environmental impact in AI development.</p>
                <span className="status status-progress research-status">In Progress</span>
              </article>
            </div>
          </div>
        </section>

        <section className="section-pad section-border" id="education">
          <div className="container two-column">
            <SectionHeading eyebrow="05 / EDUCATION" title={<>Academic <span>background.</span></>} />
            <article className="education-card">
              <div className="education-icon"><GraduationCap size={23} /></div>
              <div className="education-content">
                <span className="education-label">UNDERGRADUATE DEGREE</span>
                <h3>B.Tech in Computer Science and Engineering</h3>
                <p className="education-school">Quantum University, Roorkee</p>
                <div className="education-details"><span>Graduation: <b>[Expected year]</b></span><span>CGPA: <b>[Add current CGPA]</b></span></div>
              </div>
            </article>
          </div>
        </section>

        <section className="section-pad section-border" id="activities">
          <div className="container activities-row">
            <div><p className="eyebrow">06 / BEYOND THE SCREEN</p><h2>Always learning.<br /><span>Always exploring.</span></h2></div>
            <div className="activities-copy"><p>Outside coursework, I enjoy cricket and exploring ideas around software, AI, and web development.</p><p>Add verified hackathons, coding profiles, volunteering, or other achievements here when you have details to share.</p></div>
          </div>
        </section>

        <section className="section-pad contact-section" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <p className="eyebrow">07 / GET IN TOUCH</p>
              <h2>Have a project<br />or opportunity<span>?</span></h2>
              <p>I'm interested in software development internships, collaborative projects, and conversations about building useful things.</p>
              <a className="contact-email" href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email} <ArrowUpRight size={16} /></a>
              <div className="contact-socials">
                <SocialLink href={profile.github} label="GitHub"><Github size={17} /></SocialLink>
                <SocialLink href={profile.linkedin} label="LinkedIn"><Linkedin size={17} /></SocialLink>
              </div>
            </div>
            <div className="contact-form-wrap"><h3>Send a message</h3><p className="form-intro">Fill out the form below. It is currently a front-end demo only.</p><ContactForm /></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top">
          <a className="brand" href="#home"><span className="brand-mark">TK</span><span>Tushar Kumar<span className="brand-dot">.</span></span></a>
          <nav className="footer-nav" aria-label="Footer navigation">
            {navItems.filter(([, href]) => href !== "#contact").map(([label, href]) => <a href={href} key={label}>{label}</a>)}
          </nav>
          <a className="back-top" href="#home">Back to top <ArrowUpRight size={15} /></a>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Tushar Kumar. All rights reserved.</span><span>Designed and built with React.</span></div>
      </footer>
    </div>
  );
}

export default App;
