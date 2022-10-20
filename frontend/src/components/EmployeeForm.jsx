import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createEmployee } from "../features/employees/employeeSlice";
import { useNavigate } from "react-router-dom";

function EmployeeForm() {
  const [employeeFormData, setEmployeeFormData] = useState({
    name: "",
    mon: "",
    tues: "",
    wed: "",
    thurs: "",
    fri: "",
    sat: "",
    sun: "",
  });
  const { name, mon, tues, wed, thurs, fri, sat, sun } = employeeFormData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const employeeData = {
      name,
      mon,
      tues,
      wed,
      thurs,
      fri,
      sat,
      sun,
    };
    dispatch(createEmployee(employeeData));
    console.log(employeeFormData);
    navigate("/dashboard");
  };

  const daysOfTheWeek = [
    "name",
    "mon",
    "tues",
    "wed",
    "thurs",
    "fri",
    "sat",
    "sun",
  ];
  const div = [];
  daysOfTheWeek.forEach((day) => {
    if (day === "name") {
      div.push(
        <>
          <div className="col">
            <label htmlFor={day}>{day}</label>
            <input
              type="text"
              className="form-control"
              placeholder={day}
              aria-label={day}
              onChange={(e) => {
                setEmployeeFormData((prevState) => ({
                  ...prevState,
                  [e.target.name]: e.target.value,
                }));
              }}
              value={employeeFormData.day}
              name={day}
            />
          </div>
        </>
      );
    } else {
      div.push(
        <>
          <div className="col">
            <label htmlFor={day}>{day}</label>
            <input
              type="time"
              className="form-control"
              placeholder={day}
              aria-label={day}
              onChange={(e) => {
                setEmployeeFormData((prevState) => ({
                  ...prevState,
                  [e.target.name]: e.target.value,
                }));
              }}
              value={employeeFormData.day}
              name={day}
            />
          </div>
        </>
      );
    }
  });

  return (
    <>
      <section>
        <form onSubmit={onSubmit}>
          <div className="row">{div}</div>
          <div className="my-4">
            <button className="btn btn-primary">submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default EmployeeForm;
