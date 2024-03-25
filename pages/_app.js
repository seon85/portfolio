import '@/styles/globals.scss';
import { useEffect, useLayoutEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
//import { useRouter } from "next/router"
import { AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function App({ Component, pageProps, router }) {
  //const router = useRouter();

  // useEffect(() => {
  //   if (router.pathname == '/') {
  //     console.log('/');
  //     document.body.classList.add('main_hidden');
  //   } else {
  //     //document.body.classList.remove('main_hidden');
  //   }
  // });

  useLayoutEffect(() => {
    //const top = document.querySelector('body').getBoundingClientRect().top;
    //window.scrollTo(0, top);
    window.scrollTo(0, 0);
    //console.log('a');

    const handleRouteComplete = (url, { shallow }) => {
      setTimeout(() => {
        window.scrollTo(0, 0);
        //console.log('comp');
      }, 600);
    };

    router.events.on('routeChangeComplete', handleRouteComplete);
    return () => {
      router.events.off('routeChangeComplete', handleRouteComplete);
    };
  }, [router]);

  // useEffect(() => {
  //   const handleRouteComplete = (url, { shallow }) => {
  //     setTimeout(() => {
  //       window.scrollTo(0, 0);
  //       //console.log('comp');
  //     }, 1500);
  //   };
  //   router.events.on('routeChangeComplete', handleRouteComplete);
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteComplete);
  //   };
  // }, [router]);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();

    window.scrollTo(0, 0);

    setTimeout(() => {
      //  window.history.scrollRestoration = 'manual';
      //const top = document.querySelector('body').getBoundingClientRect().top;
      //window.scrollTo(0, top);
      window.scrollTo(0, 0);
      //console.log('top');
    }, 500);

    const handleRouteChange = (url, { shallow }) => {
      // console.log(
      //   `App is changing to ${url} ${
      //     shallow ? "with" : "without"
      //   } shallow routing`
      // );
      //localStorage.removeItem('load');
      ScrollTrigger.getAll().forEach(t => t.kill());
    };

    router.events.on('routeChangeStart', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);
  return (
    <>
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
