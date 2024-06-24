import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
function Header() {
  const [c, setc] = useState([]);
  const [search, setsearch] = useState("");
  const [loginStatus, setloginStatus] = useState(false);

  let nav = useNavigate();
  const fname = window.localStorage.getItem("fName");
  const lname = window.localStorage.getItem("lName");
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((d) => setc(d));
  }, []);

  const getSearch = (e) => {
    e.preventDefault();
    nav("/search", { state: search });
  };
  const logout = () => {
    window.localStorage.removeItem("id");
    window.localStorage.removeItem("fName");
    window.localStorage.removeItem("lName");
    setloginStatus(false);
  };

  return (
    <>
      <>
        {/* Topbar Start */}
        <div className="container-fluid">
          <div className="row bg-secondary py-1 px-xl-5">
            <div className="col-lg-6 d-none d-lg-block">
              <div className="d-inline-flex align-items-center h-100">
                <a className="text-body mr-3" href="">
                  About
                </a>
                <Link className="text-body mr-3" to="/contactUS">
                  Contact
                </Link>
                <a className="text-body mr-3" href="">
                  Help
                </a>
                <a className="text-body mr-3" href="">
                  FAQs
                </a>
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
              <div className="d-inline-flex align-items-center">
                <div className="btn-group">
                  <div className="name mx-5 text-success text-center">
                    <i className="fa fa-user" />
                    {""} {fname} {""} {lname}
                  </div>
                  <button
                    type="button"
                    className="btn btn-sm btn-info dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    My Account
                  </button>

                  <div className="dropdown-menu dropdown-menu-right ">
                    {!loginStatus ? (
                      <button className="dropdown-item bg-yellow" type="button">
                        <Link
                          className="text-dark text-decoration-none bg-yellow"
                          to={"/SignIn"}
                          onClick={() => {
                            setloginStatus(true);
                          }}
                        >
                          {" "}
                          Sign in
                        </Link>
                      </button>
                    ) : (
                      <button className="dropdown-item text-dark" type="button">
                        <Link
                          className="text-dark text-decoration-none"
                          to={"/"}
                          onClick={logout}
                        >
                          Logout
                        </Link>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
            <div className="col-lg-4">
              <Link href="/" className="text-decoration-none">
                <span className="h1 text-uppercase text-primary bg-dark px-2 ">
                  React
                </span>
                <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">
                  Shop
                </span>
              </Link>
            </div>
            <div className="col-lg-4 col-6 text-left">
              <form action="">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for products"
                    onChange={(e) => {
                      setsearch(e.target.value);
                    }}
                  />
                  <div className="input-group-append">
                    <span
                      onClick={getSearch}
                      className="input-group-text bg-transparent text-primary"
                    >
                      <i className="fa fa-search" />
                    </span>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4 col-6 text-right">
              <p className="m-0">Customer Service</p>
              <h5 className="m-0">+012 345 6789</h5>
            </div>
          </div>
        </div>
        {/* Topbar End */}
      </>

      {/* Navbar Start */}
      <div className="container-fluid bg-dark mb-30">
        <div className="row px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a
              className="btn d-flex align-items-center justify-content-between  bg-primary w-100"
              data-toggle="collapse"
              href="#navbar-vertical"
              style={{ height: 65, padding: "0 30px" }}
            >
              <h6 className="text-dark m-0">
                <i className="fa fa-bars mr-2" />
                Categories
              </h6>
              <i className="fa fa-angle-down text-dark" />
            </a>
            <nav
              className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
              id="navbar-vertical"
              style={{ width: "calc(100% - 30px)", zIndex: 999 }}
            >
              <div className="navbar-nav w-100">
                {c.map((ty) => (
                  <>
                    <Link
                      to={`/products/${ty.slug}`}
                      className="nav-item nav-link"
                    >
                      {ty.name}
                    </Link>
                  </>
                ))}
              </div>
            </nav>
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
              <>
                <Link to="/" className="text-decoration-none d-block d-lg-none">
                  <span className="h1 text-uppercase text-dark bg-light px-2">
                    React
                  </span>
                  <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">
                    Shop
                  </span>
                </Link>
                <button
                  type="button"
                  className="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#navbarCollapse"
                >
                  <span className="navbar-toggler-icon" />
                </button>
              </>

              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto py-0">
                  <Link to="/" className="nav-item nav-link active">
                    Home
                  </Link>
                  <Link to="/Shop" className="nav-item nav-link">
                    Shop
                  </Link>

                  {/* <Link className="nav-item nav-link" to="/newStore">
                    Categories
                  </Link> */}
                  {/* <Link className="nav-item nav-link" to="/showList">
                    Show List
                  </Link>   */}
                  <div className="nav-item dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Pages <i className="fa fa-angle-down mt-1" />
                    </a>
                    <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                      <Link to="/cart" className="dropdown-item">
                        Shopping Cart
                      </Link>
                      <Link to="/checkout" className="dropdown-item">
                        Checkout
                      </Link>
                    </div>
                  </div>
                  <Link to="/Blogs" className="nav-item nav-link">
                    Blogs
                  </Link>
                  <Link to="/contactUs" className="nav-item nav-link">
                    Contact
                  </Link>
                  <Link to="/404Page" className="nav-item nav-link">
                    Not Found
                  </Link>
                </div>
                <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                  <div className="btn btn-outline-primary mx-4">
                    <Link to="/customer">All User</Link>
                  </div>

                  <a href="" className="btn px-0">
                    <i className="fas fa-heart text-primary" />
                    <span
                      className="badge text-secondary border border-secondary rounded-circle"
                      style={{ paddingBottom: 2 }}
                    >
                      0
                    </span>
                  </a>
                  <a href="" className="btn px-0 ml-3">
                    <i className="fas fa-shopping-cart text-primary" />
                    <span
                      className="badge text-secondary border border-secondary rounded-circle"
                      style={{ paddingBottom: 2 }}
                    >
                      0
                    </span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* Navbar End */}
    </>
  );
}

export default Header;
