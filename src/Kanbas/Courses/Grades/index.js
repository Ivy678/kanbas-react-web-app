import db from "../../Database";
import { useParams } from "react-router-dom";
import "./index.css";
import { BiFilterAlt } from "react-icons/bi";
import { VscGoToFile } from "react-icons/vsc";
import { VscExport } from "react-icons/vsc";



function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);

  return (
    <div>
      <div class="module-buttons">
        <div class="float-end">
          <button type="button" class="btn btn-light rounded-0 kanbas-button">
          <VscGoToFile className="wd-icon" />  Import
          </button>
          <button type="button" class="btn btn-light rounded-0 kanbas-button">
          <VscExport className="wd-icon" /> Export <i class="fa-solid fa-angle-down"></i>
          </button>
          <button type="button" class="btn btn-light text-dark rounded-0 kanbas-button2">
            <i class="fa-solid fa-gear"></i>
          </button>
        </div>
        <div class="clearfix"></div>
      </div>

      <div class="row">
        <div class="col-6">
          <label for="exampleFormControlInput1" class="form-label" style={{ fontWeight: "bold" }}>
            Student Names
          </label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Search Studetns" />
        </div>

        <div class="col-6">
          <label for="exampleFormControlInput2" class="form-label" style={{ fontWeight: "bold" }}>
            Assignments Name
          </label>
          <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="Search Assignments" />
        </div>
      </div>

      <div>
        <button type="button" class="btn btn-light text-dark rounded-0 kanbas-button2">
        <BiFilterAlt className="wd-icon" /> Apply Filters
        </button>
      </div>

      <div>
        <h1>Grades</h1>
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
                      const grade = db.grades.find(
                        (grade) => grade.student === enrollment.user && grade.assignment === assignment._id
                      );
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