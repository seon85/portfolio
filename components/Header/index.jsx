'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Rounded from '../../common/RoundedButton';
import Magnetic from '../../common/Magnetic';

export default function Header() {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useEffect(() => {
    //ScrollTrigger.getAll().forEach(t => t.kill());
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      //scale: 1,
      duration: 0.25,
      ease: 'power3.inOut',
      scrollTrigger: {
        //scrub: 1,
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        markers: false,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: 'power1.out',
          });
        },
        onEnterBack: () => {
          gsap.to(button.current, { scale: 0, duration: 0.25, ease: 'power1.out' }, setIsActive(false));
        },
      },
    });
  });

  return (
    <>
      <div ref={header} className={styles.header}>
        <Link href="/" className={styles.logo}>
          <p className={styles.copyright}>©</p>
          <div className={styles.name}>
            <p className={styles.codeBy}>Code by</p>
            <p className={styles.dennis}>Seon</p>
            <p className={styles.snellenberg}>JongHyuk</p>
          </div>
        </Link>
        <div className={styles.nav}>
          <Magnetic>
            <div className={styles.el}>
              <Link href="/about">About</Link>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={styles.el}>
              <Link href="/portfolio">Portfolio</Link>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={styles.el}>
              <Link href="/contact">Contact</Link>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
        </div>
      </div>
      <div ref={button} className={styles.headerButtonContainer}>
        <Rounded
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`${styles.button}`}>
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}></div>
        </Rounded>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
