import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {createEmployee} from '../features/employees/employeeSlice'

function EmployeeForm() {
    const[text, setText] = useState('')
    const dispatch = useDispatch()


  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createEmployee())
    setText('')

  };
  return (
    <>
      <section>
        <form onSubmit={onSubmit}>
          <div class="row g-3">
            <div class="col-sm-7">
              <input
                type="text"
                class="form-control"
                placeholder="City"
                aria-label="City"
                name="text"
                id='text'
                value={text}
                onChange={e => {setText(e.target.value)}}
              />
            </div>
            {/* <div class="col-sm">
              <input
                type="text"
                class="form-control"
                placeholder="State"
                aria-label="State"
              />
            </div>
            <div class="col-sm">
              <input
                type="text"
                class="form-control"
                placeholder="Zip"
                aria-label="Zip"
              />
            </div> */}
          </div>
          <button className="btn btn-primary">submit</button>
        </form>
      </section>
    </>
  );
}

export default EmployeeForm;
