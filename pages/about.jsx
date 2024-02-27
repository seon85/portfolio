'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from '@/styles/style.module.scss';
import Layout from './sub_layout';
import { useRouter } from 'next/router';
import Head from 'next/head';
import PageLoading from '../components/pageLoading';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Curve from '@/components/Layout/index';
// import { slideUp } from './slideup';
import { motion } from 'framer-motion';

const slideUp = {
  initial: {
    y: 500,
  },
  enter: {
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.5 },
  },
};

export default function About() {
  const overImg = useRef(null);
  const aboutTxt = useRef(null);
  const expe = useRef(null);
  const expeTit = useRef(null);
  const abtMe = useRef(null);
  const meTit = useRef(null);
  const meTxt = useRef(null);
  const meInfo = useRef(null);

  const router = useRouter();
  let mm = gsap.matchMedia();

  useEffect(() => {
    // setTimeout(() => {
    //   window.scrollTo(0, 0);
    // }, 500);

    //document.querySelector('body').style.background = 'rgb(255, 255, 255)';

    //document.querySelector('.' + styles.container).getBoundingClientRect();

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);

    const sectionContent = document.querySelectorAll(`.` + styles.exp_box);

    gsap.registerPlugin(ScrollTrigger);

    // gsap.to(expe.current, {
    //   scrollTrigger: {
    //     trigger: expe.current,
    //     scrub: 0.1,
    //     start: '-30% 50%',
    //     end: window.innerHeight,
    //     //end: '+=30%',
    //     //markers: true,
    //     onLeave: () => {
    //       gsap.to(document.querySelector('body'), {
    //         backgroundColor: '#e9eaeb',
    //       });
    //     },
    //     onEnterBack: () => {
    //       gsap.to(document.querySelector('body'), {
    //         backgroundColor: '#fff',
    //       });
    //     },
    //   },
    // });

    gsap.to(meTit.current, {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: abtMe.current,
        start: '10% 80%',
        end: '50% 90%',
        // markers: true,
        //end: window.innerHeight,
        //scrub: 2,
      },
    });

    gsap.to(meTxt.current, {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: abtMe.current,
        start: '10% 70%',
        end: '50% 90%',
      },
    });

    gsap.to(meInfo.current, {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: abtMe.current,
        start: '30% 70%',
        end: '50% 90%',
      },
    });

    gsap.to(expeTit.current, {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: expe.current,
        start: '10% 80%',
        end: '50% 90%',
        // markers: true,
        //end: window.innerHeight,
        //scrub: 2,
      },
    });

    gsap.to(sectionContent, {
      stagger: 0.1,
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: expe.current,
        start: '10% 70%',
        end: '50% 90%',
        //end: window.innerHeight,
        //scrub: 2,
      },
    });

    mm.add('(min-width: 1000px)', () => {
      gsap.to(aboutTxt.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.5,
          start: 0,
          //end: '+=100%',
        },
        y: '200px',
      });

      gsap.to(overImg.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.5,
          start: 0,
          //end: '+=100%',
        },
        y: '-500px',
      });
    });

    mm.add('(max-width: 999px)', () => {
      gsap.to(aboutTxt.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.5,
          start: 0,
          //end: '+=100%',
        },
        y: '-30px',
      });

      gsap.to(overImg.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.5,
          start: 0,
          //end: '+=100%',
        },
        y: '-160px',
      });
    });

    let timeOutFunctionId;
    function workAfterResizeIsDone() {
      ScrollTrigger.refresh();
    }
    window.addEventListener('resize', function () {
      clearTimeout(timeOutFunctionId);
      timeOutFunctionId = setTimeout(workAfterResizeIsDone, 200);
    });

    const handleRouteChange = (url, { shallow }) => {
      setTimeout(() => {
        mm.kill();
      }, 500);
      document.querySelector('body').style = '';
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);
  return (
    <>
      {/* <PageLoading /> */}
      <Head>
        {/* <title>About | 선종혁의 웹 포트폴리오</title> */}
        <title>About</title>
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
        <motion.div className={styles.container} variants={slideUp} initial="initial" animate="enter">
          <h2 className={styles.subTit}>Know Me More</h2>
          {/* <div style={{ height: '500px' }}></div> */}
          <div className={styles.sub_about}>
            <div className={styles.aboutTxt} ref={aboutTxt}>
              <p>협력적인 소통능력</p>
              <p>열정과 내재된 가능성</p>
              <p>능독적인 업무자세</p>
              <p>사고적 유연성</p>
            </div>
            <div className={styles.overWrap}>
              <div className={styles.over} ref={overImg}></div>
            </div>
          </div>
          <div className={styles.abt_me} ref={abtMe}>
            <h3 ref={meTit}>
              안녕하세요
              <span className={styles.q_mark1}>!</span>
              <span className={styles.q_mark2}>!</span>
              <span className={styles.q_mark3}>!</span>
            </h3>
            <div ref={meTxt} className={styles.me_txt}>
              <p>
                저는 세련되고 현대적인 웹사이트, 웹 서비스, 온라인 상점 제작을 전문으로 하며 모든 규모의 고객을 위한
                서비스를 디자인하고 개발합니다.
              </p>
              <p>
                나의 열정은 대담한 인터페이스와 의미 있는 상호 작용을 통해 디지털 사용자 경험을 디자인하는 것입니다.
              </p>
              <p>저의 포트폴리오 사이트에서 그동안 진행했던 프로젝트를 확인하실 수 있습니다.</p>
            </div>
            <ul className={styles.abt_me_info} ref={meInfo}>
              <li>
                <span className={styles.me_t1}>이름</span>
                <span className={styles.me_t2}>선종혁</span>
              </li>
              <li>
                <span className={styles.me_t1}>생년월일</span>
                <span className={styles.me_t2}>1985.07.01.</span>
              </li>
              <li>
                <span className={styles.me_t1}>나이</span>
                <span className={styles.me_t2}>38세</span>
              </li>
              <li>
                <span className={styles.me_t1}>경력</span>
                <span className={styles.me_t2}>13년</span>
              </li>
              <li>
                <span className={styles.me_t1}>거주지</span>
                <span className={styles.me_t2}>경기도 의왕시</span>
              </li>
              <li>
                <span className={styles.me_t1}>MBTI</span>
                <span className={styles.me_t2}>ISFJ</span>
              </li>
              <li>
                <span className={styles.me_t1}>이메일 주소</span>
                <span className={styles.me_t2}>wleks85@gmail.com</span>
              </li>
              <li>
                <span className={styles.me_t1}>연락처</span>
                <span className={styles.me_t2}>010 - 0000 - 0000</span>
              </li>
            </ul>
          </div>
          <div className={styles.expe} ref={expe}>
            <h3 ref={expeTit}>
              제가 이런 걸 좀{' '}
              <span className={styles.m_br}>
                할 줄 압니다.
                <span className={`${styles.q_mark1} ${styles.mr}`}>👍</span>
                <span className={`${styles.q_mark2} ${styles.mr}`}>👍</span>
                <span className={`${styles.q_mark3} ${styles.mr}`}>✌</span>
              </span>
            </h3>
            <div className={styles.exp_list}>
              <div className={styles.exp_box}>
                <h4>
                  <div className={styles.num}>01</div>
                  Design
                </h4>
                <p>
                  디자이너의 의도를 보다 정확하게 파악하면서 마크업을 진행하는게 중요하다고 생각하며 디자이너가 원하는
                  디테일을 고려하여 웹사이트를 마크업 합니다. 또한 Photoshop / Adobe XD / Figma 활용하여 편집 작업을 할
                  수 있습니다.
                </p>
              </div>
              <div className={styles.exp_box}>
                <h4>
                  <div className={styles.num}>02</div>
                  Development
                </h4>
                <p>
                  Semantic Tag를 이해하며 명시적이면서 직관적인 구조의 설계를 지향하며, 웹 접근성과 SEO를 고려하여
                  마크업을 하고 있습니다. 또한 SCSS 사용하여 코드의 재활용성을 올리고, 유지보수를 용이하게 하며
                  JavaScript / JQuery / GSAP를 이용한 UI 구현 및 애니메이션 모션 효과를 주어 역동적인 웹사이트를
                  구축합니다. 또한 Git / SVN을 사용하여 파일 형상관리를 했습니다.
                </p>
              </div>
              <div className={styles.exp_box}>
                <h4>
                  <div className={styles.num}>03</div>
                  Communication
                </h4>
                <p>
                  커뮤니케이션은 팀워크가 작동하도록 하는 윤활유와 같다고 생각합니다. 팀원들이 능력을 최대한 발휘하고,
                  역량을 넓히고, 경력을 개발하는 일을 도울 수 있습니다. 또한 부서 간 협업 참여자에게 업무를 원활하게
                  진행하는 데 매우 중요합니다. 협력하고 커뮤니케이션할 수 있는 명확한 방법이 없다면 팀이 고립되고 업무가
                  누락될 수 있기 때문에 커뮤니케이션이 원할하다면 어떤 일이든 해낼 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Curve>
    </>
  );
}
