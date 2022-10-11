import React from "react";

export default function CoursesContent({img,h5,h3,h6,p}) {
  return (
    <div className="row">
      <img src={img} />
      <div className="courses-text">
        <h5>{h5}</h5>
        <h3>{h3}</h3>
        <h6>{h6}</h6>
        <div className="rating">
          <div className="star">
            <a href="#">
              <i className="bi bi-star-fill"></i>
            </a>
            <a href="#">
              <i className="bi bi-star-fill"></i>
            </a>
            <a href="#">
              <i className="bi bi-star-fill"></i>
            </a>
            <a href="#">
              <i className="bi bi-star-fill"></i>
            </a>
            <a href="#">
              <i className="bi bi-star-half"></i>
            </a>
          </div>
          <div className="review">
            <p>{p}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
