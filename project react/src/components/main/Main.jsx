import React from 'react'
import Home from './home/Home'
import Container from './container/Container'
import Categories from './categories/Categories'
import About from './about/About'
import Courses from './courses/Courses'
import Logo from './logo/Logo'

export default function Main() {
  return (
    <>
    <Home/>
    <Container/>
    <Categories/>
    <Courses/>
    <Logo/>
    <About/>
    </>
  )
}
