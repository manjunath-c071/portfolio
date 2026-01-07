import React from "react";
import "./PortfolioPage.css";

const projects = [
  {
    title: "Spotify Clone",
    desc: "Created a Spotify-inspired UI using HTML and CSS with a clean layout, sidebar navigation, and responsive design.",
    image: "images/spotify/spotify.png",
    link: "https://manjuspotify.netlify.app/",
  },
  {
    title: "Students Registration",
    desc: "Student registration system with form validation and responsive UI design.",
    image: "images/student_reg/students_registration.png",
    link: "https://manjunath-c071.github.io/Student_Registration/",
  },
  {
    title: "Calculator",
    desc: "Modern calculator UI with clean design and smooth interactions.",
    image: "/images/calculator/calculator.png",
    link: "#",
  },
  {
    title: "Doctor Appointment Booking",
    desc: "Healthcare booking application for scheduling doctor appointments.",
    image: "/images/doctor_appointment/Doctor_appointment.png",
    link: "https://doctorapointment.netlify.app/",
  },
  {
    title: "portfolio Website",
    desc: "Personal portfolio website showcasing projects and skills with responsive design.",
    image: "/images/portfolio/Portfolio.png",
    link: "https://manjunath-c071.github.io/",
  },
];

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="portfolio-title">
        Latest <span>Projects</span>
      </h2>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="portfolio-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="portfolio-overlay">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <a href={project.link} target="_blank" rel="noreferrer">
                ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
