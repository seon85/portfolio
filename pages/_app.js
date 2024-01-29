import '@/styles/globals.scss';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
//import { useRouter } from "next/router"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();

    const handleRouteChange = (url, { shallow }) => {
      // console.log(
      //   `App is changing to ${url} ${
      //     shallow ? "with" : "without"
      //   } shallow routing`
      // );
      localStorage.removeItem('load');
      ScrollTrigger.getAll().forEach(t => t.kill());
    };

    router.events.on('routeChangeStart', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);
  return <Component {...pageProps} />;
}
