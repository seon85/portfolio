'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Rounded from '../../common/RoundedButton';

export default function About() {
  const about = useRef(null);
  const aboutTit = useRef(null);
  const secp = useRef(null);
  const exp = useRef(null);
  const expNumber = useRef(null);
  const expTxt = useRef(null);
  const btnAbout = useRef(null);
  const [expN, setexpN] = useState(false);
  const [expT, setexpT] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(aboutTit.current, {
      y: 0,
      opacity: 1,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: about.current,
        //scrub: 1,
        start: '3% 100%',
        end: '17% 60%',
        pin: false,
        //markers: true,
      },
    });

    gsap.to(secp.current, {
      y: 0,
      opacity: 1,
      // autoAlpha: 0,
      // rotateX: 360,
      // scale: 0.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: about.current,
        //scrub: 1.5,
        //scrub: 0.5,
        start: '40% 70%',
        end: '80% 80%',
        pin: false,
        //markers: true,
      },
    });

    gsap.to(exp.current, {
      y: 0,
      opacity: 1,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: about.current,
        //scrub: 1,
        //scrub: 0.5,
        start: '60% 80%',
        end: '95% 95%',
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

    gsap.to(btnAbout.current, {
      y: 0,
      opacity: 1,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: about.current,
        //scrub: 1,
        //scrub: 0.5,
        start: '80% 80%',
        end: '100% 100%',
        pin: false,
        //markers: true
      },
    });
  }, []);

  return (
    <>
      <div className={styles.about} ref={about}>
        <div className={styles.inner}>
          <div className={styles.tit} ref={aboutTit}>
            <h3>About Me</h3>
            <p>Know Me More</p>
          </div>
          <div ref={secp} className={styles.txt}>
            <p>
              안녕하세요, Web Publisher <span> 선종혁입니다.</span>
            </p>
            <p>저는 웹 디자인에 대한 열정을 가진 디자이너이자 개발자입니다.</p>
            <p>
              최종 사용자에게 실질적인 가치를 제공하는 간단하고 깨끗하고 매끄러운 웹사이트를 개발하는 것을 즐깁니다.
              수천 명의 고객이 나와 함께 일하면서 탁월한 결과를 얻었습니다.
            </p>
            <p>고객의 요구 사항을 충족하는 시간과 예산 내에서 작업을 제공하는 것이 우리의 모토입니다.</p>
          </div>
          <div className={styles.exp} ref={exp}>
            <div className={`${styles.expnumber} ${expN ? styles.heartBeat : ''}`} ref={expNumber}>
              13
            </div>
            <div className={`${styles.exptxt} ${expT ? styles.rubberBand : ''}`} ref={expTxt}>
              Years of <strong>Experiance</strong>
            </div>
          </div>
          <div className={styles.btm} ref={btnAbout}>
            <Rounded>
              <Link href="/about" scroll={false} className={styles.moreAbout}>
                Go More About Page 👉
              </Link>
            </Rounded>
          </div>
        </div>
      </div>
    </>
  );
}
