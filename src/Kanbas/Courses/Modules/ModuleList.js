import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  const [expandedModule, setExpandedModule] = useState(null);

  return (
    <div className="kanbas-module">
      <div className="module-buttons" style={{flex:1}}>
        <div className="wd-flex-grow-1" style={{flex:1}}>
          <button type="button" className="btn btn-light text-dark rounded-0 wd-kannbas-assignment-button">Collapse All</button>
          <button type="button" className="btn btn-light text-dark rounded-0 wd-kannbas-assignment-button">View Progress</button>
          <div className="dropdown d-inline-block">
            <button className="btn btn-light dropdown-toggle text-dark rounded-0 wd-kannbas-assignment-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fa-regular fa-circle-check" style={{ color: 'green' }}></i> Publish All
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Unpublish</a></li>
            </ul>
          </div>
          <button type="button" className="btn btn-danger rounded-0 wd-kannbas-assignment-button"><i className="fa-solid fa-plus"></i> Module</button>
          <button type="button" className="btn btn-light text-dark rounded-0 wd-kannbas-assignment-button2"><i className="fa-solid fa-ellipsis-vertical"></i></button>
        </div>
        <div className="clearfix"></div> 
      </div>
      <hr />

      <ul className="list-group">
        {
          modules
           .filter((module) => module.course === courseId)
           .map((module, index) => (
             <li key={index} className="list-group-item">
               <h3 onClick={() => setExpandedModule(module.id)}>
                 {module.name}
               </h3>
               
               {/* Conditionally render module details based on expandedModule state */}
               {expandedModule === module.id && (
                 <>
                   <p>{module.description}</p>
                   {
                      module.lessons && (
                          <ul className="list-group">
                              {
                                  module.lessons.map((lesson, index) => (
                                      <li key={index} className="list-group-item">
                                          <h4>{lesson.name}</h4>
                                          <p>{lesson.description}</p>
                                      </li>
                                  ))
                              }
                          </ul>
                      )
                   }
                 </>
               )}
             </li>
          ))
        }
      </ul>
    </div>
  );
}
export default ModuleList;





