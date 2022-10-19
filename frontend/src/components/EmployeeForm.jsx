import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {createEmployee} from '../features/employees/employeeSlice'

function EmployeeForm() {
    const[text, setText] = useState('')
    const dispatch = useDispatch()


  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createEmployee({text}))
    setText('')
  };
  return (
    <>
      <section>
        <form onSubmit={onSubmit}>
          <div className="row g-3">
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control"
                placeholder="City"
                aria-label="City"
                name="text"
                id='text'
                value={text}
                onChange={e => {setText(e.target.value)}}
              />
            </div>

          </div>
          <button className="btn btn-primary">submit</button>
        </form>
      </section>
    </>
  )
}

export default EmployeeForm;
