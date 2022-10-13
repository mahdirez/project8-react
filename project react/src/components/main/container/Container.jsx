import React from 'react'
import ContainerBox from './ContainerBox';
import con1 from '../../../assets/img/con1.svg'
import con2 from '../../../assets/img/con2.svg'
import con3 from '../../../assets/img/con3.svg'
import con4 from '../../../assets/img/con4.svg'

const containerBox = [con1,con2,con3,con4];
export default function Container() {
  return (
    <section className="container">
   {containerBox.map((src)=><ContainerBox img={src}/>)}
  </section>
  )
}
