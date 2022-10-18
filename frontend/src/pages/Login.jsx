import React from "react";
import { useState, useEffect } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
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

          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </form>
      </section>
    </div>
  );
}

export default Login;
