import { useEffect, useState } from "react";
import { API_BASE_URL } from "../services/api";

function TrainerHome() {

    // =========================
    // ADD COURSE STATES
    // =========================

    const [courseId, setCourseId] = useState("");
    const [courseName, setCourseName] = useState("");
    const [coursePrice, setCoursePrice] = useState("");

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");


    // =========================
    // ADD LESSON STATES
    // =========================

    const [courses, setCourses] = useState([]);

    const [lessonCourseId, setLessonCourseId] = useState("");
    const [lessonId, setLessonId] = useState("");
    const [lessonName, setLessonName] = useState("");
    const [topics, setTopics] = useState("");
    const [link, setLink] = useState("");

    const [lessonMessage, setLessonMessage] = useState("");
    const [lessonError, setLessonError] = useState("");


    // =========================
    // FETCH COURSES
    // =========================

    useEffect(() => {

        const fetchCourses = async () => {

            try {

                const response = await fetch(
                    `${API_BASE_URL}/api/courses`,
                    {
                        credentials: "include"
                    }
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch courses");
                }

                const data = await response.json();

                setCourses(data);

            } catch (error) {

                console.error(
                    "Error fetching courses:",
                    error
                );

            }
        };

        fetchCourses();

    }, []);


    // =========================
    // ADD COURSE
    // =========================

    const handleAddCourse = async (e) => {

        e.preventDefault();

        setMessage("");
        setError("");

        try {

            const response = await fetch(
                `${API_BASE_URL}/addCourse`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/x-www-form-urlencoded"
                    },

                    credentials: "include",

                    body: new URLSearchParams({
                        courseId: courseId,
                        courseName: courseName,
                        coursePrice: coursePrice
                    })
                }
            );

            if (!response.ok) {
                throw new Error("Failed to add course");
            }

            const result = await response.text();

            console.log("Add course result:", result);

            setMessage("Course added successfully!");

            setCourseId("");
            setCourseName("");
            setCoursePrice("");

            // Refresh course list
            const coursesResponse = await fetch(
                `${API_BASE_URL}/api/courses`,
                {
                    credentials: "include"
                }
            );

            const updatedCourses =
                await coursesResponse.json();

            setCourses(updatedCourses);

        } catch (error) {

            console.error(
                "Add course error:",
                error
            );

            setError("Unable to add course.");
        }
    };


    // =========================
    // ADD LESSON
    // =========================

    const handleAddLesson = async (e) => {

        e.preventDefault();

        setLessonMessage("");
        setLessonError("");

        try {

            const response = await fetch(
                `${API_BASE_URL}/lesson`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/x-www-form-urlencoded"
                    },

                    credentials: "include",

                    body: new URLSearchParams({
                        courseId: lessonCourseId,
                        lessonId: lessonId,
                        lessonName: lessonName,
                        topics: topics,
                        link: link
                    })
                }
            );

            if (!response.ok) {
                throw new Error("Failed to add lesson");
            }

            const result = await response.text();

            console.log(
                "Add lesson result:",
                result
            );

            setLessonMessage(
                "Lesson added successfully!"
            );

            // Clear form

            setLessonCourseId("");
            setLessonId("");
            setLessonName("");
            setTopics("");
            setLink("");

        } catch (error) {

            console.error(
                "Add lesson error:",
                error
            );

            setLessonError(
                "Unable to add lesson."
            );
        }
    };


    // =========================
    // UI
    // =========================

    return (
        <div className="trainer-dashboard">

            <div className="trainer-header">

                <h1>
                    Welcome to EduNest 🎓
                </h1>

                <p>
                    You are logged in as a Trainer.
                </p>

            </div>


            {/* =========================
                ADD COURSE
            ========================= */}

            <div className="trainer-card">

                <h2>
                    Add New Course
                </h2>

                <form onSubmit={handleAddCourse}>

                    <div className="form-group">

                        <label>
                            Course ID
                        </label>

                        <input
                            type="number"
                            value={courseId}
                            onChange={(e) =>
                                setCourseId(e.target.value)
                            }
                            placeholder="Enter course ID"
                            required
                        />

                    </div>


                    <div className="form-group">

                        <label>
                            Course Name
                        </label>

                        <input
                            type="text"
                            value={courseName}
                            onChange={(e) =>
                                setCourseName(e.target.value)
                            }
                            placeholder="Enter course name"
                            required
                        />

                    </div>


                    <div className="form-group">

                        <label>
                            Course Price
                        </label>

                        <input
                            type="number"
                            value={coursePrice}
                            onChange={(e) =>
                                setCoursePrice(e.target.value)
                            }
                            placeholder="Enter course price"
                            required
                        />

                    </div>


                    <button
                        type="submit"
                        className="trainer-btn"
                    >
                        ➕ Add Course
                    </button>

                </form>


                {message && (
                    <p className="success-message">
                        {message}
                    </p>
                )}


                {error && (
                    <p className="error-message">
                        {error}
                    </p>
                )}

            </div>


            {/* =========================
                ADD LESSON
            ========================= */}

            <div className="trainer-card">

                <h2>
                    Add New Lesson
                </h2>

                <form onSubmit={handleAddLesson}>

                    {/* COURSE */}

                    <div className="form-group">

                        <label>
                            Select Course
                        </label>

                        <select
                            value={lessonCourseId}
                            onChange={(e) =>
                                setLessonCourseId(e.target.value)
                            }
                            required
                        >

                            <option value="">
                                -- Select Course --
                            </option>

                            {courses.map((course) => (

                                <option
                                    key={course.courseId}
                                    value={course.courseId}
                                >
                                    {course.courseName}
                                </option>

                            ))}

                        </select>

                    </div>


                    {/* LESSON ID */}

                    <div className="form-group">

                        <label>
                            Lesson ID
                        </label>

                        <input
                            type="number"
                            value={lessonId}
                            onChange={(e) =>
                                setLessonId(e.target.value)
                            }
                            placeholder="Enter lesson ID"
                            required
                        />

                    </div>


                    {/* LESSON NAME */}

                    <div className="form-group">

                        <label>
                            Lesson Name
                        </label>

                        <input
                            type="text"
                            value={lessonName}
                            onChange={(e) =>
                                setLessonName(e.target.value)
                            }
                            placeholder="Enter lesson name"
                            required
                        />

                    </div>


                    {/* TOPICS */}

                    <div className="form-group">

                        <label>
                            Topics
                        </label>

                        <input
                            type="text"
                            value={topics}
                            onChange={(e) =>
                                setTopics(e.target.value)
                            }
                            placeholder="Enter lesson topics"
                            required
                        />

                    </div>


                    {/* YOUTUBE LINK */}

                    <div className="form-group">

                        <label>
                            YouTube Link
                        </label>

                        <input
                            type="text"
                            value={link}
                            onChange={(e) =>
                                setLink(e.target.value)
                            }
                            placeholder="https://www.youtube.com/watch?v=..."
                            required
                        />

                    </div>


                    <button
                        type="submit"
                        className="trainer-btn"
                    >
                        🎥 Add Lesson
                    </button>

                </form>


                {lessonMessage && (
                    <p className="success-message">
                        {lessonMessage}
                    </p>
                )}


                {lessonError && (
                    <p className="error-message">
                        {lessonError}
                    </p>
                )}

            </div>

        </div>
    );
}

export default TrainerHome;