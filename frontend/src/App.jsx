import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import StudentHome from "./pages/StudentHome";
import TrainerHome from "./pages/TrainerHome";
import Courses from "./pages/Courses";
import Purchase from "./pages/Purchase";
import MyCourses from "./pages/MyCourses";
import CourseDetails from "./pages/CourseDetails";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/studentHome" element={<StudentHome />} />

        <Route path="/trainerHome" element={<TrainerHome />} />

        <Route path="/courses" element={<Courses />} />

        <Route path="/purchase" element={<Purchase />} />

        <Route path="/my-courses" element={<MyCourses />} />
        
        <Route path="/course/:courseId" element={<CourseDetails />} />


      </Routes>
    </>
  );
}

export default App;