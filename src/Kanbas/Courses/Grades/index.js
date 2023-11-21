import db from "../../Database";
import { useParams } from "react-router-dom";
import "./index.css";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);

  return (
    <div className="flex-grow-1 mx-md">
      <div className="module-buttons">
        <div className="float-end">
          <div className="custom-button  mr-md ">
            <span className="iconfont icon-import1 font-size-xl cur-pointer">Export</span>
          </div>
          <div className="custom-button  mr-md ">
            <span className="iconfont icon-export font-size-xl cur-pointer">Import</span>
          </div>
          <div className="custom-button  mr-md ">
            <span className="iconfont icon-setting-filling font-size-xl cur-pointer"></span>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>

      <div className="row mb-sm">
        <div className="col-6">
          <label for="exampleFormControlInput1" className="form-label" style={{ fontWeight: "bold" }}>
            Student Names
          </label>
          <div className="icon-input">
            <span className="iconfont icon-search font-size-xl cur-pointer"></span>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Search Studetns" />
            <span className="iconfont icon-arrow-down-filling font-size-xl text-grey cur-pointer"></span>
          </div>
        </div>

        <div className="col-6">
          <label for="exampleFormControlInput2" className="form-label" style={{ fontWeight: "bold" }}>
            Assignments Name
          </label>
          <div className="icon-input">
            <span className="iconfont icon-search font-size-xl cur-pointer"></span>
            <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Search Assignments" />
            <span className="iconfont icon-arrow-down-filling font-size-xl text-grey cur-pointer"></span>
          </div>
        </div>
      </div>

      <div className="custom-button">
        <span className="iconfont icon-filter font-size-xl cur-pointer ">Apply Filters</span>
      </div>

      <div>
        <div className="font-size-3xl mt-md">Grades</div>
        <div className="table-responsive">
          <table className="table border-table">
            <thead>
              <tr>
                <th>Student Name</th>
                {assignments.map((assignment) => (
                  <th key={assignment._id}>{assignment.title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {enrollments.map((enrollment) => {
                const user = db.users.find((user) => user._id === enrollment.user);
                return (
                  <tr key={enrollment._id}>
                    <td>
                      {user.firstName} {user.lastName}
                    </td>
                    {assignments.map((assignment) => {
                      const grade = db.grades.find((grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                      return <td key={assignment._id}>{grade?.grade || ""}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Grades;
