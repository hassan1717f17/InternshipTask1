import './About.css'

const About=()=>{
    return(
        <div className="landing-page">
        {/* Header Section */}
        <header className="header">
          <div className="header-content">
            <h2>Any Job is a <span className="highlight">Dream Job</span> With the Right Tools</h2>
            <p>Toggl is a suite of productivity tools that helps teams do their best work.</p>
          </div>
        </header>
  
        {/* Features Section */}
        <section className="features">
          <div className="feature">
            <img src="images.jpeg" alt="Effective" />
            <h3>Effective</h3>
            <p>Automating soul-destroying admin so you can focus your head and heart on what matters.</p>
          </div>
          <div className="feature">
            <img src="images.jpeg" alt="Empowering" />
            <h3>Empowering</h3>
            <p>Think powerful project management, not tyranny.</p>
          </div>
          <div className="feature">
            <img src="images.jpeg" alt="Effortless" />
            <h3>Effortless</h3>
            <p>From learning curves to hiring, tracking is as simple as a few clicks.</p>
          </div>
        </section>
  
        <div className="our-story">
            <div className="our-story-content">
                <h2>Our Motive</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet,
                nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
                </p>
                <p>
                Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
                </p>
            </div>
            <img src="story.jpg" alt="Our Story Image"/>
        </div>

  
       {/* Toggl's Tools Section */}
        <section className="tools">
            <h2>Differentiators</h2>
            <div className="tool-container">
                <div className="tool">
                    <img src="minion.png" alt="Toggl Plan" />
                    <h3>Toggl Plan</h3>
                    <p>Beautifully simple project planning.</p>
                    <button className="discover-btn">Discover</button>
                </div>
                <div className="tool">
                    <img src="minion.png" alt="Toggl Track" />
                    <h3>Toggl Track</h3>
                    <p>Effortless time-tracking.</p>
                    <button className="discover-btn">Discover</button>
                </div>
                <div className="tool">
                    <img src="minion.png" alt="Toggl Hire" />
                    <h3>Toggl Hire</h3>
                    <p>Efficient hiring with skills tests.</p>
                    <button className="discover-btn">Discover</button>
                </div>
            </div>
        </section>


  
        {/* Manifesto Section */}
        <section className="manifesto">
          <h2>Work Smarter, Live Happier</h2>
          <p>
            We’re a fully remote company, with Togglers working from 40+ countries. 
            We help teams work better from anywhere.
          </p>
          <p>
            Toggl Tools Created for teams, by teams who understand what you need to work.
          </p>
        </section>

      </div>
    )
}

export default About