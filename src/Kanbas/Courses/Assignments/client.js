import axios from "axios";
const COURSES_URL = "https://kanbas-node-server-app-rcwd.onrender.com/api/courses";
const ASSIGNMENTS_URL = "https://kanbas-node-server-app-rcwd.onrender.com/api/assignments";


export const createAssignment = async (courseId, assignment) => {
    const response = await axios.post(
      `${COURSES_URL}/${courseId}/assignments`,
      assignment
    );
    return response.data;
  };
  


export const findAssignmentsForCourse = async (courseId) => {
  const response = await axios
    .get(`${COURSES_URL}/${courseId}/assignments`);
  return response.data;
};
