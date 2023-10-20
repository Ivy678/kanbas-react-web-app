import ModuleList from "../Modules/ModuleList";
import CourseStatus from "../CourseStatus";
import "./index.css";


function Home() {
  return (
    <div className="row">
        <div className="col-10">
            
            <ModuleList />
        </div>
        <div className="col-2">
            <h2>Status</h2>
            <CourseStatus />
        </div>
    </div>
  );
}
export default Home;