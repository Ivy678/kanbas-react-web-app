import db from "../Database";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import ReactImage from '../../images/react.png';


function Dashboard() {
  const courses = db.courses;
  const navigate = useNavigate();
  const handleGo = (id) => {
    navigate(`/Kanbas/Courses/${id}`)
  }

  return (
    <div className="wd-kanbas-dashboard mx-md">
      <h1>Dashboard</h1>
      <hr />
      <div className="font-size-3xl mb-sm">Published Courses ({courses.length})</div>
      <div className="row row-cols-1 row-cols-md-3">
        {courses.map((course, index) => (
          <div className="col" key={course._id}>
            <div className="card h-100 relative-position">
              <img 
                src={course.image || ReactImage} 
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
                <div>
                  <span className="iconfont icon-edit cur-pointer font-size-xl text-primary onClick={() => handleGo(course._id)}"></span>
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
