import React from "react";
import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
import JsonPre from "../../Labs/a3/JsonPre";
import db from "../Database";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { useState, useEffect } from "react";
import axios from "axios";

function Courses() {
  const { courseId } = useParams();
  const URL = "https://kanbas-node-server-app-rcwd.onrender.com/api/courses";
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };

  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);


  const { pathname } = useLocation();
  const [empty, kanbas, pathCourses, id, screen] = pathname.split("/");
  // const course = courses.find((course) => course._id === courseId);
  return (
    <div className="full-width">
      <div className="flex items-center mx-md">
        <span className="font-size-3xl text-red">Courses {course.name} </span>
        <span className="mx-md text-grey">&gt;</span>
        <span className="font-size-xl">{screen}</span>
      </div>
      <div className="flex">
        <CourseNavigation />
        <div className="flex-grow-1">
          <Routes>
            <Route path="Courses/:courseId/*" element={<Courses />} />
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;
