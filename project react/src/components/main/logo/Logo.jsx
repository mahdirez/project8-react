import React from "react";

const imgLogo = [
  "./src/assets/img/cta1.png",
  "./src/assets/img/cta2.png",
  "./src/assets/img/cta3.png",
  "./src/assets/img/cta4.png",
  "./src/assets/img/cta5.png",
  "./src/assets/img/cta6.png",
];
export default function Logo() {
  return (
    <section className="logo">
      <div className="center-text">
        <h5>Trusted By</h5>
        <h2>500+ Leading Universities And Companies</h2>
      </div>
      <div className="logo-content">
        {imgLogo.map((x) => {
         return <div className="logo-img">
            <img src={x} />
          </div>;
        })}
      </div>
    </section>
  );
}
