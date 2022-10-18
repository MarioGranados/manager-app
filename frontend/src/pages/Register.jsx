import React from "react";
import { useState, useEffect } from "react";

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { firstName, lastName, email, password, password2 } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
    }))
  };
  const onSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      <section>
        <form
          action="
            "
        >
          {" "}
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={firstName}
            placeholder="first name"
            onChange={onChange}
          />
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={lastName}
            placeholder="last name"
            onChange={onChange}
          />
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            placeholder="email"
            onChange={onChange}
          />
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={onChange}
          />
          <input
            type="password"
            className="form-control"
            id="password2"
            name="password2"
            value={password2}
            placeholder="password"
            onChange={onChange}
          />
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </section>
    </div>
  );
}

export default Register;
