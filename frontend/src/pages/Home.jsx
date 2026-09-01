

function Home() {
    return (
        <main className="home">

            <section className="hero">

                <div className="hero-content">
                    <p className="hero-tag">LEARN • GROW • ACHIEVE</p>

                    <h1>
                        Build Your Future
                        <br />
                        With <span>EduNest</span>
                    </h1>

                    <p className="hero-description">
                        Learn industry-relevant skills through structured
                        courses and practical lessons designed to help you
                        grow your career.
                    </p>

                    <div className="hero-buttons">
                        <button className="primary-btn">
                            Explore Courses
                        </button>

                        <button className="secondary-btn">
                            Get Started
                        </button>
                    </div>
                </div>

                <div className="hero-card">

                    <div className="floating-card">
                        <span className="card-icon">🎓</span>
                        <div>
                            <strong>Learn Anything</strong>
                            <p>Grow your skills</p>
                        </div>
                    </div>

                    <div className="learning-circle">
                        <span>Edu</span>
                        <strong>Nest</strong>
                    </div>

                </div>

            </section>

            <section className="features">

                <div className="feature-card">
                    <span>📚</span>
                    <h3>Quality Courses</h3>
                    <p>
                        Learn from structured and well-organized courses.
                    </p>
                </div>

                <div className="feature-card">
                    <span>🎯</span>
                    <h3>Learn at Your Pace</h3>
                    <p>
                        Access lessons and continue learning whenever you want.
                    </p>
                </div>

                <div className="feature-card">
                    <span>🚀</span>
                    <h3>Build Your Career</h3>
                    <p>
                        Develop practical skills that help you move forward.
                    </p>
                </div>

            </section>

        </main>
    );
}

export default Home;



