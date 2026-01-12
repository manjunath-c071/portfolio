import React from "react";
import "./HomePage.css"
import profile from '../../assets/image/profile.png'

const Home = () => {

  return (
    <section className="home">
      <div className="home-left">
        <h4>Hello, it's Me</h4>

        <h1>
          MANJUNATHGOUDA CHANNAPPAGOUDAR
        </h1>

        <h2>
          And I'm a <span>Frontend Developer</span>
        </h2>

        <p>
          I am a Frontend Developer who loves building clean designs and
          interactive websites with HTML, CSS, JavaScript, and React.js.
        </p>

        <div className="social-icons">
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>

        <a className="btn" href="/resume.pdf" download>
          Download Resume
        </a>
      </div>

      <div className="home-right">
        <div className="profile-border">
          <img src={profile} alt="profile" />
        </div>
      </div>
    </section>
  );
};

export default Home;
