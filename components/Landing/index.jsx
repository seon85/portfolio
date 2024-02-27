'use client';
import Image from 'next/image';
import styles from '@/styles/style.module.scss';
import { useRouter } from 'next/router';
import { useRef, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { slideUp } from './animation';
import { motion } from 'framer-motion';

export default function Landing() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  const landing = useRef(null);
  const create = useRef(null);
  const apc = useRef(null);
  const apm = useRef(null);
  const apr = useRef(null);
  const apo = useRef(null);
  const moon = useRef(null);
  const code = useRef(null);
  const cir = useRef(null);
  const router = useRouter();
  let xPercent = 0;
  let direction = -1;
  let myReq;

  let gs1 = null,
    gs2 = null,
    gs3 = null,
    gs4 = null,
    gs5 = null,
    gs6 = null;

  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);
    // gsap.to(slider.current, {
    //   scrollTrigger: {
    //     trigger: document.documentElement,
    //     scrub: 0.25,
    //     start: 0,
    //     end: window.innerHeight,
    //     onUpdate: e => (direction = e.direction * -1),
    //   },
    //   x: '-500px',
    // });
    //myReq = requestAnimationFrame(animate);
    //cancelAnimationFrame(myReq);
    // const handleRouteChange = (url, { shallow }) => {
    //   cancelAnimationFrame(myReq);
    // };
    // router.events.on('routeChangeStart', handleRouteChange);
    // return () => {
    //   router.events.off('routeChangeStart', handleRouteChange);
    // };

    const sectionContent = document.querySelectorAll(`.` + styles.landing + `>p`);

    const start1 = () => {
      gs2 = gsap.from(apm.current, {
        delay: 1.3,
        //opacity: 1,
        autoAlpha: 1,
        //repeat: -1,
        //yoyo: true,
        duration: 0.5,
        onComplete: () => {
          start1();
        },
      });
    };

    const start2 = () => {
      gs3 = gsap.from(moon.current, {
        delay: 1.3,
        autoAlpha: 0,
        // repeat: -1,
        duration: 0.5,
        // yoyo: true,
        onComplete: () => {
          start2();
        },
      });
    };

    const start3 = () => {
      gs4 = gsap.from(apr.current, {
        delay: 2,
        //opacity: 1,
        autoAlpha: 1,
        //repeat: -1,
        //yoyo: true,
        duration: 0.5,
        onComplete: () => {
          start3();
        },
      });
    };

    const start4 = () => {
      gs5 = gsap.from(code.current, {
        delay: 2,
        autoAlpha: 0,
        // repeat: -1,
        duration: 0.5,
        // yoyo: true,
        onComplete: () => {
          start4();
        },
      });
    };

    const start5 = () => {
      gs6 = gsap.to(cir.current, {
        delay: 2,
        width: '35%',
        repeat: 1,
        yoyo: true,
        duration: 1,
        onStart: () => {
          // gsap.to(apo.current, {
          //   autoAlpha: 0,
          //   repeat: 1,
          //   yoyo: true,
          //   duration: 0.5,
          // });
        },
        onComplete: () => {
          start5();
        },
      });
    };

    gsap.to(sectionContent, {
      y: 0,
      opacity: 1,
      ease: 'elastic.out(1, 0.75)',
      duration: gsap.utils.random(3, 2),
      delay: 1,
      //rotateX: 360,
      stagger: 0.2,
      //duration: 4,
      onStart: () => {
        gs1 = gsap.to(apc.current, {
          delay: 1,
          rotateX: 360,
          repeat: -1,
          yoyo: true,
        });

        start1();
        start2();
        start3();
        start4();
        start5();

        //setInterval(start1, 1000);
        // gsap.to(moon.current, {
        //   delay: 3,
        //   opacity: 1,
        //   repeat: -1,
        //   yoyo: true,
        //   duration: 0.5,
        //   display: 'none',
        // });
        // gsap.from(apm.current, {
        //   delay: 2,
        //   opacity: 1,
        //   repeat: -1,
        //   yoyo: true,
        //   duration: 0.5,
        //   onComplete: () => {},
        // });
        // gsap.to(create.current, {
        //   color: '#0072ce',
        //   repeat: -1,
        //   yoyo: true,
        // });
      },
    });

    const handleRouteChange = (url, { shallow }) => {
      setTimeout(() => {
        //gsap.kill();
        //gsap.getAll().forEach(t => t.kill());
        gs1.kill();
        gs2.kill();
        gs3.kill();
        gs4.kill();
        gs5.kill();
        gs6.kill();
      }, 500);
    };
    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  // const animate = () => {
  //   if (xPercent < -100) {
  //     xPercent = 0;
  //   } else if (xPercent > 0) {
  //     xPercent = -100;
  //   }
  //   gsap.set(firstText.current, { xPercent: xPercent });
  //   gsap.set(secondText.current, { xPercent: xPercent });
  //   myReq = requestAnimationFrame(animate);
  //   xPercent += 0.1 * direction;
  // };

  return (
    <motion.div className={styles.landing} ref={landing}>
      <p>
        Hello there
        <span className={styles.q_mark1}>.</span>
        <span className={styles.q_mark2}>.</span>
        <span className={styles.q_mark3}>.</span>
      </p>
      <p>
        <span className={styles.ap_create}>
          I A
          <span className={styles.in_ico}>
            <span className={styles.apm} ref={apm}>
              m
            </span>
            <span className="material-symbols-outlined moon-bg" ref={moon}>
              nightlight
            </span>
          </span>
        </span>
        Passionate
      </p>
      <p>
        EXPERIEN
        <span className={styles.apc} ref={apc}>
          C
        </span>
        ES
      </p>
      <p>
        <span className={styles.in_ico}>
          <span className={styles.apm} ref={apr}>
            D
          </span>
          <span className="material-symbols-outlined ico-code-block" ref={code}>
            code
          </span>
        </span>
        EVEL
        <span className={`${styles.in_ico} ${styles.cir}`} ref={cir}>
          <span className={styles.apo} ref={apo}>
            O
          </span>
          <span className={styles.t_circle}></span>
        </span>
        PER
      </p>
      {/* <Image src="/images/visual1.webp" fill={true} alt="background" />
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Web Publisher -</p>
          <p ref={secondText}>Web Publisher -</p>
        </div>
      </div>
      <div data-scroll data-scroll-speed={0.1} className={styles.description}>
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
            fill="white"
          />
        </svg>
        <p>Web Publisher</p>
        <p>Seon Jong Hyuk</p>
      </div> */}
    </motion.div>
  );
}
