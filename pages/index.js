'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
//import { AnimatePresence } from 'framer-motion';
// import Header from '../components/Header';
//import Preloader from '../components/Preloader';
import Landing from '../components/Landing';
import About from '../components/About';
import Projects from '../components/Projects';
import SlidingImages from '../components/SlidingImages';
import Contact from '../components/Contact';
import { useRouter } from 'next/router';
import Curve from '@/components/Layout/index';
// import { motion } from 'framer-motion';

// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const slideUp = {
//   initial: {
//     y: 500,
//   },
//   enter: {
//     y: 0,
//     transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.5 },
//   },
// };

export default function Home() {
  const nameInput = useRef(null);
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        //setIsLoading(false);
        //document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 15);
    })();
    // const handleRouteChange = (url, { shallow }) => {
    //   document.body.classList.add('main_hidden');
    //   setTimeout(() => {
    //     document.body.classList.remove('main_hidden');
    //   }, 500);
    // };
    // router.events.on('routeChangeStart', handleRouteChange);
    // // If the component is unmounted, unsubscribe
    // // from the event with the `off` method:
    // return () => {
    //   router.events.off('routeChangeStart', handleRouteChange);
    // };
  }, []);

  // useLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.to(nameInput.current, 1, {
  //     x: 45,
  //     rotation: 50,

  //     scrollTrigger: {
  //       trigger: nameInput.current,
  //       start: "center 50%",
  //       end: "bottom 50%",
  //       markers: false,
  //       pin: false,
  //       scrub: 2,
  //       ease: "power3.inOut",
  //     },
  //   });
  // });
  return (
    <>
      <Head>
        {/* <title>선종혁의 웹 포트폴리오</title> */}
        <title>메인</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="웹 퍼블리셔 선종혁의 포트폴리오 사이트입니다. 저의 소개와 그동안 진행했던 프로젝트를 확인하실 수 있습니다."
        />
        <meta
          name="keywords"
          content="웹퍼블리셔, 경력 웹퍼블리셔, 웹퍼블리셔 포트폴리오, UI, UX, 마크업 개발자, UI 개발자 ,HTML, CSS, JavaScript"
        />

        <meta name="og:site_name" content="웹 퍼블리셔 선종혁의 포트폴리오" />
        <meta name="og:title" content="웹 퍼블리셔 선종혁의 포트폴리오" />
        <meta
          name="og:description"
          content="웹 퍼블리셔 선종혁의 포트폴리오 사이트입니다. 저의 소개와 그동안 진행했던 프로젝트를 확인하실 수 있습니다."
        />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="" />
        <meta name="og:url" content="/images/og_img.jpg" />
        <meta name="twitter:card" content="card" />
        <meta name="twitter:title" content="웹 퍼블리셔 선종혁의 포트폴리오" />
        <meta
          name="twitter:description"
          content="웹 퍼블리셔 선종혁의 포트폴리오 사이트입니다. 저의 소개와 그동안 진행했던 프로젝트를 확인하실 수 있습니다."
        />
        <meta name="twitter:image" content="" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Curve>
        {/* <AnimatePresence mode="wait">{isLoading && <Preloader />}</AnimatePresence> */}
        {/* <Header /> */}
        <Landing />
        <About />
        <Projects />
        <SlidingImages />
        <Contact />
      </Curve>
    </>
  );
}
