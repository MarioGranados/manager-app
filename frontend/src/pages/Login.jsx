import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const { email, password } = formData;

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
    const userData = {
      email,
      password,
    }
    dispatch(login(userData))
  };

  if(isLoading){
    return(<h1>loading...</h1>)
  }
  return (
    <div>
      <section>
        <form onSubmit={onSubmit}>
          <div class="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="email"
              onChange={onChange}
            />{" "}
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="password"
              onChange={onChange}
            />{" "}
            <label for="floatingPassword">Password</label>
          </div>

          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </form>
      </section>
    </div>
  );
}

export default Login;
