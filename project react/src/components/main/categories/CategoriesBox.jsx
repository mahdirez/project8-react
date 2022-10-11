import React from 'react'

export default function CategoriesBox({imgSrc,h3,p}) {
  return (
    <div className="box">
          <img src={imgSrc} />
          <h3>{h3}</h3>
          <p>{p}</p>
    </div>
  )
}
