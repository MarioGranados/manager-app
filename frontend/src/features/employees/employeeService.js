import axios from "axios";

const API_URL = "/api/employees/";

//create new employee
const createEmployee = async (employeeData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, employeeData, config);
  return response.data;
};
//get all employees
const getEmployees = async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(API_URL, config);
    return response.data;
  };

const employeeService = {
  createEmployee,
  getEmployees,
};
export default employeeService;
