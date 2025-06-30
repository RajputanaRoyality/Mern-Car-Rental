import React from 'react'
import Hero from '../components/Hero'
import CarCard from '../components/carCard'
import { dummyCarData } from '../assets/assets'
import FeaturedDestination from '../components/FeaturedSection.jsx'
import Banner from '../components/Banner.jsx'
import Testimonial from '../components/Testinomials.jsx'
import NewsLetter from '../components/NewsLetter.jsx'
import Footer from '../components/Footer.jsx'


const Home = () => {
  return (
    <div>
        <Hero/>
        <FeaturedDestination/>
        <Banner/>
        <Testimonial/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default Home