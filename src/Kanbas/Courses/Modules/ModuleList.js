import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";

import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";

import * as client from "./client";
import { findModulesForCourse, createModule } from "./client";


function ModuleList() {

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };


  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };


  const { courseId } = useParams();
  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);



  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  const [expandedModule, setExpandedModule] = useState(null);

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  

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
        
        <li className="list-group-item d-flex align-items-center">
          <div className="flex-grow-1">
            <div className="mb-2">
              <input value={module.name}
                onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
              />
            </div>
            <div>
              <textarea value={module.description}
                onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))
              }
              />
            </div>
          </div>

          <div>
            <button className="btn btn-success" onClick={handleAddModule}>Add</button>
            <button className="btn btn-primary" onClick={handleUpdateModule}>
                  Update
            </button>
          </div>
        </li>
        
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-container">
              <div className="list-item-container d-flex justify-content-between align-items-center w-100">
                <div className="d-flex align-items-center">
                  <span className="iconfont icon-drag font-size-2xl mr-3xs"></span>
                  <span className="iconfont icon-arrow-right-filling font-size-md mr-3xs cur-pointer"></span>
                  <div className="title ml-2">{module.name}</div>
                </div>
                <div className="d-flex align-items-center">
                  <button className="btn btn-success" onClick={() => dispatch(setModule(module))}>Edit</button>
                  <button className="btn btn-danger ml-2" onClick={() => handleDeleteModule(module._id)}>Delete</button>
                </div>
              </div>
              <div className="list-item-container">
                <span className="iconfont icon-success font-size-2xl text-green mr-3xs cur-pointer"></span>
                <span className="iconfont icon-arrow-down-filling font-size-md mx-xs cur-pointer"></span>
                <span className="iconfont icon-add font-size-md mx-md cur-pointer"></span>
                <span className="iconfont icon-more font-size-md mr-3xs cur-pointer"></span>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default ModuleList;
