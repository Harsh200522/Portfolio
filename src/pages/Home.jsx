import React, { useEffect, useRef } from "react";
import profilePic from "/images/Profile.jpeg";
import "../style/Home.css";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaBriefcase, FaMapMarkerAlt, FaCaretRight } from "react-icons/fa";
import Contact from "./contact";
import { Link } from "react-router-dom";

const Home = () => {
  const techSkills = [
    "React.js",
    "PHP",
    "Python",
    "DSA with Java", 
    "MongoDB",
    "ASP.NET",
    "SQL Server",
    "PL/SQL",
    "JavaScript",
    "Bootstrap",
    "Java with OOPS",
    "Wordpress"
  ];
   /* ================= ICON GRADIENT ================= */
  const GradientDef = (
    <defs>
      <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00f5ff" />
        <stop offset="50%" stopColor="#7c7cff" />
        <stop offset="100%" stopColor="#ff5edf" />
      </linearGradient>
    </defs>
  );

  /* ================= ICON COMPONENT ================= */
  const GradientIcon = ({ type }) => {
    switch (type) {
      case "code":
        return (
          <svg viewBox="0 0 24 24" className="whatido-svg">
            {GradientDef}
            <path
              d="M8 9l-3 3 3 3M16 9l3 3-3 3M14 4l-4 16"
              stroke="url(#iconGradient)"
            />
          </svg>
        );

      case "frontend":
        return (
          <svg viewBox="0 0 24 24" className="whatido-svg">
            {GradientDef}
            <rect
              x="3"
              y="4"
              width="18"
              height="14"
              rx="2"
              stroke="url(#iconGradient)"
            />
            <path d="M8 22h8" stroke="url(#iconGradient)" />
          </svg>
        );

      case "backend":
        return (
          <svg viewBox="0 0 24 24" className="whatido-svg">
            {GradientDef}
            <ellipse
              cx="12"
              cy="5"
              rx="8"
              ry="3"
              stroke="url(#iconGradient)"
            />
            <path
              d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"
              stroke="url(#iconGradient)"
            />
            <path
              d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"
              stroke="url(#iconGradient)"
            />
          </svg>
        );

      case "database":
        return (
          <svg viewBox="0 0 24 24" className="whatido-svg">
            {GradientDef}
            <ellipse
              cx="12"
              cy="5"
              rx="8"
              ry="3"
              stroke="url(#iconGradient)"
            />
            <path
              d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"
              stroke="url(#iconGradient)"
            />
          </svg>
        );

      /* ===== PUZZLE ICON (PROBLEM SOLVING) ===== */
      case "brain":
        return (
          <svg viewBox="0 0 512 512" className="whatido-svg">
            <defs>
              <linearGradient id="puzzleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00f5ff" />
                <stop offset="50%" stopColor="#7c7cff" />
                <stop offset="100%" stopColor="#ff5edf" />
              </linearGradient>
            </defs>

            <path
              d="M256,0C114.616,0,0,114.634,0,256.009S114.616,512,256,512c141.383,0,256-114.616,256-255.991S397.383,0,256,0 z
              M336.83,291.277c13.956-0.902,23.303-12.697,29.527-15.518c6.224-2.83,10.884,1.41,10.884,8.464
              c0,7.063,1.821,55.098,1.821,55.098c0.25,7.553-7.142,16.375-19.357,14.071l-56.152-6.642
              c-11.365-1.616-13.624-1.902-18.187,3.116c-5.313,5.857,9.295,12.804,9.295,29.197
              c0,19.356-17.313,35.071-38.661,35.071c-21.339,0-38.652-15.715-38.652-35.071
              c0-16.393,14.608-23.34,9.286-29.197c-4.554-5.018-6.813-4.732-18.188-3.116l-56.152,6.642
              c-12.214,2.304-19.607-6.518-19.357-14.071c0,0,1.821-48.036,1.821-55.098
              c0-7.054,4.661-11.294,10.885-8.464c6.222,2.821,15.58,14.616,29.527,15.518
              c21.767,1.42,40.42-15.518,40.42-35.268c0-19.75-18.652-36.688-40.42-35.277
              c-13.947,0.902-23.304,12.688-29.527,15.526c-6.224,2.822-10.885-1.428-10.885-8.482
              c0-7.044-1.821-55.098-1.821-55.098c-0.25-7.536,7.143-16.375,19.357-14.063l56.152,6.652
              c11.366,1.616,13.624,1.902,18.188-3.117c5.321-5.857-9.286-12.821-9.286-29.196
              c0-19.376,17.313-35.09,38.652-35.09c21.348,0,38.661,15.714,38.661,35.09
              c0,16.375-14.608,23.339-9.295,29.196c4.553,5.019,6.812,4.732,18.187,3.117l56.152-6.652
              c12.215-2.312,19.608,6.527,19.357,14.063c0,0-1.821,48.054-1.821,55.098
              c0,7.054-4.66,11.304-10.884,8.482c-6.224-2.839-15.571-14.625-29.527-15.526
              c-21.768-1.411-40.42,15.526-40.42,35.277
              C296.41,275.759,315.062,292.697,336.83,291.277z"
              fill="url(#puzzleGradient)"
            />
          </svg>
        );

      default:
        return null;
    }
  };


  const whatIDo = [
  {
    title: "Full Stack Development",
    desc: "Building complete web applications from frontend to backend with clean and scalable architecture.",
    icon: "code",
  },
  {
    title: "Frontend Development",
    desc: "Creating responsive, interactive, and user-friendly interfaces using modern UI technologies.",
    icon: "frontend",
  },
  {
    title: "Backend Development",
    desc: "Developing secure backend systems, APIs, and business logic with efficient database handling.",
    icon: "backend",
  },
  {
    title: "Database Management",
    desc: "Designing and managing optimized databases with fast queries and reliable data storage.",
    icon: "database",
  },
  {
    title: "Problem Solving",
    desc: "Solving real-world problems using DSA and Java to improve performance and system efficiency.",
    icon: "brain",
  },
];

  const stats = [
    { number: "3+", label: "Projects" },
    { number: "75%", label: "Satisfaction" },
    { number: "<100ms", label: "Load Time" },
  ];

  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    sectionsRef.current.forEach((sec) => observer.observe(sec));
  }, []);

  return (
    <>
      {/* ================= ABOUT ME ================= */}
      <section
        className="section hidden"
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        <h1 className="section-heading">About Me</h1>

        <div className="home-container">
          <div className="left-section">
            <h1 className="title">
              Hi, I'm Harsh
              <span className="cursor-blink"></span>
            </h1>

            <div className="description-box">
              <p className="about-me">
                I am a <strong>motivated and reliable Full Stack Developer</strong>{" "}
                with a strong focus on delivering{" "}
                <strong>quality-driven digital solutions</strong>. I have experience
                working across the full development lifecycle, from{" "}
                <strong>planning and implementation</strong> to final delivery.
              </p>
            </div>

            <div className="stats-container">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <Link
              to="/projects"
              className="cta-button"
              style={{ textDecoration: "none" }}
            >
              View Projects →
            </Link>


          </div>

          <div className="right-section">
            <div className="profile-image-container">
              <div className="profile-glow"></div>
              <img src={profilePic} alt="Harsh" className="profile-image" />
              <div className="hologram-overlay"></div>
              <div className="border-frame"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section
        className="section hidden"
        ref={(el) => (sectionsRef.current[1] = el)}
      >
        <h1 className="section-heading">Skills & Technologies</h1>

        <div className="skills-container">
          {techSkills.map((skill) => (
            <div key={skill} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHAT I DO ================= */}
      <section
        className="section hidden"
        ref={(el) => (sectionsRef.current[2] = el)}
      >
        <h1 className="section-heading">What I Do</h1>

        <div className="whatido-container">
          {whatIDo.map((item, index) => (
            <div key={index} className="whatido-card">
              <GradientIcon type={item.icon} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* ================= EXPERIENCE ================= */}
      <section
        className="section hidden"
        ref={(el) => (sectionsRef.current[3] = el)}
      >
        <h1 className="section-heading">Experience</h1>
          <div className="exp-card">

            <h2 className="exp-title">Web Developer Intern</h2>

            <div className="sub-info">
              <span className="info-item">
                <FaBriefcase className="icon" />
                Alekhan Infotech Solution Pvt. Ltd.
              </span>

              <span className="info-item">
                <FaMapMarkerAlt className="icon" />
                Surat
              </span>
            </div>

            <span className="badge">Past</span>

            <ul className="points">
              <li><FaCaretRight /> Developing Society Management System using ASP.NET and C#</li>
              <li><FaCaretRight /> Implementing user management, notices, and polling modules</li>
              <li><FaCaretRight /> Working with SQL Server for database design and optimization</li>
              <li><FaCaretRight /> Building responsive UI components with Bootstrap and JavaScript</li>
              <li><FaCaretRight /> Collaborating with team on full-stack development projects</li>
            </ul>

          </div>
      </section>
    {/* ================= WHY HIRE ME ================= */}
      <section className="section">
        <h1 className="section-heading">Why Hire Me?</h1>

        <div className="whyme-container">
          <div className="whyme-card">
            <h3>Clean & Scalable Code</h3>
            <p>
              I write well-structured, maintainable, and scalable code that follows
              best practices and industry standards.
            </p>
          </div>

          <div className="whyme-card">
            <h3>Strong Problem Solving</h3>
            <p>
              I enjoy solving real-world problems using DSA and logical thinking to
              build efficient and optimized solutions.
            </p>
          </div>

          <div className="whyme-card">
            <h3>Fast Learner & Team Player</h3>
            <p>
              I adapt quickly to new technologies and work effectively in teams with
              strong communication and collaboration skills.
            </p>
          </div>
        </div>
      </section>
    {/* ================= CONTACT ================= */}
      <section
        // className="section "
        // ref={(el) => (sectionsRef.current[4] = el)}
      >
        {/* <h1 className="section-heading">Contact Me</h1> */}

        {/* <div className="contact-container"> */}
          {/* Left Info */}
          {/* <div className="contact-info"> */}
            {/* <h3>Let's work together</h3> */}
            {/* <p> */}
              {/* I'm open to internships, freelance projects, and full-time opportunities. */}
              {/* Feel free to reach out anytime. */}
            {/* </p> */}

            {/* <div className="contact-details"> */}
              {/* <p><FaEnvelope /> harshgilitwala7@gmail.com</p> */}
              {/* <p><FaPhoneAlt /> +91 88498 60553</p> */}
              {/* <p><MdLocationOn /> Surat, Gujarat, India</p> */}
            {/* </div> */}
          {/* </div> */}

          {/* Right Form */}
          {/* <form className="contact-form"> */}
            {/* <input type="text" placeholder="Your Name" required /> */}
            {/* <input type="email" placeholder="Your Email" required /> */}
            {/* <textarea rows="5" placeholder="Your Message" required></textarea> */}
            {/* <button type="submit" className="cta-button"> */}
              {/* Send Message → */}
            {/* </button> */}
          {/* </form> */}
        {/* </div> */}
      <Contact/>
      </section>
     

    </>
  );
};

export default Home;