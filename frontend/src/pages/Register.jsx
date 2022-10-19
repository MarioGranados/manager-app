import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const { firstName, lastName, email, password, confirmPassword } = formData;

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        firstName,
        lastName,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <h2>Loading</h2>;
  }
  return (
    <div>
      <section>
        <form onSubmit={onSubmit}>
          <div class="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={firstName}
              placeholder="first name"
              onChange={onChange}
            />
            <label for="floatingInput">First Name</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={lastName}
              placeholder="last name"
              onChange={onChange}
            />
            <label for="floatingInput">Last Name</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="email"
              onChange={onChange}
            />
            <label for="floatingInput">Email Address</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="password"
              onChange={onChange}
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="confirm password"
              onChange={onChange}
            />
            <label for="floatingPassword">Confirm Password</label>
          </div>

          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </section>
    </div>
  );
}

export default Register;
