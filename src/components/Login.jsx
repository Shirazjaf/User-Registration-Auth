import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  //login starts here

  const handleSubmit = (e) => {
    // Prevent default login behavior

    e.preventDefault();

    const loggeduser = JSON.parse(localStorage.getItem("user")) || [];

    // Check if the user entered "admin" as both email and password

    if (input.email === "admin@gmail.com" && input.password === "admin") {
      localStorage.setItem("loggedin", true);

      navigate("/Admin"); // navigate to the Admin page
    } else {
      // Check if there is a matching user in the local storage

      const userMatch = loggeduser.find(
        (user) => user.email === input.email && user.password === input.password
      );

      //executes condition based on above HOD boolean

      if (userMatch) {
        localStorage.setItem("loggedin", true);
        navigate("/Home"); // navigate to the Home page
      } else {
        alert("Wrong Email or Password");
      }
    }
  };

  return (
    <section className="vh-100">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb05">
                    LOGIN USER
                  </h2>

                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <label htmlFor="formmail" className="form-label">
                        E-mail
                      </label>
                      <input
                        name="email"
                        value={input.email}
                        onChange={(e) =>
                          setInput({
                            ...input,
                            [e.target.name]: e.target.value,
                          })
                        }
                        type="email"
                        id="formmail"
                        className="form-control form-control-lg"
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <label htmlFor="formpass" className="form-label">
                        Password
                      </label>
                      <input
                        name="password"
                        value={input.password}
                        onChange={(e) =>
                          setInput({
                            ...input,
                            [e.target.name]: e.target.value,
                          })
                        }
                        type="password"
                        id="formpass"
                        className="form-control form-control-lg"
                      />
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        className="btn btn-primary btn-block btn-lg gradient-custom-4 text-body text-white"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Not Registered?
                      <a href="/Register" className="fw-bold text-body">
                        <u> Register here</u>
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
