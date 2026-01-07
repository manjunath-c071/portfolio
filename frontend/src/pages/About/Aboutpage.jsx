import "./Aboutpage.css"


export default function AboutPage() {
    return (
        <>
          <section className="home">
      <div className="home-container">
        
        {/* Image Section */}
        <div className="home-image">
          <div className="hexagon">
            <img src={profile} alt="Manjunathgouda" />
          </div>
        </div>

        {/* Content Section */}
        <div className="home-content">
          <h2>
            About <span>Me</span>
          </h2>
          <h3>Frontend Developer</h3>

          <p>
            I am Manjunathgouda Channappagoudar, a passionate Frontend Developer
            from Bengaluru with strong expertise in HTML, CSS, JavaScript, and
            React.js. I focus on creating clean, responsive, and engaging user
            interfaces.
          </p>

          <button className="btn">Read More</button>
        </div>

      </div>
    </section>

        </>
    )
}