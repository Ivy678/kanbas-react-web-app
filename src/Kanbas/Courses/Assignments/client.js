import axios from "axios";
const COURSES_URL = "http://localhost:4000/api/courses";
export const findAssignmentsForCourse = async (courseId) => {
  const response = await axios
    .get(`${COURSES_URL}/${courseId}/assingments`);
  return response.data;
};
