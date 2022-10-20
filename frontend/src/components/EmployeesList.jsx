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
      <div className="row justify-content-between mb-1">
        <div className="col">{employee.name}</div>
        <div className="col">{employee.mon}</div>
        <div className="col">{employee.tues}</div>
        <div className="col">{employee.wed}</div>
        <div className="col">{employee.thurs}</div>
        <div className="col">{employee.fri}</div>
        <div className="col">{employee.sat}</div>
        <div className="col">{employee.sun}</div>
      </div>
      <div className="mb-2">
        <button
          className="btn btn-danger"
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
      </div>
    </>
  );
}

export default EmployeesList;
