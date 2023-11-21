import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { VscMail } from "react-icons/vsc";
import { VscHistory } from "react-icons/vsc";
import { VscVmConnect } from "react-icons/vsc";
import { VscReferences } from "react-icons/vsc";
import { VscThumbsup } from "react-icons/vsc";
import { FaNeos } from "react-icons/fa";
import "./index.css";
function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];

  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon" />,
    Dashboard: <RiDashboard3Fill className="wd-icon" />,
    Courses: <FaBook className="wd-icon" />,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
    Inbox: <VscMail className="wd-icon" />,
    History: <VscHistory className="wd-icon" />,
    Studio: <VscVmConnect className="wd-icon" />,
    Commons: <VscReferences className="wd-icon" />,
    Help: <VscThumbsup className="wd-icon" />,
    
  };

  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 150}}>
      <Link to="/">
                <FaNeos className="wd-icon" />
      </Link>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {linkToIconMap[link]}
          <br/>
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;