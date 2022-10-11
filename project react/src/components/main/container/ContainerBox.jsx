import React from 'react'

export default function ContainerBox({img}) {
  return (
    <div className="container-box">
    <div className="container-img">
      <img src={img} />
    </div>
    <div className="container-text">
      <h4>5K</h4>
      <p>Online Courses</p>
    </div>
  </div>
  )
}
