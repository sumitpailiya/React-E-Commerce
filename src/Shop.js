import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Shop() {
  const [product, setproduct] = useState([]);
  const [filterPrice, setfilterPrice] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((d) => {
        setproduct(d.products);
        setfilterPrice(d.products);
      });
  }, []);

  const priceChange = (minPrice, maxPrice, checked) => {
    //alert(checked)
    if (!checked) {
      setproduct(filterPrice);
    } else {
      const price = filterPrice.filter((ty) => {
        return ty.price >= minPrice && ty.price <= maxPrice;
      });
      console.log(price);
      setproduct(price);
    }
  };
  // console.log(product);

  // console.log(product);
  // console.log(filterPrice)
  const recentVisit = (visitID) => {
    // window.localStorage.setItem("visit", visitID);
    return visitID
  };
  console.log(recentVisit());

  return (
    <>
      <>
        {/* Breadcrumb Start */}
        <div className="container-fluid">
          <div className="row px-xl-5">
            <div className="col-12">
              <nav className="breadcrumb bg-light mb-30">
                <Link className="breadcrumb-item text-dark" to="/">
                  Home
                </Link>
                <Link className="breadcrumb-item text-dark" to="/shop">
                  Shop
                </Link>
                <span className="breadcrumb-item active">Shop List</span>
              </nav>
            </div>
          </div>
        </div>
        {/* Breadcrumb End */}
        {/* Shop Start */}
        <div className="container-fluid">
          <div className="row px-xl-5">
            {/* Shop Sidebar Start */}
            <div className="col-lg-3 col-md-4">
              {/* Price Start */}
              <h5 className="section-title position-relative text-uppercase mb-3">
                <span className="bg-secondary pr-3">Filter by price</span>
              </h5>
              <div className="bg-light p-4 mb-30">
                <form>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      defaultChecked=""
                      id="price-all"
                    />
                    <label className="custom-control-label" htmlFor="price-all">
                      All Price
                    </label>
                    <span className="badge border font-weight-normal">
                      1000
                    </span>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="price-1"
                      onChange={(e) =>
                        priceChange("0", "100", e.target.checked)
                      }
                    />
                    <label className="custom-control-label" htmlFor="price-1">
                      $0 - $100
                    </label>
                    <span className="badge border font-weight-normal">100</span>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="price-2"
                      onChange={(e) =>
                        priceChange("100", "200", e.target.checked)
                      }
                    />
                    <label className="custom-control-label" htmlFor="price-2">
                      $100 - $200
                    </label>
                    <span className="badge border font-weight-normal">
                      100{" "}
                    </span>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="price-3"
                      onChange={(e) =>
                        priceChange("200", "300", e.target.checked)
                      }
                    />
                    <label className="custom-control-label" htmlFor="price-3">
                      $200 - $300
                    </label>
                    <span className="badge border font-weight-normal">246</span>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="price-4"
                      onChange={(e) =>
                        priceChange("300", "400", e.target.checked)
                      }
                    />
                    <label className="custom-control-label" htmlFor="price-4">
                      $300 - $400
                    </label>
                    <span className="badge border font-weight-normal">145</span>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="price-5"
                      onChange={(e) =>
                        priceChange("400", "500", e.target.checked)
                      }
                    />
                    <label className="custom-control-label" htmlFor="price-5">
                      $400 - $500
                    </label>
                    <span className="badge border font-weight-normal">168</span>
                  </div>
                </form>
              </div>
              {/* Price End */}
            </div>
            {/* Shop Sidebar End */}
            {/* Shop Product Start */}
            <div className="col-lg-9 col-md-8">
              <div className="row pb-3">
                <div className="col-12 pb-1">
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div>
                      <button className="btn btn-sm btn-light">
                        <i className="fa fa-th-large" />
                      </button>
                      <button className="btn btn-sm btn-light ml-2">
                        <i className="fa fa-bars" />
                      </button>
                    </div>
                    <div className="ml-2">
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
                            onClick={priceChange}
                            className="dropdown-item"
                            href="#"
                          >
                            Latest
                          </a>
                          <a className="dropdown-item" href="#">
                            Popularity
                          </a>
                          <a className="dropdown-item" href="#">
                            Best Rating
                          </a>
                        </div>
                      </div>
                      <div className="btn-group ml-2">
                        <button
                          type="button"
                          className="btn btn-sm btn-light dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Showing
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#">
                            10
                          </a>
                          <a className="dropdown-item" href="#">
                            20
                          </a>
                          <a className="dropdown-item" href="#">
                            30
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {product.map((ty) => (
                  <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                    <Link
                      to={`/productdetail/${ty.id}`}
                      onclick={() => recentVisit(ty.id)}
                    >
                      {" "}
                      <div className="product-item bg-light mb-4">
                        <div className="product-img position-relative overflow-hidden">
                          <img
                            className="img-fluid w-100"
                            src={ty.thumbnail}
                            alt=""
                          />

                          <div className="product-action">
                            <a
                              className="btn btn-outline-dark btn-square"
                              href=""
                            >
                              <i className="fa fa-shopping-cart" />
                            </a>
                            <a
                              className="btn btn-outline-dark btn-square"
                              href=""
                            >
                              <i className="far fa-heart" />
                            </a>
                            <a
                              className="btn btn-outline-dark btn-square"
                              href=""
                            >
                              <i className="fa fa-sync-alt" />
                            </a>
                            <a
                              className="btn btn-outline-dark btn-square"
                              href=""
                            >
                              <i className="fa fa-search" />
                            </a>
                          </div>
                        </div>
                        <div className="text-center py-4">
                          <Link
                            className="h6 text-decoration-none text-truncate"
                            to={`/productdetail/${ty.id}`}
                          >
                            {ty.title}
                          </Link>
                          <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>
                              <span style={{ color: "red" }}>
                                -{ty.discountPercentage} %
                              </span>{" "}
                              $
                              {(
                                ty.price -
                                ty.price / ty.discountPercentage
                              ).toFixed(2)}
                            </h5>
                          </div>
                          <h6 className="text-muted ml-2">
                            <del>${ty.price}</del>
                          </h6>

                          <div className="d-flex align-items-center justify-content-center mb-1">
                            <small className="fa fa-star text-primary mr-1" />
                            <small className="fa fa-star text-primary mr-1" />
                            <small className="fa fa-star-half text-primary mr-1" />
                            <small>{ty.rating}</small>
                            {}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            {/* Shop Product End */}
          </div>
        </div>
        {/* Shop End */}
      </>
    </>
  );
}

export default Shop;
