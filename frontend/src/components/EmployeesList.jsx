import React from "react";
import { deleteEmployee } from "../features/employees/employeeSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function EmployeesList({ employee }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const editEmployee = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div>{new Date(employee.createdAt).toLocaleString("en-US")}</div>
      <h3>{employee.text}</h3>
      <button
        className="btn btn-danger "
        onClick={(e) => {
          e.preventDefault();
          dispatch(deleteEmployee(employee._id));
          navigate("/");
        }}
      >
        delete
      </button>
      <button className="btn btn-secondary ms-2" onClick={editEmployee}>
        edit
      </button>
    </>
  );
}

export default EmployeesList;
