import React from 'react'
import ContainerBox from './ContainerBox';


const containerBox = ["./src/assets/img/con1.svg","./src/assets/img/con2.svg","./src/assets/img/con3.svg","./src/assets/img/con4.svg"];
export default function Container() {
  return (
    <section className="container">
   {containerBox.map((src)=><ContainerBox img={src}/>)}
  </section>
  )
}
