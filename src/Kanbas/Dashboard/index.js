// import db from "../Database";
import { useParams } from "react-router-dom";
import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import ReactImage from '../../images/react.png';
import axios from "axios";


function Dashboard({courses, course, setCourse, addCourse,
  deleteCourse, updateCourse }) {
  // const [courses, setCourses] = useState(db.courses);
  // const [course, setCourse] = useState({
  //   name: "New Course",      number: "New Number",
  //   startDate: "2023-09-10", endDate: "2023-12-15",
  // });

  // const addNewCourse = () => {
  //   setCourses([...courses,
  //             { ...course,
  //               _id: new Date().getTime() }]);
  // };
  // const deleteCourse = (courseId) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };
  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };
  const navigate = useNavigate();
  const handleGo = (id) => {
    navigate(`/Kanbas/Courses/${id}`)
  }
  

  



  return (
    <div className="wd-kanbas-dashboard mx-md">
      <h1>Dashboard</h1>
      <h5>Course</h5>
      <input value={course.name} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
      <button className="btn btn-success" onClick={addCourse} >
        Add
      </button>
      <button className="btn btn-primary" onClick={updateCourse} >
        Update
      </button>


      <hr />
      <div className="font-size-3xl mb-sm">Published Courses ({courses.length})</div>
      <div className="row row-cols-1 row-cols-md-4">
        {courses.map((course, index) => (
          <div className="col" key={course._id}>
            <div className="card h-100 relative-position">
              <img 
                src={courses.image || ReactImage}  
                className="card-img-top card-color cur-pointer" 
                alt={course.name} 
                onClick={() => handleGo(course._id)}
              />
              <div className="absolute absolute-top-right ma-xs font-size-xl"><span className="iconfont icon-more text-white "></span></div>
              <div className="card-body">
                <h5 className="card-title text-primary cur-pointer" onClick={() => handleGo(course._id)}>{course.name}</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <button className="btn btn-warning"
                  onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                  }}>
                  <span className="iconfont icon-edit cur-pointer font-size-xl text-primary onClick={() => handleGo(course._id)}"></span>
                  Edit
                </button>
                <button className="btn btn-danger"
                  onClick={(event) => {
                    event.preventDefault();
                    deleteCourse(course);
                  }}>
                  Delete
                </button>
                <div>
                  {/* <span className="iconfont icon-edit cur-pointer font-size-xl text-primary onClick={() => handleGo(course._id)}"></span> */}
                </div>
              </div>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
