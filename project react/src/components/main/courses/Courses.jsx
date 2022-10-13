import React from "react";
import CoursesContent from "./CoursesContent";
import html from "../../../assets/img/js.jpg"
import c from "../../../assets/img/C-Complete-Course-For-Beginners-2021.png"
import angular from "../../../assets/img/angular-JS-online-training-nareshit.jpg"
import react from "../../../assets/img/js.jpg"
import Kotlin from "../../../assets/img/js.jpg"
import vue from "../../../assets/img/js.jpg"
const row = [
  {
    img: html,
    h5: "$99.00",
    h3: "The Complete HTML CSS JS Course 2022",
    h6: "40 hours",
    p: "9654 Reviews",
  },
  {
    img: c,
    h5: "$60.00",
    h3: "C# Complete Course For Beginners 2021",
    h6: "23 hours 10 minutes",
    p: "460 Reviews",
  },
  {
    img: angular,
    h5: "$50.00",
    h3: "Complete AngularJS Course 2022",
    h6: "09 hours 20 minutes",
    p: "1150 Reviews",
  },
  {
    img: "./src/assets/img/react-js-tutorial-for-beginners.png",
    h5: "$49.99",
    h3: "The Complete ReactJS Course 2022",
    h6: "45 hours 20 minutes",
    p: "8420 Reviews",
  },
  {
    img: "./src/assets/img/Kotlin.jpg",
    h5: "$20.00",
    h3: "The Complete Kotlin Course 2020",
    h6: "12 hours 20 minutes",
    p: "2341 Reviews",
  },
  {
    img: "./src/assets/img/32362dd9-7187-4ca7-83e2-b9c5e8343de2.jpg",
    h5: "$30.00",
    h3: "The Complete VueJS Course 2019",
    h6: "10 hours 35 minutes",
    p: "4685 Reviews",
  },
];

export default function Courses() {
  return (
    <section className="courses" id="courses">
      <div className="center-text">
        <h5>COURSES</h5>
        <h2>Explore Popular Courses</h2>
      </div>

      <div className="courses-content">
        {row.map(({img,h3,h5,h6})=><CoursesContent img={img} h3={h3} h5={h5} h6={h6}/>)}
      </div>

      <div className="main-btn">
        <a href="#" className="btn">
          Buy Now
        </a>
      </div>
    </section>
  );
}
