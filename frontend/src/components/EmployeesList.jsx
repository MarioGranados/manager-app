import React from "react";
import { useDispatch } from "react-redux";
import {deleteEmployee} from '../features/employees/employeeSlice'
function EmployeesList({employee}) {
  const dispatch = useDispatch();
  return (
    <>
      <div>{new Date(employee.createdAt).toLocaleString("en-US")}</div>
      <h3>{employee.text}</h3>

    </>
  );
}

export default EmployeesList;
