import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../services/api";

function Purchase() {

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const courseId = searchParams.get("courseId");

    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [alreadyPurchased, setAlreadyPurchased] = useState(false);

    useEffect(() => {

        const fetchCourse = async () => {

            try {

                if (!courseId) {
                    throw new Error("Course ID is missing");
                }

                const response = await fetch(
                    `${API_BASE_URL}/api/courses/${courseId}`,
                    {
                        method: "GET",
                        credentials: "include"
                    }
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch course");
                }

                const data = await response.json();

                setCourse(data);

                const purchaseResponse = await fetch(
                    `${API_BASE_URL}/api/courses/${courseId}/purchased`,
                    {
                        method: "GET",
                        credentials: "include"
                    }
                );

                if (purchaseResponse.ok) {
                    const purchased = await purchaseResponse.json();
                    setAlreadyPurchased(purchased);
                }

            } catch (error) {

                console.error("Course fetch error:", error);

                setError("Unable to load course details.");

            } finally {

                setLoading(false);
            }
        };

        fetchCourse();

    }, [courseId]);


    if (loading) {
        return (
            <div className="page-container">
                <h2>Loading course...</h2>
            </div>
        );
    }


    if (error) {
        return (
            <div className="page-container">
                <h2>{error}</h2>

                <button
                    onClick={() => navigate("/courses")}
                    className="course-btn"
                >
                    Back to Courses
                </button>
            </div>
        );
    }

    const handlePayment = async () => {

        if (alreadyPurchased) {
            alert("You have already purchased this course.");
            return;
        }

        try {
            const response = await fetch(
                `${API_BASE_URL}/createOrder?courseId=${course.courseId}`,
                {
                    method: "POST",
                    credentials: "include"
                }
            );

            if (!response.ok) {
                throw new Error("Failed to create Razorpay order");
            }

            const order = await response.json();
            console.log("========== RAZORPAY ORDER ==========");
            console.log("Order object:", order);
            console.log("Order ID:", order.id);
            console.log("Order amount:", order.amount);
            console.log("Order currency:", order.currency);
            console.log("====================================");

            console.log("Razorpay order:", order);

            // Razorpay Checkout configuration
            const options = {
                key: "rzp_test_TPCf7ooYrPDTvv",

                amount: order.amount,

                currency: order.currency,

                name: "EduNest",

                description: course.courseName,

                order_id: order.id,

                handler: async function (paymentResponse) {

                    console.log(
                        "Payment successful:",
                        paymentResponse
                    );

                    console.log(
                        "Payment response JSON:",
                        JSON.stringify(paymentResponse)
                    );

                    try {

                        const verifyResponse = await fetch(
                            `${API_BASE_URL}/verifyPayment`,
                            {
                                method: "POST",

                                headers: {
                                    "Content-Type": "application/json"
                                },

                                credentials: "include",

                                body: JSON.stringify({
                                    razorpay_order_id:
                                        paymentResponse.razorpay_order_id,

                                    razorpay_payment_id:
                                        paymentResponse.razorpay_payment_id,

                                    razorpay_signature:
                                        paymentResponse.razorpay_signature,

                                    courseId: course.courseId
                                })
                            }
                        );

                        const result = await verifyResponse.text();

                        console.log("Verification result:", result);

                        if (!verifyResponse.ok) {
                            throw new Error(result);
                        }

                        if (result.includes("Payment verified successfully")) {
                            alert("Payment successful! Course added to My Courses.");
                            navigate("/my-courses");
                        }

                    } catch (error) {

                        console.error(
                            "Payment verification error:",
                            error
                        );
                    }
                },

                prefill: {
                    name: "EduNest Student",
                    email: "test@example.com"
                },

                theme: {
                    color: "#4f46e5"
                }
            };

            const razorpay = new window.Razorpay(options);

            razorpay.open();

        } catch (error) {

            console.error("Payment error:", error);

            alert("Unable to start payment.");
        }
    };






    return (
        <div className="purchase-page">

            <div className="purchase-card">

                <div className="purchase-icon">
                    📚
                </div>

                <div className="purchase-content">

                    <p className="dashboard-tag">
                        COURSE
                    </p>

                    <h1>
                        {course.courseName}
                    </h1>

                    <p>
                        Start learning this course and
                        improve your skills with EduNest.
                    </p>

                    <div className="purchase-price">
                        ₹{course.coursePrice}
                    </div>

                    <button
                        className="purchase-btn"
                        onClick={handlePayment}
                        disabled={alreadyPurchased}
                    >
                        {alreadyPurchased ? "Already Purchased" : "Buy Now"}
                    </button>

                    <button
                        className="back-btn"
                        onClick={() => navigate("/courses")}
                    >
                        ← Back to Courses
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Purchase;