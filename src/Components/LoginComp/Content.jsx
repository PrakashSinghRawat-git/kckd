import Image from "next/image";
import Link from "next/link";
import React from "react";
import Card from "./Card";
export const Content1 = () => {
  return (
    <>
      <div className="py-10">
        <div className="container mx-auto px-4">
          <div className="md:w-5/6 md:mx-auto md:max-w-2xl">
            <h1 className="text-black text-3xl text-center font-bold dark2text-white sm:text-4xl">
              Blog
            </h1>
            <p className="text-center text-lg mt-2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 p-4 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:max-w-7xl xl:mx-auto">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export const Content5 = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-12 px-4  text-white">
        <h2 className="font-extrabold text-center text-3xl  sm:px-3 sm:text-4xl md:max-w-xl md:mx-auto lg:px-5 2xl:max-w-4xl">
          Let&apos;s Talk About Solutions
        </h2>
        <div className="flex mt-5 flex-col lg:flex-row lg:max-w-6xl lg:mx-auto lg:mt-11 xl:items-center">
          <Image
            alt=""
            width={944}
            height={944}
            className="rounded-md lg:w-7/12 lg:px-0 lg:mr-5 xl:h-min h-full"
            src="/desktop person.png"
          />
          <div className="flex flex-col mt-10 gap-y-10 lg:mt-0 lg:w-5/12 xl:w-4/12">
            <div>
              <div className="flex items-center gap-x-4">
                <div>
                  <p className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-2xl bg-primary text-white">
                    1
                  </p>
                </div>
                <h1 className="font-extrabold text-xl">
                Ayurvedic Consultations
                </h1>
              </div>
              <p className="mt-4">
              Provide personalized health assessments based on Ayurvedic principles. Offer guidance on natural remedies and lifestyle adjustments. Keep detailed records of client progress and treatment plans.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-x-4">
                <div>
                  <p className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-2xl bg-primary text-white">
                    2
                  </p>
                </div>
                <h1 className="font-extrabold text-xl">
                Herbal Medicine Formulation
                </h1>
              </div>
              <p className="mt-4">
              Create custom herbal blends tailored to individual health needs. Source high-quality Ayurvedic herbs and ingredients. Maintain stringent quality control to ensure the purity and efficacy of herbal remedies.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-x-4">
                <div>
                  <p className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-2xl bg-primary text-white">
                    3
                  </p>
                </div>
                <h1 className="font-extrabold text-xl">
                Ayurvedic Wellness Retreats
                </h1>
              </div>
              <p className="mt-4">
              Organize rejuvenating wellness retreats inspired by Ayurvedic practices. Offer yoga, meditation, and Ayurvedic treatments in serene natural settings. Provide nutritious Ayurvedic meals and holistic wellness experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Content12 = () => {
  return (
    <div className="py-11 text-white bg-[#2385C4]">
      <div className="text-center flex flex-col gap-y-3 px-2 sm:mx-auto sm:max-w-xl ">
        {/* <p className="dark2text-gray-300">Get Started</p> */}
        <h1 className="font-extrabold text-center text-3xl tracking-tight  sm:px-3 sm:text-4xl md:max-w-xl md:mx-auto lg:px-5 2xl:max-w-4xl">
          Tailored Solutions
        </h1>
        <p className="max-w-lg text-xl leading-relaxed">
        Create a tool that helps practitioners adjust medication dosages based on the patient&apos; s age, gender, and constitution (Prakriti)
        </p>
      </div>
      <div className="grid grid-cols-2 mt-5 gap-y-5 sm:gap-y-0 lg:mx-auto lg:max-w-6xl">
        <div className="col-span-2 sm:col-span-1">
          <Image
            height="500"
            width="500"
            alt="alt"
            className="w-full"
            src="/about.png"
          />
        </div>
        <div className="col-span-2 px-3 pb-3 dark2f-slate-700 f-gray-50 sm:col-span-1 sm:flex sm:flex-col sm:justify-center sm:pl-7 sm:f-t lg:f-r">
          <h1 className="font-extrabold text-xl">Ayurvedic Medicine Finde</h1>
          <p className="max-w-lg mt-3 text-xl leading-relaxed md:mt-8">
          Our Ayurvedic Medicine Finder is your key to unlocking personalized treatment solutions. Designed for practitioners and patients alike, our platform harnesses the wisdom of Ayurveda to provide tailored medicine recommendations based on your unique symptoms. Say goodbye to the guesswork and discover precise Ayurvedic remedies crafted just for you. Experience holistic healing, one symptom at a time.
          </p>
        </div>
        <div className="col-span-2 px-3 pb-3 order-3 dark2f-slate-700 f-gray-50 sm:col-span-1 sm:flex sm:flex-col sm:justify-center sm:pl-7 sm:order-none sm:f-b lg:f-l">
          <h1 className="font-extrabold text-xl">
          Ayurvedic Health Insights
          </h1>
          <p className="max-w-lg mt-3 text-xl leading-relaxed md:mt-8">
          Our Ayurvedic Health Insights platform revolutionizes your well-being journey by providing comprehensive insights into your health. Much like financial dashboards for businesses, our Ayurvedic health dashboards consolidate your key health indicators in one place, offering real-time snapshots of your well-being. These visual representations empower you to make informed decisions, identify areas for improvement, and take proactive steps to enhance your health. Harness the power of Ayurveda with clear, actionable insights. Your path to holistic health starts here.
          </p>
        </div>
        <div className="col-span-2 order-2 sm:col-span-1 sm:order-none">
          <Image
            height="500"
            width="500"
            alt="alt"
            className="w-full"
            src="/desktop person.png"
          />
        </div>
      </div>
    </div>
  );
};
