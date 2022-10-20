import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createEmployee } from "../features/employees/employeeSlice";
import { useNavigate } from "react-router-dom";

function EmployeeForm() {
  const [text, setText] = useState("");
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
    console.log(employeeFormData);
    // dispatch(createEmployee({ text }));
    // setText("");
    // navigate("/");
  };

  const daysOfTheWeek = [
    "Employee Name",
    "Mon",
    "Tues",
    "Wed",
    "Thurs",
    "Fri",
    "Sat",
    "Sun",
  ];
  const div = [];
  daysOfTheWeek.forEach((day) => {
    if (day === "name") {
      div.push(
        <>
          <div class="col">
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
          <div class="col">
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

          <button className="btn btn-primary">submit</button>
        </form>
      </section>
    </>
  );
}

export default EmployeeForm;
