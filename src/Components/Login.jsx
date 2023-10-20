import React from "react";
import Navigation from "./LoginComp/Navigation";
import Hero from "./LoginComp/Hero";
import TabNavigation from "./LoginComp/TabNavigation";
import CarouselComp from "./LoginComp/Carousel";
import { Content1, Content12, Content5 } from "./LoginComp/Content";
import About from "./LoginComp/About";
import { Step2 } from "./LoginComp/Step";
import { Testimonial5 } from "./LoginComp/Testimonial";
import { Cta3 } from "./LoginComp/Cta";
import { Pricing8 } from "./LoginComp/Pricing";
import { Faq4 } from "./LoginComp/Faq";
import { Footer6 } from "./LoginComp/Footer";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { auth, db } from "@/db/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Parallax from "./LoginComp/Parallax";
import Feature1 from "./LoginComp/Feature1";

const Login = () => {
    const router = useRouter();

    const handleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const { displayName, photoURL, uid } = result.user;

            console.log(result.user);
            // Store user's name and photo in Firestore
            await setDoc(doc(db, "users", uid), {
                displayName,
                photoURL,
                uid,
            });

            router.push("/");
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                router.push("/");
            }
        });

        return () => unsubscribe();
    }, [router]);

    return (
        <>
            <Navigation handleLogin={handleLogin} />
            <div className="max-sm:hidden">{/* <Parallax/> */}</div>
            <Hero />

            {/* <CarouselComp /> */}

            {/* <Content5 /> */}
            <Feature1 />
            {/* <About /> */}
            {/* <Content12 /> */}
            <Step2 />
            {/* <p className="mx-8 my-16 max-w-full text-xl leading-relaxed text-white">
                Throughout your experience with us, our commitment is to offer a
                seamless and user-friendly digital platform that empowers you to
                make well-informed decisions regarding Ayurvedic medicine
                analysis. Your success is paramount to us, and our team of
                experts is wholeheartedly dedicated to ensuring your utmost
                satisfaction. If you&apos;re prepared to simplify your Ayurvedic
                practice and gain invaluable insights into medicinal analysis,
                we invite you to take the next step. Whether you choose to book
                a free consultation or sign up for a complimentary month of our
                services, we&apos;re eager to show you the convenience and
                effectiveness of our tailored solution. Get ready to embark on a
                journey of enhanced efficiency and precision in Ayurvedic
                medicine analysis.
            </p> */}
            <Testimonial5 />
            <Cta3 />
            {/* <Pricing8 /> */}
            {/* <Faq4 /> */}
            <Footer6 />
        </>
    );
};

export default Login;
