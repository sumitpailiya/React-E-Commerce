import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function ProductDetail() {
  const [single, setsingle] = useState({});
  const [cat, setcat] = useState([]);
  let { id } = useParams();

  const getProducts = async () => {
    let res = await fetch(`https://dummyjson.com/products/${id}`);
    let data = await res.json();

    setsingle(data);

    let res2 = await fetch(
      `https://dummyjson.com/products/category/${data.category}`
    );
    let data2 = await res2.json();

    setcat(data2.products);
  };

  useEffect(() => {
    getProducts();
  }, [id]);

  console.log(cat);

  return (
    <>
      <>
        {/* Breadcrumb Start */}
        <div className="container-fluid">
          <div className="row px-xl-5">
            <div className="col-12">
              <nav className="breadcrumb bg-light mb-30">
                <a className="breadcrumb-item text-dark" href="#">
                  Home
                </a>
                <Link className="breadcrumb-item text-dark" to="/shop">
                  Shop
                </Link>
                <Link className="breadcrumb-item active" to="/shop">
                  {single.category}
                </Link>
                <span className="breadcrumb-item active">{single.title}</span>
              </nav>
            </div>
          </div>
        </div>
        {/* Breadcrumb End */}
        {/* Shop Detail Start */}
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
                      src={single.thumbnail}
                      alt="Image"
                    />
                  </div>

                  {single.images?.map((pimg) => (
                    <div className="carousel-item">
                      <img className="w-100 h-100" src={pimg} alt="Image" />
                    </div>
                  ))}
                </div>
                <a
                  className="carousel-control-prev"
                  href="#product-carousel"
                  data-slide="prev"
                >
                  <i className="fa fa-2x fa-angle-left text-dark" />
                </a>
                <a
                  className="carousel-control-next"
                  href="#product-carousel"
                  data-slide="next"
                >
                  <i className="fa fa-2x fa-angle-right text-dark" />
                </a>
              </div>
            </div>
            <div className="col-lg-7 h-auto mb-30">
              <div className="h-100 bg-light p-30">
                <h3>{single.title}</h3>
                <div className="d-flex mb-3">
                  <div className="text-primary mr-2">
                    <small className="fas fa-star" />
                    <small className="fas fa-star" />
                    <small className="fas fa-star" />
                    <small className="fas fa-star-half-alt" />
                    <small className="far fa-star" />
                  </div>
                  <small className="pt-1">(99 Reviews)</small>
                </div>
                <h3 className="font-weight-semi-bold mb-4">{single.price}</h3>
                <p className="mb-4">{single.description}</p>
                <div className="d-flex mb-3">
                  <strong className="text-dark mr-3">Sizes:</strong>
                  <form>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        className="custom-control-input"
                        id="size-1"
                        name="size"
                      />
                      <label className="custom-control-label" htmlFor="size-1">
                        XS
                      </label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        className="custom-control-input"
                        id="size-2"
                        name="size"
                      />
                      <label className="custom-control-label" htmlFor="size-2">
                        S
                      </label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        className="custom-control-input"
                        id="size-3"
                        name="size"
                      />
                      <label className="custom-control-label" htmlFor="size-3">
                        M
                      </label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        className="custom-control-input"
                        id="size-4"
                        name="size"
                      />
                      <label className="custom-control-label" htmlFor="size-4">
                        L
                      </label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        className="custom-control-input"
                        id="size-5"
                        name="size"
                      />
                      <label className="custom-control-label" htmlFor="size-5">
                        XL
                      </label>
                    </div>
                  </form>
                </div>
                <div className="d-flex mb-4">
                  <strong className="text-dark mr-3">Colors:</strong>
                  <form>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        className="custom-control-input"
                        id="color-1"
                        name="color"
                      />
                      <label className="custom-control-label" htmlFor="color-1">
                        Black
                      </label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        className="custom-control-input"
                        id="color-2"
                        name="color"
                      />
                      <label className="custom-control-label" htmlFor="color-2">
                        White
                      </label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        className="custom-control-input"
                        id="color-3"
                        name="color"
                      />
                      <label className="custom-control-label" htmlFor="color-3">
                        Red
                      </label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        className="custom-control-input"
                        id="color-4"
                        name="color"
                      />
                      <label className="custom-control-label" htmlFor="color-4">
                        Blue
                      </label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        className="custom-control-input"
                        id="color-5"
                        name="color"
                      />
                      <label className="custom-control-label" htmlFor="color-5">
                        Green
                      </label>
                    </div>
                  </form>
                </div>
                <div className="d-flex align-items-center mb-4 pt-2">
                  <div
                    className="input-group quantity mr-3"
                    style={{ width: 130 }}
                  >
                    <div className="input-group-btn">
                      <button className="btn btn-primary btn-minus">
                        <i className="fa fa-minus" />
                      </button>
                    </div>
                    <input
                      type="text"
                      className="form-control bg-secondary border-0 text-center"
                      defaultValue={1}
                    />
                    <div className="input-group-btn">
                      <button className="btn btn-primary btn-plus">
                        <i className="fa fa-plus" />
                      </button>
                    </div>
                  </div>
                  <button className="btn btn-primary px-3">
                    <i className="fa fa-shopping-cart mr-1" /> Add To Cart
                  </button>
                </div>
                <div className="d-flex pt-2">
                  <strong className="text-dark mr-2">Share on:</strong>
                  <div className="d-inline-flex">
                    <a className="text-dark px-2" href="">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a className="text-dark px-2" href="">
                      <i className="fab fa-twitter" />
                    </a>
                    <a className="text-dark px-2" href="">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a className="text-dark px-2" href="">
                      <i className="fab fa-pinterest" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shop Detail End */}
          {/* Products Start */}

          {cat.map((ty) => (
            <div className="col-lg-2 col-md-6 mx-4 col-sm-6 pb-2 d-inline-flex ">
              <div className="product-item bg-light mb-4">
                <div className="product-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src={ty.thumbnail} alt="" />
                  <div className="product-action">
                    <a className="btn btn-outline-dark btn-square" href="">
                      <i className="fa fa-shopping-cart" />
                    </a>
                    <a className="btn btn-outline-dark btn-square" href="">
                      <i className="far fa-heart" />
                    </a>
                    <a className="btn btn-outline-dark btn-square" href="">
                      <i className="fa fa-sync-alt" />
                    </a>
                    <a className="btn btn-outline-dark btn-square" href="">
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
                      $
                      {(ty.price - ty.price / ty.discountPercentage).toFixed(2)}
                    </h5>
                    <h6 className="text-muted ml-2">
                      <del>${ty.price}</del>
                    </h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-1">
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small>(99)</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="row px-xl-5">
            <div className="col">
              <div className="bg-light p-30">
                <div className="nav nav-tabs mb-4">
                  <a
                    className="nav-item nav-link text-dark active"
                    data-toggle="tab"
                    href="#tab-pane-1"
                  >
                    Description
                  </a>
                  <a
                    className="nav-item nav-link text-dark"
                    data-toggle="tab"
                    href="#tab-pane-2"
                  >
                    Information
                  </a>
                  <a
                    className="nav-item nav-link text-dark"
                    data-toggle="tab"
                    href="#tab-pane-3"
                  >
                    Reviews ({single?.reviews?.length})
                  </a>
                </div>
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tab-pane-1">
                    <h4 className="mb-3">Product Description</h4>
                    <p>{single.description}</p>
                    <p>
                      Dolore magna est eirmod sanctus dolor, amet diam et eirmod
                      et ipsum. Amet dolore tempor consetetur sed lorem dolor
                      sit lorem tempor. Gubergren amet amet labore sadipscing
                      clita clita diam clita. Sea amet et sed ipsum lorem elitr
                      et, amet et labore voluptua sit rebum. Ea erat sed et diam
                      takimata sed justo. Magna takimata justo et amet magna et.
                    </p>
                  </div>
                  <div className="tab-pane fade" id="tab-pane-2">
                    <h4 className="mb-3">Additional Information</h4>
                    <p>{single.description}</p>
                    <div className="row">
                      <div className="col-md-6">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item px-0">
                            Sit erat duo lorem duo ea consetetur, et eirmod
                            takimata.
                          </li>
                          <li className="list-group-item px-0">
                            Amet kasd gubergren sit sanctus et lorem eos
                            sadipscing at.
                          </li>
                          <li className="list-group-item px-0">
                            Duo amet accusam eirmod nonumy stet et et stet
                            eirmod.
                          </li>
                          <li className="list-group-item px-0">
                            Takimata ea clita labore amet ipsum erat justo
                            voluptua. Nonumy.
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item px-0">
                            Sit erat duo lorem duo ea consetetur, et eirmod
                            takimata.
                          </li>
                          <li className="list-group-item px-0">
                            Amet kasd gubergren sit sanctus et lorem eos
                            sadipscing at.
                          </li>
                          <li className="list-group-item px-0">
                            Duo amet accusam eirmod nonumy stet et et stet
                            eirmod.
                          </li>
                          <li className="list-group-item px-0">
                            Takimata ea clita labore amet ipsum erat justo
                            voluptua. Nonumy.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tab-pane-3">
                    <div className="row">
                      <div className="col-md-6">
                        <h4 className="mb-4">1 review for "Product Name"</h4>
                        {single.reviews?.map((my) => (
                          <>
                            <div className="media mb-4">
                              <img
                                src="img/user.jpg"
                                alt="Image"
                                className="img-fluid mr-3 mt-1"
                                style={{ width: 45 }}
                              />
                              <div className="media-body">
                                <h6>
                                  {my.reviewerName}
                                  <small>
                                    {" "}
                                    - <i>{my.date}</i>
                                  </small>
                                </h6>
                                <div className="text-primary mb-2">
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star-half-alt" />
                                  <i className="far fa-star" />
                                </div>
                                <p>
                                  {my.comment}
                                </p>
                              </div>
                            </div>
                          </>
                        ))}
                      </div>
                      <div className="col-md-6">
                        <h4 className="mb-4">Leave a review</h4>
                        <small>
                          Your email address will not be published. Required
                          fields are marked *
                        </small>
                        <div className="d-flex my-3">
                          <p className="mb-0 mr-2">Your Rating * :</p>
                          <div className="text-primary">
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                          </div>
                        </div>
                        <form>
                          <div className="form-group">
                            <label htmlFor="message">Your Review *</label>
                            <textarea
                              id="message"
                              cols={30}
                              rows={5}
                              className="form-control"
                              defaultValue={""}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="name">Your Name *</label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="email">Your Email *</label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                            />
                          </div>
                          <div className="form-group mb-0">
                            <input
                              type="submit"
                              defaultValue="Leave Your Review"
                              className="btn btn-primary px-3"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default ProductDetail;
