import React from "react";

const fContent1 = ["Facebook", "Instagram", "Twitter"];

const fContent2 = ["Home", "Categories", "Courses", "About Us", "Contact"];

const fContent3 = ["Profile", "Login", "Register", "Instructor", "Dashboard"];

const fContent4 = ["San Francisco, California , CA 94108","dreamslms@example.com","01646895741",];
export default function Footer() {
  return (
    <footer>
      <div className="main-footer">
        <div className="footer-content">
          {fContent1.map((x) => {
            return (
              <li>
                <a href="#">{x}</a>
              </li>
            );
          })}
        </div>
        <div className="footer-content">
        {fContent2.map((x) => {
            return (
              <li>
                <a href="#">{x}</a>
              </li>
            );
          })}
        </div>
        <div className="footer-content">
        {fContent3.map((x) => {
            return (
              <li>
                <a href="#">{x}</a>
              </li>
            );
          })}
        </div>
        <div className="footer-content">
        {fContent4.map((x) => {
            return (
              <li>
                <a href="#">{x}</a>
              </li>
            );
          })}
        </div>
      </div>
      <div className="last-text">
        <p> 2022 Mahdi Rezaei All rights reserved.</p>
      </div>
    </footer>
  );
}
