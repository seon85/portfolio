"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function About() {
  const about = useRef(null);
  const aboutTit = useRef(null);
  const secp = useRef(null);
  const exp = useRef(null);
  const expNumber = useRef(null);
  const expTxt = useRef(null);
  const [expN, setexpN] = useState(false);
  const [expT, setexpT] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(aboutTit.current, {
      y: 0,
      opacity: 1,
      // ease: "power3.inOut",
      scrollTrigger: {
        trigger: about.current,
        scrub: 1,
        start: "0 90%",
        end: "30% 30%",
        pin: false,
        //markers: true
      },
    });

    gsap.from(secp.current, {
      //y: 0,
      autoAlpha: 0,
      rotateX: 360,
      scale: 0.2,
      // ease: 'power4.out',
      scrollTrigger: {
        trigger: about.current,
        //scrub: 1.5,
        scrub: 0.5,
        start: "5% 70%",
        end: "80% 80%",
        pin: false,
        //markers: true,
      },
    });

    gsap.to(exp.current, {
      y: 0,
      opacity: 1,
      // ease: "power3.inOut",
      scrollTrigger: {
        trigger: about.current,
        //scrub: 1,
        scrub: 0.5,
        start: "75% 75%",
        end: "75% 75%",
        pin: false,
        //markers: true
      },
      onStart: () => {
        setexpN(!expN);
        setexpT(!expT);
      },
      onReverseComplete: () => {
        setexpN(expN);
        setexpT(expT);
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={styles.about} ref={about}>
        <div className={styles.inner}>
          <div className={styles.tit} ref={aboutTit}>
            <h3>Title</h3>
            <p>text text</p>
          </div>
          <div ref={secp} className={styles.txt}>
            <p>Hi, I&apos;m Callum Smith</p>
            <p>
              I&apos;m a designer & developer with a passion for web design. I
              enjoy developing simple, clean and slick websites that provide
              real value to the end user. Thousands of clients have procured
              exceptional results while working with me. Delivering work within
              time and budget which meets client’s requirements is our moto.
            </p>
          </div>
          <div className={styles.exp} ref={exp}>
            <div
              className={`${styles.expnumber} ${expN ? styles.heartBeat : ""}`}
              ref={expNumber}
            >
              10
            </div>
            <div
              className={`${styles.exptxt} ${expT ? styles.rubberBand : ""}`}
              ref={expTxt}
            >
              Years of <strong>Experiance</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
