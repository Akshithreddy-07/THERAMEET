function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <h1>Welcome to TheraMeet</h1>

          <p>
            Connecting you with trusted doctors and mental health
            professionals anytime, anywhere.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="info-section">

        <div className="info-card">
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600"
            alt="Therapy Session"
          />
          <h3>Therapy Sessions</h3>
          <p>
            Talk, heal, and grow with professional guidance
            tailored to your needs.
          </p>
        </div>

        <div className="info-card">
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600"
            alt="Mental Wellness"
          />
          <h3>Mental Wellness</h3>
          <p>
            A healthy mind creates a healthy life.
            Prioritize your well-being.
          </p>
        </div>

        <div className="info-card">
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600"
            alt="Professional Doctors"
          />
          <h3>Professional Doctors</h3>
          <p>
            Get expert advice and support from experienced
            healthcare professionals.
          </p>
        </div>

        <div className="info-card">
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600"
            alt="Support"
          />
          <h3>24/7 Support</h3>
          <p>
            You are never alone. Help and support are always
            within reach.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Home;    