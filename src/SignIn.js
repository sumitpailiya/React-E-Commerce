import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function SignIn() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  let nav = useNavigate();


  const getLogin = () => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: email,
        password: password,

        expiresInMins: 30,
      }),
    })
      .then((res) => res.json())
      .then((d) => {
        if (d.message === "Invalid credentials") {
          nav("/SignIn");
        } else {
          window.localStorage.setItem("id", d.id)
          window.localStorage.setItem("fName", d.firstName)
          window.localStorage.setItem("lName", d.lastName)
          nav(`/customerDetails/${d.id}`);
         
        }
      });
  };


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 text-black">
            <div className="px-5 ms-xl-4">
              <i
                className="fas fa-crow fa-2x  py-4 mt-xl-4"
                style={{ color: "#709085" }}
              />
            </div>
            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
              <form style={{ width: "23rem" }}>
                <h3 className="fw-normal mt-5 pb-3">Log in</h3>
                <div data-mdb-input-init="" className="form-outline mb-4">
                  <input
                    name="email"
                    type="email"
                    id="form2Example18"
                    className="form-control form-control-lg"
                    onChange={(e) => setemail(e.target.value)}
                  />
                  <label className="form-label" htmlFor="form2Example18">
                    Email address
                  </label>
                </div>
                <div data-mdb-input-init="" className="form-outline mb-4">
                  <input
                    name="password"
                    type="password"
                    id="form2Example28"
                    className="form-control form-control-lg"
                    onChange={(e) => setpassword(e.target.value)}
                  />
                  <label className="form-label" htmlFor="form2Example28">
                    Password
                  </label>
                </div>
                <div className="pt-1 mb-4">
                  <button
                    data-mdb-button-init=""
                    data-mdb-ripple-init=""
                    className="btn btn-info btn-lg btn-block"
                    type="button"
                    onClick={getLogin}
                  >
                    Login
                  </button>
                </div>
                <p className="small mb-5 pb-lg-2">
                  <a className="text-muted" href="#!">
                    Forgot password?
                  </a>
                </p>
                <p>
                  Don't have an account?{" "}
                  <Link to="/SignUp" className="link-info">
                    Register here
                  </Link>
                </p>
              </form>
            </div>
          </div>
          <div className="col-sm-6  d-none d-sm-block">
            <img
              src="https://www.kshopdeals.in/assets/admin/images/eshop_img.jpg"
              alt="Login image"
              style={{
                objectFit: "cover",
                objectPosition: "left",
                width: "700px",
                height: "600px",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
