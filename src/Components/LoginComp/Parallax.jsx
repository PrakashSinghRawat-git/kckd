import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Parallax = () => {
  const [scrollValue, setScrollValue] = useState(0);
  const textRef = useRef(null);
  const leafRef = useRef(null);
  const hill1Ref = useRef(null);
  const hill4Ref = useRef(null);
  const hill5Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;
      setScrollValue(value);

      if (textRef.current) {
        textRef.current.style.marginTop = value * 1.5 + "px";
      }

      if (leafRef.current) {
        leafRef.current.style.top = value * -0.5 + "px";
        leafRef.current.style.left = value * 0.5 + "px";
      }

      if (hill5Ref.current) {
        hill5Ref.current.style.left = value * 0.5 + "px";
      }

      if (hill4Ref.current) {
        hill4Ref.current.style.left = value * -0.5 + "px";
      }

      if (hill1Ref.current) {
        hill1Ref.current.style.top = value * 0.3 + "px";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollValue]);

  return (
    <>
      <Head>
        <style>{`
       header {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding: 30px 100px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        z-index: 10;
    }
    
    .logo {
        font-size: 2em;
        color: #359381;
        pointer-events: none;
        margin-right: 270px;
    }
    
    .navigation a {
        text-decoration: none;
        color: #359381;
        padding: 6px 15px;
        border-radius: 20px;
        margin: 0 10px;
        font-weight: 600;
    }
    
    .navigation a:hover,
    .navigation a:active {
        background: #359381;
        color: #fff;
    }
    
    .parallax {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    
    #text {
        position: absolute;
        font-size: 5em;
        color: #fff;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
    }
    
    .parallax img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        pointer-events: none;
    }
    
    
    .sec {
        margin-top: -80px;
        position: relative;
        background: #003329;
        padding: 40px;
    }
    
    .sec h2 {
        font-size: 3em;
        color: #fff;
        margin-bottom: 10px;
    }
    
    .sec p {
        font-size: 1em;
        color: #fff;
        font-weight: 300;
    }
       `}</style>
      </Head>

      <section className="parallax">
        <Image
          height={700}
          width={900}
          src="/parallax/hill1.png"
          ref={hill1Ref}
          alt={1}
        />
        <Image height={700} width={900} src="/parallax/hill2.png" alt={2} />
        <Image height={700} width={900} src="/parallax/hill3.png" alt={3} />
        <Image
          height={700}
          width={900}
          src="/parallax/hill4.png"
          ref={hill4Ref}
          alt={4}
        />
        <Image
          height={700}
          width={900}
          src="/parallax/hill5.png"
          ref={hill5Ref}
          alt={5}
        />
        <Image height={700} width={900} src="/parallax/tree.png" alt={6} />
        <h2 id="text" ref={textRef}>
          Vital Roots
        </h2>
        <Image
          height={700}
          width={900}
          src="/parallax/leaf.png"
          id="leaf"
          ref={leafRef}
          alt={7}
        />
        <Image
          height={700}
          width={900}
          src="/parallax/plant.png"
          id="hills"
          alt={8}
        />
      </section>
      <section className="sec">
        <h2>Vital Roots</h2>
        <p>
          Science of Ayurveda Ayurveda is not just an Ancient Indian Medical
          system, but a complete guide to healthy living. It has been around for
          several thousands of years and has stood through the test of time.
          Ayurvedic physicians were doing surgeries and other complex medical
          procedures long back– while in modern science its a very recent
          phenomenon. The vedic philosophy believes that the entire universe is
          one – whether it is human beings, animals, plans or non-animate
          objects. Hence, there is interdependence on each other. Ayurveda
          believes in creating hamony of the human body-mind-soul with the
          surrounding and nature. Hence, the focus of Ayuveda extends far beyond
          healing physical ailments but to mental and spiritual realms of
          helping a person attain the highest self realistion. REPLACE WITH
          FINANCIAL ANALYSIS Panchakarma treatments panchakarma Panchakarma is a
          powerful method of purification and treatment in Ayurveda. <br /> <br /> As the name
          suggests, it is a set of five therapies designed to cleanse the body
          of toxins. These therapies are- Vaman: Refers to medicine induced
          emesis. Here, vomiting is induced which helps eliminate toxins from
          the tissues. It is generally used in the treatment of Kapha-dominated
          illnesses. Virechanam: Refers to medicine induced purgation. It
          focuses on removal of toxins through evacuation of the bowels. It is
          applied in the treatment of pitta-dominated ailments such as herpes,
          jaundice, colitis etc. Basti: Refers to medicated enema. Enema is one
          of the many contributions of Ayurveda to medicine and has proved to be
          extremely effective for a variety of medical conditions. Herbal
          mixtures made out of oils, ghee, milk, etc are administered into the
          rectum.
        </p>
      </section>
    </>
  );
};

export default Parallax;
