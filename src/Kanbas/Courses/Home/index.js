import ModuleList from "../Modules/ModuleList";
import CourseStatus from "../CourseStatus";
import "./index.css";

function Home() {
  return (
    <div className="flex flex-grow-1">
      <ModuleList />
      <div>
        <h2>Status</h2>
        <CourseStatus />
      </div>
    </div>
  );
}
export default Home;
