import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//holding inputs using states
const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  //storing value in local storage
  const handleSubmit = (e) => {
    e.preventDefault();

    //taking existing user from local

    const existingUsers = JSON.parse(localStorage.getItem("user")) || [];

    //duplication check
    const duplicate = existingUsers.some((user) => user.email === input.email);

    if (duplicate) {
      alert("mail id already exists");
    } else {
      const updatedUsers = [...existingUsers, input];

      //update local
      localStorage.setItem("user", JSON.stringify(updatedUsers));
    }

    // localStorage.setItem("user", JSON.stringify(input));
    navigate("/Login");
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
                    Create an account
                  </h2>

                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <label htmlFor="formname" className="form-label">
                        Username
                      </label>
                      <input
                        name="name"
                        value={input.name}
                        onChange={(e) =>
                          setInput({
                            ...input,
                            [e.target.name]: e.target.value,
                          })
                        }
                        type="text"
                        id="formname"
                        className="form-control form-control-lg"
                      />
                    </div>
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
                        Register
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Already have any account?
                      <a href="/Login" className="fw-bold text-body">
                        <u>Login here</u>
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

export default Register;
