import React from 'react'
import homeImg from '../../../assets/img/home.png'
export default function Home() {
  return (
    <section className="home" id="home">
      <div className="home-text">
        <h6>Best online learning platform</h6>
        <h1>Accessible Online Courses For All</h1>
        <p>Own your future learning new skills online</p>
        <div className="latter">
            <input type="email" placeholder="Write Your Email" required />
            <input type="submit" placeholder="Let's Start" />
        </div>
      </div>
      <div className="home-img">
        <img src={homeImg} />
      </div>
    </section>
  )
}
