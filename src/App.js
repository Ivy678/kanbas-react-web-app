import logo from './logo.svg';
// import './App.css';
import Labs from './Labs';
import Kanbas from './Kanbas';
import HelloWorld from './Labs/a3/HelloWorld';
import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Project from './Project';


function App() {
  return (
    <HashRouter>
      <div>
        {/* <h1>React Labs</h1>
        <Link to="/HelloWorld">Hello World</Link><br />
        <Link to="/Labs">Labs</Link><br />
        <Link to="/Kanbas">Kanbas</Link><br /> */}
        <Routes>
          <Route path="/"         element={<Navigate to="/Labs"/>}/>
          <Route path="/Labs/*"   element={<Labs/>}/>
          <Route path="/hello"    element={<HelloWorld/>}/>
          <Route path="/kanbas/*" element={<Kanbas/>}/>
          <Route path="/project/*" element={<Project />} />
        </Routes>
        {/* <HelloWorld />
        <Labs />
        <Kanbas /> */}
      </div>
  </HashRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    

  );
}

export default App;
