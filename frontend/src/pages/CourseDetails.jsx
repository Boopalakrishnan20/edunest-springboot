import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../services/api";

function CourseDetails() {

    const { courseId } = useParams();

    const [lessons, setLessons] = useState([]);
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchLessons = async () => {

            try {

                const response = await fetch(
                    `${API_BASE_URL}/api/courses/${courseId}/lessons`,
                    {
                        method: "GET",
                        credentials: "include"
                    }
                );

                if (!response.ok) {

                    const message = await response.text();

                    throw new Error(message);
                }

                const data = await response.json();

                console.log("Lessons:", data);

                setLessons(data);

                // Select first lesson automatically
                if (data.length > 0) {
                    setSelectedLesson(data[0]);
                }

            } catch (error) {

                console.error(
                    "Error fetching lessons:",
                    error
                );

                setError(error.message);

            } finally {

                setLoading(false);
            }
        };

        fetchLessons();

    }, [courseId]);


    // Extract YouTube video ID
    const getYoutubeVideoId = (url) => {

        if (!url) {
            return "";
        }

        const urlObject = new URL(url);

        return urlObject.searchParams.get("v");
    };


    if (loading) {

        return (
            <div className="page-container">
                <h2>Loading lessons...</h2>
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
        <div className="course-details-page">

            <h1>Course Lessons</h1>

            <p>
                Course ID: {courseId}
            </p>


            <div className="learning-container">

                {/* Lesson List */}

                <div className="lesson-list">

                    <h2>Lessons</h2>

                    {lessons.map((lesson) => (

                        <div
                            key={lesson.lessonId}
                            className={
                                selectedLesson?.lessonId === lesson.lessonId
                                    ? "lesson-card active"
                                    : "lesson-card"
                            }
                            onClick={() =>
                                setSelectedLesson(lesson)
                            }
                        >

                            <h3>
                                {lesson.lessonName}
                            </h3>

                            <p>
                                {lesson.topics}
                            </p>

                        </div>

                    ))}

                </div>


                {/* Video Section */}

                <div className="video-section">

                    {selectedLesson ? (

                        <>
                            <h2>
                                {selectedLesson.lessonName}
                            </h2>

                            <p>
                                {selectedLesson.topics}
                            </p>

                            <iframe
                                width="100%"
                                height="450"
                                src={`https://www.youtube.com/embed/${getYoutubeVideoId(selectedLesson.link)}`}
                                title={selectedLesson.lessonName}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            >
                            </iframe>
                        </>

                    ) : (

                        <h2>
                            No lesson available
                        </h2>

                    )}

                </div>

            </div>

        </div>
    );
}

export default CourseDetails;