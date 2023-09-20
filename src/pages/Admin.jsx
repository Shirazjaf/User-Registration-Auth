import React from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  // store data in userData and map in code
  const userData = JSON.parse(localStorage.getItem("user"));
  console.log(userData);

  //handle logout
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("loggedin");

    navigate("/");
  };

  return (
    <div>
      <section className="vh-100">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-start mt-4 h-100">
              <div className="col-12 col-md-9 col lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb05">
                      Administrator
                    </h2>
                    <ul className="text-center list-unstyled d-flex justify-content-around flex-wrap">
                      <li className="mt-4 text-primary">
                        {userData.map((user, index) => (
                          <li key={index}>Username: {user.name}</li>
                        ))}
                      </li>
                      <li className="mt-4 text-success">
                        {userData.map((user) => (
                          <li>Email: {user.email} </li>
                        ))}
                      </li>
                    </ul>

                    <div className="d-flex justify-content-center">
                      <button
                        onClick={handleLogout}
                        className="btn btn-danger btn-block btn-lg gradient-custom-4 text-body text-white"
                        type="submit"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admin;
