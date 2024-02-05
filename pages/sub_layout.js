import Style from '../styles/sub.module.scss';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

export default function Layout({ children }) {
  const main = useRef(null);
  const router = useRouter();
  const [load, setLoad] = useState(false);

  const slideUp = {
    initial: {
      y: 100,
      opacity: 0,
    },
    enter: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 1.5 },
    },
  };

  useEffect(() => {
    if (router.pathname != '/' && load == false) {
      // 메인페이지가 아니라면
      //gsap.set(main.current, { y: "20%" });
      // gsap.set(main.current, { top: '100px' });
      // gsap.to(main.current, {
      //   delay: 1,
      //   //y: "0%",
      //   top: 0,
      //   duration: 1,
      //   opacity: 1,
      //   ease: 'power3.inOut',
      // });
    }

    setLoad(!load);
  }, []);

  return (
    <>
      <main className={Style.main_container} ref={main}>
        <Header />
        <motion.div variants={slideUp} initial="initial" animate="enter">
          {children}
        </motion.div>
        <Footer />
      </main>
    </>
  );
}
