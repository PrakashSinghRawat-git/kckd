import React from 'react'
import Navigation from './LoginComp/Navigation'
import Hero from './LoginComp/Hero'
import TabNavigation from './LoginComp/TabNavigation'
import CarouselComp from './LoginComp/Carousel'
import { Content1, Content12, Content5 } from './LoginComp/Content'
import About from './LoginComp/About'
import { Step2 } from './LoginComp/Step'
import { Testimonial5 } from './LoginComp/Testimonial'
import { Cta3 } from './LoginComp/Cta'
import { Pricing8 } from './LoginComp/Pricing'
import { Faq4 } from './LoginComp/Faq'
import { Footer6 } from './LoginComp/Footer'

const Login = ({handleLogin}) => {
  return (
    <>
      <Navigation handleLogin={handleLogin} />
      <Hero />
      <TabNavigation handleLogin={handleLogin}/>
      <CarouselComp />
      <Content1 />
      <About />
      <Content5 />
      <Content12 />
      <Step2 />
      <p className="mx-8 my-16 max-w-full text-xl leading-relaxed text-gray-600">
        Throughout your journey with us, we are dedicated to providing a
        user-friendly, digital experience that empowers you to make informed
        financial decisions. Your success is our priority, and our team of
        experts is here to ensure your satisfaction. Are you ready to streamline
        your bookkeeping and gain valuable financial insights? Book a free
        consultation or sign up for a free month today and experience the
        convenience of our tailored solution.
      </p>
      <Testimonial5 />
      <Cta3 />
      <Pricing8 />
      <Faq4 />
      <Footer6 />
    </>
  )
}

export default Login