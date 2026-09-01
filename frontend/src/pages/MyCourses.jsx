import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../services/api";

function MyCourses() {

    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchMyCourses = async () => {

            try {

                const response = await fetch(
                    `${API_BASE_URL}/api/my-courses`,
                    {
                        credentials: "include"
                    }
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch my courses");
                }

                const data = await response.json();

                setCourses(data);

            } catch (error) {

                console.error(
                    "Error fetching my courses:",
                    error
                );

            } finally {

                setLoading(false);

            }
        };

        fetchMyCourses();

    }, []);


    if (loading) {
        return <h2>Loading your courses...</h2>;
    }


    return (
        <div className="my-courses-page">

            <h1>My Courses</h1>

            {courses.length === 0 ? (

                <p>
                    You haven't purchased any courses yet.
                </p>

            ) : (

                <div className="course-grid">

                    {courses.map((course) => (

                        <div
                            className="course-card"
                            key={course.courseId}
                        >

                            <h2>
                                {course.courseName}
                            </h2>

                            <p>
                                ₹{course.coursePrice}
                            </p>

                            <Link
                                to={`/course/${course.courseId}`}
                                className="continue-btn"
                            >
                                Continue Learning
                            </Link>

                        </div>

                    ))}

                </div>

            )}

        </div>
    );
}

export default MyCourses;