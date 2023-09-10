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
import { useRouter } from 'next/router'
import  { useEffect } from 'react'
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { auth, db } from '@/db/firebase';
import { doc, getDoc, setDoc } from "firebase/firestore";
import Parallax from './LoginComp/Parallax'

const Login = () => {

  const router = useRouter()

  const handleLogin = async () => {
      const provider = new GoogleAuthProvider();
      try {
        const result = await signInWithPopup(auth, provider);
        const { displayName, photoURL, uid } = result.user;
          
        console.log(result.user)
        // Store user's name and photo in Firestore
        await setDoc(doc(db, "users", uid), {
          displayName, photoURL, uid
        })

        router.push("/")

      } catch (error) {
        console.error('Error logging in:', error);
      }
    };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.push("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Navigation handleLogin={handleLogin} />
      <Parallax/>
      <Hero />
      
      <CarouselComp />
     
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
      {/* <Pricing8 /> */}
      <Faq4 />
      <Footer6 />
    </>
  )
}

export default Login