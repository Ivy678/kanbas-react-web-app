import {Link, useLocation} from "react-router-dom";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import Assignment5 from "./a5";
import { Route, Routes } from "react-router-dom";
import Nav from "../Nav";
import { Navigate } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";


function Labs() {
    const {pathname}=useLocation();
  return (
    <Provider store={store}>
    <div className="container">
        <Nav/>
        {/* <div className="nav nav-pills">
            <Link to="/hello">Hello</Link> |
            <Link to="/Labs/a3">A3</Link> |
            <Link to="/Kanbas">Kanbas</Link>
        </div> */}
      <h1>Labs</h1>
      {/* <div className="nav nav-pills">
        <link to="/Labs/a3" className='nav-link ${pathname.includes("a3")?"active":""}'>Assignment 3</link>
        
        <link to="/Labs/a4" className='nav-link ${pathname.includes("a4")?"active":""}'>Assignment4</link>
        
        <link to="/Labs/a5" className='nav-link ${pathname.includes("a5")?"active":""}'>Assignment5</link>
        
      </div> */}
      <Routes>
        <Route path="/" element={<Navigate to="/Labs/a4"/>}/>
        <Route path="/a3/*" element={<Assignment3/>}/>
        <Route path="/a4/" element={<Assignment4/>}/>
        <Route path="/a5/*" element={<Assignment5/>}/>
      </Routes>
      {/* <Assignment3 />
      <Assignment4 />
      <Assignment5 /> */}
    </div>
    </Provider>
  );
}

export default Labs;