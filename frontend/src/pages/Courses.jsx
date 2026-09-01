import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../services/api";

function Courses() {

    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchCourses = async () => {

            try {

                const response = await fetch(
                    `${API_BASE_URL}/api/courses`,
                    {
                        method: "GET",
                        credentials: "include"
                    }
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch courses");
                }

                const data = await response.json();

                setCourses(data);

            } catch (error) {

                console.error("Course fetch error:", error);

                setError("Unable to load courses.");

            } finally {

                setLoading(false);
            }
        };

        fetchCourses();

    }, []);

    if (loading) {
        return (
            <div className="page-container">
                <h2>Loading courses...</h2>
            </div>
        );
    }

    if (error) {
        return (
            <div className="page-container">
                <h2>{error}</h2>
            </div>
        );
    }

    return (
        <div className="courses-page">

            <div className="courses-header">

                <p className="dashboard-tag">
                    EXPLORE
                </p>

                <h1>Explore Our Courses</h1>

                <p>
                    Discover courses and start building
                    valuable skills.
                </p>

            </div>


            {courses.length === 0 ? (

                <div className="empty-courses">
                    <h2>No courses available</h2>

                    <p>
                        Check back later for new courses.
                    </p>
                </div>

            ) : (

                <div className="course-grid">

                    {courses.map((course) => (

                        <div
                            className="course-card"
                            key={course.courseId}
                        >

                            <div className="course-icon">
                                📚
                            </div>

                            <div className="course-content">

                                <h2>
                                    {course.courseName}
                                </h2>

                                <p>
                                    Learn and improve your
                                    skills with this course.
                                </p>

                                <div className="course-footer">

                                    <span className="course-price">
                                        ₹{course.coursePrice}
                                    </span>

                                    <Link
                                        to={`/purchase?courseId=${course.courseId}`}
                                        className="course-btn"
                                    >
                                        View Course
                                    </Link>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>
    );
}

export default Courses;