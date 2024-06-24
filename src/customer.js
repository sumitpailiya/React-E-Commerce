import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Customer() {
  const [user, setuser] = useState([]);
  const [y, sety] = useState("");
  const [c, setc] = useState([]);

  const sortuser = (list) => {
    let z = user.sort((a, b) => {
      if (list === "dsc") {
        return b.age - a.age;
      } else if (list === "asc") {
        return a.age - b.age;
      } else {
      }
    });
    //  list === "dsc" ? a.age - b.age : b.age - a.age

    //console.log(z)
    setuser(z);
    sety(list);
  };
  
  const resetBtn = () => {
    fetch("http://dummyjson.com/users")
      .then((res) => res.json())
      .then((d) => setc(d.users));
    setuser(c);
  };
  // console.log(user);
  // console.log("hii");
  useEffect(() => {
    fetch("http://dummyjson.com/users")
      .then((res) => res.json())
      .then((d) => {
        setuser(d.users);
        setc(d.users);
      });
  }, []);
  return (
    <>
      <div className="container">
        <h2>hello word </h2>
        <div className="m-5">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-sm btn-light dropdown-toggle"
              data-toggle="dropdown"
            >
              Sorting
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <a
                onClick={() => sortuser("dsc")}
                className="dropdown-item"
                href="#"
              >
                Descending
              </a>
              <a
                onClick={() => sortuser("asc")}
                className="dropdown-item"
                href="#"
              >
                Ascending
              </a>
              <a onClick={() => resetBtn()} className="dropdown-item" href="#">
                Reset{" "}
              </a>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="container">
        <div className="row px-xl-5">
          {user.map((ty) => (
            <div className="col-lg-4 col-md-6 col-sm-6 pb-2">
              <Link to={`/customerDetails/${ty.id}`}>
                {" "}
                <div className="product-item bg-light mb-4">
                  <div className="product-img position-relative overflow-hidden">
                    <img className="img-fluid w-100" src={ty.image} alt="" />
                  </div>
                  <div className="text-center py-4">
                    <Link
                      className="h6 text-decoration-none text-truncate"
                      to={`/customerDetails/${ty.id}`}
                    >
                      <h3>
                        {" "}
                        <span>{ty.firstName} </span>{" "}
                        <span>{ty.maidenName} </span>{" "}
                        <span>{ty.lastName} </span>{" "}
                      </h3>
                    </Link>
                    <div className="mt-2">
                      <h5>
                        Age: <span>{ty.age} </span>
                      </h5>
                      <h5>
                        Gender: <span>{ty.gender} </span>
                      </h5>
                      <h5>
                        DOB: <span>{ty.birthDate} </span>
                      </h5>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Customer;
