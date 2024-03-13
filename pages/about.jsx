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
  const drawingSvg1 = useRef(null);

  const career = useRef(null);
  const careerTit = useRef(null);

  const router = useRouter();
  let mm = gsap.matchMedia();

  useEffect(() => {
    // setTimeout(() => {
    //   window.scrollTo(0, 0);
    // }, 500);

    //document.querySelector('body').style.background = 'rgb(255, 255, 255)';

    //document.querySelector('.' + styles.container).getBoundingClientRect();

    setTimeout(() => {
      //console.log(ScrollTrigger.getAll());
      ScrollTrigger.refresh();
    }, 1000);

    const sectionContent = document.querySelectorAll(`.` + styles.exp_box);
    const careerList = document.querySelectorAll(`.` + styles.car_list);

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

    // gsap.to(meTxt.current, {
    //   opacity: 1,
    //   y: 0,
    //   scrollTrigger: {
    //     trigger: abtMe.current,
    //     start: '10% 70%',
    //     end: '50% 90%',
    //   },
    // });

    gsap.to(meInfo.current, {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: abtMe.current,
        start: '10% 70%',
        end: '50% 90%',
      },
    });

    gsap.to(careerTit.current, {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: career.current,
        start: '20% 80%',
        end: '50% 90%',
        // markers: true,
        //end: window.innerHeight,
        //scrub: 2,
      },
      onStart: () => {
        drawingSvg1.current.classList.add('active');
      },
    });

    gsap.to(careerList, {
      stagger: 0.2,
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: career.current,
        start: '30% 80%',
        end: '70% 90%',
        //end: window.innerHeight,
        //scrub: 2,
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
        y: '300px',
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
      //document.querySelector('body').style = '';
      //ScrollTrigger.getAll().forEach(t => t.kill());
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
              간단한 저의 소개
              <span className={styles.q_mark1}>!</span>
              <span className={styles.q_mark2}>!</span>
              <span className={styles.q_mark3}>!</span>
            </h3>
            <div ref={meTxt} className={styles.me_txt}>
              {/* <p>
                저는 세련되고 현대적인 웹사이트, 웹 서비스에 관심이 많으며 하루하루 변화하는 최신 동향과 기술을
                지속적으로 학습하고 관심을 가지고 있습니다. 이를 바탕으로 자기개발의 힘쓰고 있으며,
                <strong className="highlight"> &lsquo;최고의 퍼포먼스 개발자&rsquo;</strong> 로 성장하고자 노력하고
                있습니다.
              </p>
              <p>웹 포트폴리오에서 그동안 제가 진행했던 프로젝트를 확인하실 수 있습니다.</p> */}
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
          <div className={styles.career} ref={career}>
            <h3 ref={careerTit}>
              저의 경력은요
              <span className={styles.q_mark1}>?</span>
              <span className={styles.q_mark2}>?</span>
              <span className={styles.q_mark3}>?</span>
            </h3>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 280 303"
              xmlSpace="preserve"
              className="drawing_svg1"
              ref={drawingSvg1}
              width="280"
              height="303">
              <path
                className="st0 svg-elem-1"
                d="M169.1,293.7C156,291,143,293,130,291c-11-7-13-22-7-33c7-13,24-18,35-9c3,3,5,8,4,12s-2,8-6,10
	c-6,3-12,6-18,1c-9-19-3-40,3-59c3-10,6-19,13-28c7-8,14-15,22.8-21.1c-0.6,1.9-2.5-0.1,0,0c-0.8,1.6-0.8,3.4-0.8,5.1
	c12-6,20-19,19-33c0-2-3-3-5-3c5.9,10.7-3.9,21-10,29c-1.9-1.9-0.3-4.8,0-7c-7.2,0.1-9.2,11.2-16.5,11.5c-9.2,0.3-3.5-13.9-1.2-18.1
	c0.7-1.3,2.5-3.6,0.4-4.1c-1.5-0.4-4.2,1.8-5.5,2.5c0.2-0.3,0.2-0.7,0.4-1c-0.1,0.4-0.2,0.6-0.4,1C160,138,168,132,175,125
	c1-1,3-2,5,0c-0.3-0.2-0.7-0.4-1-0.5c0.3,0.2,0.6,0.3,1,0.5c-2-2-5-6-2-9c9,3,16,8,22,15c1,1-3,3-2.1,4.9c2.3-0.7,0-1.8,0,0
	C210,128,221,118,231.2,107.3c-0.2,0.8-0.7,1.2-1.5,1.3c0.5-0.6,0.8-0.9,1.5-1.3C226,117,215,122,208,132c-5,8-1,18-2,27.2
	c4.6-0.5-0.5-5.1,0,0c12-7.2,22-18.2,27-31.2c3-7-1-15,0-22c0-1,0-2,1-3c17-16,33-35,35-59c-12-3-20-12-29-19
	c-1.8,4.6-0.1,9.6-0.7,14.4c-8-0.9-1.9-3.2,0,0C230,38,222,42,220,50c-3,6-1,14,4,19c8,6,20,5,26-4c6-10,1-19-8-25c-1-2,1-5,1-7
	c1-2,2-5,3-7c4-6,9-11,15-15c2.1,7.3-3.8,14.8-8.6,19.7c6.1,3.3,12,6.9,17.7,10.8C274,28,277,14,274,0c-44,10-75,50-91,91
	c-1,5-2,10-5.7,14.3c0.1-1.7,1.5-1,0,0c1.6-9.7,7.7-18,8.9-27.8c-4.4,0.9-1.1,3.9,0,0c-19.3,5.5-35.1,23.2-37.6,43.2
	c3.8-0.4,0.3-2.5,0,0c9-4.5,19-6.5,28.2-10.5c-0.1,3.3-4.2,1.7,0,0c-0.7,4,0.2,8.5-2.7,11.8c-2.9,3.2-6.7,5.8-9.9,8.8
	c-6.1,5.8-11.6,12.6-12.7,21.3c1.4-0.5,2.7-1.3,4.1-1.7c-2.5,15.6-10.7,30.5-18.4,44.2c-6.9,12.3-15.2,24.1-24.5,34.7
	c-8.3,9.4-19,18.9-31.7,21.6c-5.7,1.2-14.3,0.9-18.1-4.2c-3.5-4.6-1.2-11.3,2.6-15c3.9-3.9,9.5-5.6,13.5-0.9
	c3.9,4.6,3.4,10.3,2.2,15.8c-3,13.9-9.6,27.1-22.3,34.3c-12.3,6.9-27.1,7.4-39.9,2.1c-5.8-2.4-11.3-5.5-14.3-11.2
	c-2.9-5.4-2.1-12.2,2.2-16.7c9-9.5,24.5-2.9,29.5,7.5c5.8,12.2-1.5,25.9-10.1,34.6c-2.3,2.3-4.8,4.4-7.4,6.4"></path>
              <path
                className="st0 svg-elem-2"
                d="M204.4,115.4c-1,0.5-1.2,1.8-1.9,2.6c-0.5,0.6-1.2,0.9-1.7,1.4c-0.4,0.4-0.7,1-1.1,1.4
	c-0.5,0.5-1.1,0.8-1.5,1.4c-0.3,0.5-0.6,1.1-1.1,1.4c-1.3,1-2.6,2-3.7,3.2c-0.6,0.7-1.1,1.5-1.8,2c-0.6,0.5-1.3,0.8-1.7,1.4
	c-0.2,0.3-0.4,0.6-0.6,0.9c-0.4,0.5-1,1-1.5,1.2c-0.6,0.2-0.9,0.9-1.3,1.4c-0.2,0.2-0.4,0.4-0.7,0.5c-0.8,0.6-1.6,1.1-2.5,1.7
	c-0.3,0.2-0.6,0.4-0.9,0.6c-0.9,0.6-1.8,1.2-2.7,1.8c-0.6,0.4-1.4,0.8-2.1,0.7c-0.1-0.1-0.1-0.2-0.1-0.3c0-1.4,0.6-2.6,1.1-3.9
	c1.2-3,3.7-6.1,3-9.3c-0.1-0.4,0.2-0.8,0.5-1.2c0.6-0.9,1-1.9,1.4-2.8c1-2.5,1.3-5.2,2.7-7.4c0.6-0.9,1.1-1.9,1.6-2.9
	c0.6-1.3,1.1-2.7,1.7-4c0.5-1.1,1.2-2.2,1.9-3.2c1.5-2.4,3-4.7,4.5-7.1c0.7-1.1,1.5-2.3,2.4-3.3c1.1-1.2,2.5-2,3.5-3.3
	c1-1.2,2.5-1.7,3.9-2.2c1-0.3,2-0.6,3-0.6c0.8,0,1.5,0.3,2.2,0.6c0.8,0.3,1.5,0.7,2.1,1.2c2,1.6,3,4.1,2.8,6.6
	c-0.1,1.1-0.4,2.2-0.8,3.2c-1,3-2.3,6.1-4.7,8.1c-1.6,1.4-2.3,3.5-3.6,5.2c-0.5,0.6-1,1.3-1.4,1.9
	C205.2,114.9,204.9,115.2,204.4,115.4"></path>
            </svg>

            <div className={styles.car_list_wrap}>
              <div className={styles.car_list}>
                <h4>
                  짙은
                  <span>2015.07. ~ 2024.03.</span>
                </h4>
                <p>
                  공공기관, 기업, 대학교 등 SI 프로젝트를 수행하였으며, 웹사이트 마크업 및 유지보수 업무를
                  담당하였습니다.
                </p>
              </div>
              <div className={styles.car_list}>
                <h4>
                  비야
                  <span>2014.10. ~ 2015.05.</span>
                </h4>
                <p>공공기관, 쇼핑몰 프로젝트를 수행하였으며, 웹사이트 마크업 및 유지보수 업무를 담당하였습니다. </p>
              </div>
              <div className={styles.car_list}>
                <h4>
                  아이티굿
                  <span>2011.11. ~ 2014.05.</span>
                </h4>
                <p>공공기관, 기업등의 SI 프로젝트를 수행하였으며, 웹사이트 마크업 및 유지보수 업무를 담당하였습니다.</p>
              </div>
              <div className={styles.car_list}>
                <h4>
                  Adqua
                  <span>2010.07. ~ 2011.03.</span>
                </h4>
                <p>
                  네이버, 다음, 구글 등 주요 포털사이트 광고 페이지 및 대기업 프로모션 웹사이트 마크업 및 유지보수
                  업무를 담당하였습니다.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.expe} ref={expe}>
            <h3 ref={expeTit}>
              제가 이런 걸 좀
              <span className={styles.m_br}>
                할 줄 압니다.
                <span className={`${styles.q_mark1} ${styles.mr} ${styles.emogi}`}>✌</span>
                <span className={`${styles.q_mark2} ${styles.mr} ${styles.emogi}`}>✌</span>
              </span>
            </h3>
            <div className={styles.exp_list}>
              <div className={styles.exp_box}>
                <h4>
                  <div className={styles.num}>01</div>
                  <span className="highlight">Design</span>
                </h4>
                <p>
                  디자인의 의도를 보다 정확하게 파악하는 부분이 중요하다고 생각하며 디자이너가 원하는 디테일을 고려하여
                  웹사이트를 마크업 합니다. 또한 Photoshop / Adobe XD / Figma 활용하여 편집 작업을 할 수 있습니다.
                </p>
              </div>
              <div className={styles.exp_box}>
                <h4>
                  <div className={styles.num}>02</div>
                  <span className="highlight">Development</span>
                </h4>
                <p>
                  Semantic Tag를 이해하며 명시적이면서 직관적인 구조의 설계를 지향하며, 웹 접근성과 SEO를 고려하여
                  마크업을 하고 있습니다. 또한 SCSS 사용하여 코드의 재활용성을 올리고, 유지보수를 용이하게 하며
                  JavaScript / JQuery / GSAP를 이용한 UI 구현 및 애니메이션 모션 효과를 주어 역동적인 웹사이트를
                  구축했습니다. 또한 Git / SVN을 사용하여 파일 형상관리를 하였습니다.
                </p>
              </div>
              <div className={styles.exp_box}>
                <h4>
                  <div className={styles.num}>03</div>
                  <span className="highlight">Communication</span>
                </h4>
                <p>
                  커뮤니케이션은 팀워크가 작동하도록 하는 윤활유와 같다고 생각합니다. 팀원들이 능력을 최대한 발휘하고,
                  역량을 넓히고, 경력을 개발하는 일을 도울 수 있습니다. 또한 부서 간 협업 참여자에게 업무를 원활하게
                  진행하는 데 매우 중요합니다. 협력하고 커뮤니케이션할 수 있는 명확한 방법이 없다면 팀이 고립되고 업무가
                  누락될 수 있기 때문에 커뮤니케이션이 원할하다면 어떤 일이든 해낼 수 있다고 생각합니다.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Curve>
    </>
  );
}
