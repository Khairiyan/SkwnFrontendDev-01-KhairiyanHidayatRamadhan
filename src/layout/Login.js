import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const handleChange = (event) => {
    setLogin({ ...login, [event.target.name]: event.target.value });
    console.log(login);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { username, password } = login;
    console.log(username, password);

    await axios
      .post(`https://fakestoreapi.com/auth/login`, { username, password })
      .then((res) => {
        let token = res.data.token;
        console.log(res.data.token);
        localStorage.setItem("token", token);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return (
    <>
      <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">We will not share your data with anyone, we will guarantee your data security</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input type="text" name="username" placeholder="username" className="input input-bordered" onChange={handleChange} />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" onChange={handleChange} />
              </div>
              <div className="form-control mt-6">
                <button onClick={(event) => handleSubmit(event)} className="btn btn-primary bg-[#E5F0B6] border-none text-[#2F241F] hover:bg-[#aab674] hover:text-white">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
