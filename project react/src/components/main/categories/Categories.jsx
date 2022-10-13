import React from "react";
import CategoriesBox from "./CategoriesBox";
import Cate1 from "../../../assets/img/cate1.png"
import cate2 from "../../../assets/img/cate2.png"
import cate3 from "../../../assets/img/cate3.png"
import cate4 from "../../../assets/img/cate4.png"
const content = [
  {
    img: Cate1,
    h3: "dolphin Development",
    p: "1 Courses",
  },
  {
    img: cate2,
    h3: "Angular Development",
    p: "5 Courses",
  },
  {
    img: cate3,
    h3: "Node Js Development",
    p: "10 Courses",
  },
  {
    img: cate4,
    h3: "Swift Development",
    p: "7 Courses",
  },
];
export default function Categories() {
  return (
    <section className="categories" id="categories">
      <div className="center-text">
        <h5>CATEGORIES</h5>
        <h2>Popular Categories</h2>
      </div>

      <div className="categories-content">
        {content.map(({img,h3,p})=><CategoriesBox imgSrc={img} h3={h3} p={p}/>)}
      </div>
      <div className="main-btn">
        <a href="#" className="btn">
          All Categories
        </a>
      </div>
    </section>
  );
}
