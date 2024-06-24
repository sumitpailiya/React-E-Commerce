import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Blogs() {
  const [blogApi, setblogApi] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((d) => setblogApi(d.posts));
  }, []);

  console.log(blogApi);

  return (
    <>
      <div className="container">
        <div className="row mb-2 d-flex flex-wrap">
          {blogApi.map((b) => (
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-primary-emphasis">
                    {b.tags[0].toUpperCase()}
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
                    {b.title}{" "}
                  </h3>
                  <div className="mb-2 text-body-secondary">Nov 12</div>
                  <p
                    className="card-text mb-2"
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      webkitLineClamp: "3",
                      webkitBoxOrient: "vertical",
                    }}
                  >
                    {b.body}
                  </p>
                  <Link
                    to={`/blogPage/${b.id}`}
                    className="icon-link gap-1 icon-link-hover stretched-link mb-2 text-info"
                  >
                    Continue reading
                  </Link>

                  <img
                    src="https://picsum.photos/id/866/4704/3136"
                    alt="blog image"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blogs;
