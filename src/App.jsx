import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight, Github, Linkedin, Mail, Download, Sparkles,
  Code2, Database, BrainCircuit, BarChart3, Menu, ExternalLink
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } }
};

const skills = [
  { name: "Python", group: "Programming" },
  { name: "SQL", group: "Database" },
  { name: "Pandas", group: "Data Analysis" },
  { name: "NumPy", group: "Data Analysis" },
  { name: "Scikit-learn", group: "Machine Learning" },
  { name: "Matplotlib", group: "Visualization" },
  { name: "Power BI", group: "Visualization" },
  { name: "MySQL", group: "Database" },
  { name: "Streamlit", group: "Development" },
  { name: "Git & GitHub", group: "Tools" }
];

const projects = [
  {
    number: "01",
    title: "Crime Type Occurrence & Prediction",
    type: "MACHINE LEARNING",
    description: "A machine-learning project to explore crime datasets, identify patterns and predict crime types.",
    tools: ["Python", "Scikit-learn", "Pandas"],
    link: "https://github.com/RajeswariKambhampati",
    icon: <BrainCircuit size={25} />
  },
  {
    number: "02",
    title: "PhonePe Pulse Data Analysis",
    type: "DATA ANALYTICS",
    description: "Analysis of digital payment trends, transaction patterns and regional insights using PhonePe Pulse data.",
    tools: ["Python", "Pandas", "Plotly", "Streamlit"],
    link: "https://github.com/RajeswariKambhampati",
    icon: <BarChart3 size={25} />
  },
  {
    number: "03",
    title: "Agentic AI Travel Planning Assistant",
    type: "GENERATIVE AI",
    description: "A multi-agent travel planning application designed to help organize travel information and itineraries.",
    tools: ["Python", "Streamlit", "Groq", "LangChain"],
    link: "https://github.com/RajeswariKambhampati",
    icon: <Sparkles size={25} />
  }
];

function SectionTitle({ eyebrow, title, text }) {
  return (
    <motion.div className="section-title" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </motion.div>
  );
}

export default function App() {
  return (
    <div>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#home">RK<span>.</span></a>
          <div className="nav-links">
            <a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#contact">Contact</a>
          </div>
          <a className="nav-cta" href="#contact">Let's connect <ArrowUpRight size={15}/></a>
          <a className="mobile-menu" href="#contact" aria-label="Go to contact"><Menu /></a>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <motion.div className="hero-copy" initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.13 } } }}>
            <motion.div className="availability" variants={fadeUp}><span className="pulse" /> DATA SCIENCE INTERN · RAMANA SOFT</motion.div>
            <motion.p className="hello" variants={fadeUp}>Hello, I'm</motion.p>
            <motion.h1 variants={fadeUp}>Rajeswari<br/><span>Kambhampati.</span></motion.h1>
            <motion.h2 variants={fadeUp}>Turning data into <em>meaningful insights.</em></motion.h2>
            <motion.p className="hero-description" variants={fadeUp}>I’m a Computer Science and Cognitive Systems graduate interested in Data Science, Analytics and Artificial Intelligence. I enjoy exploring data, solving problems and building practical projects.</motion.p>
            <motion.div className="hero-actions" variants={fadeUp}>
              <a className="button primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="button secondary" href="#contact"><Mail size={16}/> Contact me</a>
            </motion.div>
            <motion.div className="socials" variants={fadeUp}>
              <a href="https://github.com/RajeswariKambhampati" target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a>
              <a href="https://www.linkedin.com/in/kambhampatirajeswari/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a>
              <span className="social-note">Find me online</span>
            </motion.div>
          </motion.div>
          <motion.div className="hero-art" initial={{ opacity: 0, scale: .88, rotate: 3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .9, delay: .25 }}>
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="core-card">
              <div className="core-top"><span>DATA / AI</span><Sparkles size={17}/></div>
              <div className="core-icon"><BrainCircuit size={76} strokeWidth={1.1}/></div>
              <div className="core-label">Curiosity → Insights</div>
              <div className="mini-bars"><i/><i/><i/><i/><i/><i/><i/><i/><i/></div>
            </div>
            <div className="float-chip chip-python"><Code2 size={17}/> Python</div>
            <div className="float-chip chip-sql"><Database size={17}/> SQL</div>
            <div className="float-chip chip-ml"><BrainCircuit size={17}/> Machine Learning</div>
            <div className="art-caption">LEARN · BUILD · ANALYZE</div>
          </motion.div>
        </section>

        <section className="stats container">
          <div><strong>03</strong><span>Featured projects</span></div>
          <div><strong>10+</strong><span>Technical skills</span></div>
          <div><strong>01</strong><span>Current internship</span></div>
        </section>

        <section className="section container" id="about">
          <SectionTitle eyebrow="A LITTLE ABOUT ME" title="Curious mind. Analytical mindset." text="I enjoy learning how technology can turn complex information into useful solutions."/>
          <div className="about-grid">
            <motion.div className="about-card glass" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <span className="card-kicker">MY JOURNEY</span>
              <p>I studied Computer Science and Cognitive Systems and developed an interest in data-driven problem solving. Through projects and internship learning, I’m building my foundation in Python, analytics and machine learning.</p>
              <p>I believe in learning by doing: exploring datasets, experimenting with tools and documenting what I build.</p>
            </motion.div>
            <motion.div className="about-facts" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div className="fact"><span className="fact-icon"><BrainCircuit/></span><div><b>Focus</b><small>Data Science · Analytics · AI/ML</small></div></div>
              <div className="fact"><span className="fact-icon"><Code2/></span><div><b>Currently learning</b><small>Practical data workflows and machine learning</small></div></div>
              <div className="fact"><span className="fact-icon"><Database/></span><div><b>Education</b><small>B.Sc. Computer Science and Cognitive Systems</small></div></div>
            </motion.div>
          </div>
        </section>

        <section className="section container" id="skills">
          <SectionTitle eyebrow="MY TOOLKIT" title="Skills & technologies" text="Tools and concepts I have studied or used in my learning and projects."/>
          <div className="skills-grid">
            {skills.map((skill, i) => <motion.div className="skill" key={skill.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .045 }}><span>{skill.name}</span><small>{skill.group}</small></motion.div>)}
          </div>
        </section>

        <section className="section container" id="projects">
          <SectionTitle eyebrow="SELECTED WORK" title="Projects I've explored" text="A few projects that demonstrate my interest in data, machine learning and AI."/>
          <div className="projects-grid">
            {projects.map((project, i) => <motion.article className="project-card" key={project.number} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .12 }}>
              <div className="project-top"><span>{project.number} / 03</span><span className="project-icon">{project.icon}</span></div>
              <span className="project-type">{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">{project.tools.map(tool => <span key={tool}>{tool}</span>)}</div>
              <a className="project-link" href={project.link} target="_blank" rel="noreferrer">View on GitHub <ExternalLink size={15}/></a>
            </motion.article>)}
          </div>
          <p className="note">Replace each GitHub link with the exact repository URL for that project before publishing.</p>
        </section>

        <section className="section container" id="experience">
          <SectionTitle eyebrow="WHERE I'M GROWING" title="Experience" text="My current step into the data science industry."/>
          <motion.div className="experience-card glass" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div className="timeline-dot"/>
            <div className="experience-head"><div><span className="eyebrow">NOV 2026 — PRESENT · ON-SITE</span><h3>Data Science Intern</h3><p className="company">RAMANA Soft</p></div><span className="experience-mark">RK</span></div>
            <p>Currently undertaking a Data Science internship and developing practical exposure to programming technologies, software development practices and collaborative project environments.</p>
            <div className="tags"><span>Data Science</span><span>Programming</span><span>Problem Solving</span><span>Team Collaboration</span></div>
          </motion.div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <SectionTitle eyebrow="LET'S CONNECT" title="Have a project or opportunity?" text="I’m happy to connect, learn and discuss opportunities in Data Science and Analytics."/>
            <a className="button primary contact-button" href="https://www.linkedin.com/in/kambhampatirajeswari/" target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={17}/></a>
            <div className="contact-links">
              <a href="https://github.com/RajeswariKambhampati" target="_blank" rel="noreferrer"><Github/> GitHub</a>
              <a href="https://www.linkedin.com/in/kambhampatirajeswari/" target="_blank" rel="noreferrer"><Linkedin/> LinkedIn</a>
              <a href="mailto:rajeswarikambhampati05@gmail.com"><Mail/> rajeswarikambhampati05@gmail.com</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer container"><a className="brand" href="#home">RK<span>.</span></a><span>Designed & built by Rajeswari Kambhampati · 2026</span><a href="#home">Back to top ↑</a></footer>
    </div>
  );
}
