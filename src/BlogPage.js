import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function BlogPage() {
  const [content, setcontent] = useState({});
  const [comment, setcomment] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((res) => res.json())
      .then((d) => setcontent(d));

      /* getting posts of comments with id 1 */
fetch(`https://dummyjson.com/comments/post/${id}`)
.then(res => res.json())
.then((c)=>setcomment(c.comments));
  }, []);
  console.log(content);
  console.log(comment);

  return (
    <>
      <div className="container">
        <div className="row mb-2 d-flex flex-wrap">
          <div className="col-md">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary-emphasis">
                Tags:  {content.tags?.map((ty)=><span>{ty.toUpperCase() } {" "}</span>)}
                </strong>
                <h3
                  className="mb-0"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    webkitLineClamp: "1",
                    webkitBoxOrient: "vertical",
                  }}
                >
                  {content.title}{" "}
                </h3>
                <div className="mb-2 text-body-secondary">Nov 12</div>
                <p className="card-text mb-2">
                  {content.body}. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Porro at quisquam nisi eaque consequatur
                  perspiciatis provident repellendus placeat omnis esse,
                  doloribus illum maxime distinctio, accusantium alias autem
                  accusamus? Ex, esse! Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Ipsam nam culpa animi repudiandae quidem
                  obcaecati, odio provident ullam quam cum illum autem quisquam
                  nobis veritatis maxime laudantium nulla architecto error.
                </p>

                <img
                  src="https://picsum.photos/id/866/4704/3136"
                  alt="blog image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container tab-pane" id="tab-pane-3">
                    <div className="row">
                      <div className="col-md border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250">
                        <h4 className="mb-4">Customer Reviews</h4>
                        {comment.map((my) => (
                          <>
                            <div className="media mb-4">
                              <img
                                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                alt="Image"
                                className="img-fluid mr-3 mt-1"
                                style={{ width: 45 }}
                              />
                              <div className="media-body">
                                <h6>
                                  {my.user.fullName}
                                  <small>
                                    {" "}
                                    - <i>{}</i>
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
                                  {my.body}
                                </p>
                              </div>
                            </div>
                          </>
                        ))}
                      </div>
                      </div>
                      </div>
    </>
  );
}

export default BlogPage;
