import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Puff } from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./Navbar";
import Footer from "../components/Footer";

function Login() {
  const history = useHistory();

  const [username, setUsername] = useState({});
  const [loading, setLoading] = useState("");
  const [alert, setAlert] = useState(false);
  const [pass, setPassword] = useState({});
  const onUsernameChange = (e) => {
    var em = e.target.value;
    if (em != "") {
      setUsername({ value: em });
    } else {
      setUsername({ value: em, message: "Write your username" });
    }
  };

  const onPassChange = (e) => {
    var em = e.target.value;
    if (em != "") {
      setPassword({ value: em });
    } else {
      setPassword({ value: em, message: "Enter you Password" });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (username.value == null || username.value == "") {
      setUsername({ message: "Write your email" });
    } else if (pass.value == null || pass.value == "") {
      setPassword({ message: "Enter your password" });
    } else {
      const payload = {
        email: username.value,
        password: pass.value,
      };

      try {
        setLoading(true);
        const response = await axios.post(
          "http://127.0.0.1:8000/api/login",
          payload
        );
        console.log(response.data)
        localStorage.setItem("token", response.data);
        toast.success("Login successfully");
        history.push("/dashboard", payload);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.warn(error.response.error);
        history.push("/login", payload);
      }
    }
  };
  return (
    <>
      <div class="container-fluid">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12 bg-light p-4 mt-4 mb-4">
            <h4
              style={{
                color: "red",
              }}
            >
              {alert ? "Username or Password is wrong" : ""}
            </h4>

            <h1 class="text-center pb-3 login-header">Login</h1>

            <form>
              <div class="form-group">
                <label class="text-dark text-bold">Username</label>

                <input
                  type="text"
                  name="username"
                  class="form-control"
                  onChange={onUsernameChange}
                />
                <span class="text-danger">{username.message}</span>
              </div>

              <div class="form-group">
                <label class="text-dark text-bold">Password</label>
                <input
                  type="password"
                  name=""
                  class="form-control"
                  onChange={onPassChange}
                />
                <span class="text-danger">{pass.message}</span>
              </div>
              <div class="form-group">
                <div class="checkbox">
                  <label class="text-dark text-bold">
                    <input type="checkbox" value="" />
                     Remember me
                  </label>
                </div>
              </div>

              {loading ? (
                <button class="btn btn-block  login-btn" type="button" disabled>
                  <span
                    class="spinner-grow spinner-grow-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Loading...
                </button>
              ) : (
                <button
                  class="btn btn-lg btn-block btn-secondary"
                  name="submit"
                  onClick={handleLogin}
                >
                  Login
                </button>
              )}
            </form>
            <div class="footer p-2">
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Login;
