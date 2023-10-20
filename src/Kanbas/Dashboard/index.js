import db from "../Database";
import { Link } from "react-router-dom";
import "./index.css";
import ReactImage from '../../images/react.png';


function Dashboard() {
  const courses = db.courses;

  return (
    <div className="wd-kanbas-dashboard">
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <hr />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {courses.map((course, index) => (
          <div className="col" key={course._id}>
            <div className="card h-100">
              <img 
                src={course.image || ReactImage} 
                className="card-img-top card-color" 
                alt={course.name} 
              />
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <Link to={`/Kanbas/Courses/${course._id}`} className="btn btn-primary">
                  {course.name}
                </Link>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
