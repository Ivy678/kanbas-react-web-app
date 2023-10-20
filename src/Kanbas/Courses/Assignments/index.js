import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./course.css";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter((assignment) => assignment.course === courseId);
  return (
    <div className="flex-grow-1">
      <div className="flex justify-between items-center">
        <div className="icon-input ml-md">
          <span className="iconfont icon-search font-size-xl cur-pointer"></span>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Search for Assignment" />
          <span className="iconfont icon-arrow-down-filling font-size-xl text-grey cur-pointer"></span>
        </div>
        <div className="flex items-center">
          <div className="custom-button mr-md">
            <span className="iconfont icon-add font-size-xl cur-pointer">Group</span>
          </div>
          <div className="custom-button mr-md bg-red">
            <span className="iconfont icon-add font-size-xl  text-white cur-pointer">Assignment</span>
          </div>
          <div className="custom-button mr-md">
            <span className="iconfont icon-more font-size-xl  cur-pointer"></span>
          </div>
        </div>
      </div>
      <div className="assignments-course mx-md mt-md">
        <div className="assignments-course-header flex items-center  justify-between">
          <div className="flex items-center">
            <span className="iconfont icon-drag font-size-2xl mr-md"></span>
            <span className="iconfont icon-arrow-down-filling mr-md cur-pointer"></span>
            <span>Assignments for course {courseId}</span>
          </div>
          <div className="flex items-center">
            <span className="iconfont icon-add font-size-2xl mr-3xs cur-pointer"></span>
            <span className="iconfont icon-more font-size-md mr-3xs cur-pointer"></span>
          </div>
        </div>
        <div className="">
          {courseAssignments.map((assignment) => (
            <div className="flex items-center list-item full-width  justify-between">
              <div className="flex items-center">
                <span className="iconfont icon-drag font-size-2xl mr-md"></span>
                <span className="iconfont icon-edit text-green font-size-2xl mr-md cur-pointer"></span>
                <Link key={assignment._id} to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                  {assignment.title}
                </Link>
              </div>
              <div className="flex items-center">
                <span className="iconfont icon-success font-size-2xl text-green mr-3xs cur-pointer"></span>
                <span className="iconfont icon-more font-size-md mr-3xs cur-pointer"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Assignments;
