'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/style.module.scss';
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
        start: '30% 70%',
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
              안녕하세요🖐, Web Publisher <span className="highlight">선종혁입니다.</span>
            </p>
            <p>
              저는 세련되고 현대적인 웹사이트, 웹 서비스에 관심이 많으며 하루하루 변화하는 최신 동향과 기술을 지속적으로
              학습하고 관심을 가지고 있습니다. 이를 바탕으로 자기개발의 힘쓰고 있으며,{' '}
              <strong className="highlight"> &lsquo;최고의 퍼포먼스 개발자&rsquo;</strong> 로 성장하고자 노력하고
              있습니다.
            </p>
            <p>웹 포트폴리오에서 그동안 제가 진행했던 프로젝트를 확인하실 수 있습니다.</p>
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
                About Me 👉
              </Link>
            </Rounded>
          </div>
        </div>
      </div>
    </>
  );
}
