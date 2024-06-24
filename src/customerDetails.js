import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function CustomerDetails() {
  const [details, setdetails] = useState({});
  let { id } = useParams();
  useEffect(() => {
    fetch(`http://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((d) => setdetails(d));
  }, []);
  console.log(details);
  return (
    <>
      <div className="container-fluid pb-5">
        <div className="row px-xl-5">
          <div className="col-lg-5 mb-30">
            <div
              id="product-carousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner bg-light">
                <div className="carousel-item active">
                  <img
                    className="w-100 h-100"
                    src={details.image}
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 h-auto mb-30">
            <div className="h-100 bg-light p-30">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 text-info">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-dark">
                      {details.firstName}
                      {""} {details.maidenName}
                      {""}
                      {details.lastName}{" "}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 text-info">Age</h6>
                    </div>
                    <div className="col-sm-9 text-dark">{details.age}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 text-info">Gender</h6>
                    </div>
                    <div className="col-sm-9 text-dark">{details.gender}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 text-info">DOB</h6>
                    </div>
                    <div className="col-sm-9 text-dark">
                      {details.birthDate}
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-dark">{details.email}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3 text-info">
                      <h6 className="mb-0">Phone </h6>
                    </div>
                    <div className="col-sm-9 text-dark">{details.phone}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Mobile</h6>
                    </div>
                    <div className="col-sm-9 text-dark">(320) 380-4539</div>
                  </div>
                  <hr />
                  {/* {details.address?.map((ads) => { */}
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Address</h6>
                      </div>
                      <div className="col-sm-9 text-dark">{details.address?.address}</div>
                    </div>;
                  {/* })} */}
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                      <a
                        className="btn btn-info "
                        target="__blank"
                        href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills"
                      >
                        Edit
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerDetails;
