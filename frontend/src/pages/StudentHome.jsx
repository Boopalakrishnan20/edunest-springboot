import { Link } from "react-router-dom";

function StudentHome() {
    return (
        <div className="student-dashboard">

            {/* Welcome Section */}

            <section className="dashboard-hero">

                <div>
                    <p className="dashboard-tag">
                        STUDENT DASHBOARD
                    </p>

                    <h1>
                        Welcome back to EduNest! 👋
                    </h1>

                    <p>
                        Continue your learning journey and
                        explore new courses to build your skills.
                    </p>
                </div>

                <div className="dashboard-hero-icon">
                    🎓
                </div>

            </section>


            {/* Quick Actions */}

            <section className="quick-actions">

                <h2>What would you like to do?</h2>

                <div className="action-grid">

                    <Link
                        to="/courses"
                        className="action-card"
                    >
                        <div className="action-icon">
                            📚
                        </div>

                        <div>
                            <h3>Browse Courses</h3>

                            <p>
                                Explore courses and find something
                                new to learn.
                            </p>
                        </div>

                        <span className="action-arrow">
                            →
                        </span>

                    </Link>


                    <Link
                        to="/my-courses"
                        className="action-card"
                    >
                        <div className="action-icon">
                            🎯
                        </div>

                        <div>
                            <h3>My Courses</h3>

                            <p>
                                Continue learning from your
                                purchased courses.
                            </p>
                        </div>

                        <span className="action-arrow">
                            →
                        </span>

                    </Link>

                </div>

            </section>


            {/* Learning Stats */}

            <section className="learning-section">

                <h2>Your Learning</h2>

                <div className="stats-grid">

                    <div className="stat-card">

                        <span className="stat-icon">
                            📚
                        </span>

                        <div>
                            <h3>My Courses</h3>
                            <p>Continue your courses</p>
                        </div>

                    </div>


                    <div className="stat-card">

                        <span className="stat-icon">
                            🎓
                        </span>

                        <div>
                            <h3>Keep Learning</h3>
                            <p>Build your skills every day</p>
                        </div>

                    </div>


                    <div className="stat-card">

                        <span className="stat-icon">
                            🚀
                        </span>

                        <div>
                            <h3>Grow Your Career</h3>
                            <p>Learn skills that matter</p>
                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
}

export default StudentHome;