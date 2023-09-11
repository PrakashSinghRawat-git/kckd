import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <>
      <Head>
        {`
            <style>
                section{
                    font-family: 'Abril Fatface', cursive;
                    font-family: 'Roboto', sans-serif;
                }
            </style>
            `}
      </Head>
      <section className="relative py-10 sm:py-16 lg:py-24 text-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
              <Image alt='' className="w-full" src="/about.png" width={944} height={944} />
            </div>
            <div>
              <h1 className="mt-4 text-4xl font-bold text-heading lg:mt-8 sm:text-6xl xl:text-8xl text-white">
              Discover the Natural Wisdom
              </h1>
              <p className="mt-4 text-base text-sub-heading lg:mt-8 sm:text-xl">
              Explore the Ingredients You Need for Health and Wellness, Anytime, Anywhere
              </p>
              <a
                className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-[#28927d] rounded-full lg:mt-16 hover:bg-purple-350 "
                href="#"
              >
                <span>Start Rooting </span>
                <span className="w-fit">
                  <svg
                    className="w-6 h-6 ml-8 -mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </span>
              </a>
              <p className="mt-5 text-info">
                <span>Already joined us? </span>
                <a
                  className=" transition-all text-blue-500 duration-200 hover:underline"
                  href="#"
                >
                  Log in
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About