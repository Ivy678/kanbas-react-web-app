import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  const [expandedModule, setExpandedModule] = useState(null);

  return (
    <div className="kanbas-module flex-grow-1 mx-md">
      <div className="module-buttons" style={{ flex: 1 }}>
        <div className="wd-flex-grow-1" style={{ flex: 1 }}>
          <span className="kanbas-module-button ml-none cur-pointer">Collapse All</span>
          <span className="kanbas-module-button cur-pointer">View Progress</span>
          <span className="dropdown d-inline-block">
            <div className="kanbas-module-button flex justify-center items-center cur-pointer">
              <span className="iconfont icon-success font-size-md text-green mr-3xs"></span>
              <span className="font-size-md">Publish All</span>
              <span className="iconfont icon-arrow-down-filling"></span>
            </div>

            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Unpublish
                </a>
              </li>
            </ul>
          </span>
          <span className="kanbas-module-button red cur-pointer">
            <span className="iconfont icon-add"></span>
            <span className="font-size-md">Module</span>
          </span>
          <span className="kanbas-module-button small cur-pointer">
            <span className="iconfont icon-more"></span>
          </span>
        </div>
        <div className="clearfix"></div>
      </div>
      <hr />

      <ul className="list-group mx-md">
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <div key={index} className="list-container">
              <div className="list-item-container">
              <span className="iconfont icon-drag font-size-2xl mr-3xs"></span>
              <span className="iconfont icon-arrow-right-filling font-size-md mr-3xs cur-pointer"></span>
                <div className="title">{module.name}</div>
              </div>
              <div className="list-item-container">
                <span className="iconfont icon-success font-size-2xl text-green mr-3xs cur-pointer"></span>
                <span className="iconfont icon-arrow-down-filling font-size-md mx-xs cur-pointer"></span>
                <span className="iconfont icon-add font-size-md mx-md cur-pointer"></span>
                <span className="iconfont icon-more font-size-md mr-3xs cur-pointer"></span>
              </div>
            </div>
          ))}
      </ul>
    </div>
  );
}
export default ModuleList;
