'use client';
import Layout from './sub_layout';
import PageLoading from '../components/pageLoading';
import styles from '@/styles/style.module.scss';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { createElement, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Curve from '@/components/Layout/index';
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

export default function Portfolio() {
  // const datas = require('/public/data.json');
  const portfolioList = useRef(null);
  const loader = useRef(null);
  const portTit = useRef(null);
  const router = useRouter();
  let page = 0;
  let limit = 10;
  let total;

  useEffect(() => {
    // setTimeout(() => {
    //   window.scrollTo(0, 0);
    // }, 0.1);

    const handleRouteChange = (url, { shallow }) => {
      window.removeEventListener('scroll', scrollData);
    };
    router.events.on('routeChangeStart', handleRouteChange);

    const getData = (skip, take) => {
      const datas = require('/public/data.json');
      if (skip < 1) {
        drawCard(datas.slice(skip * take, take * (page + 1)), datas.length, '');
      } else {
        drawCard(datas.slice(skip * take, take * (page + 1)), datas.length, 'y');
      }
    };

    const drawCard = (results, length, c) => {
      total = length;
      const html = results
        .map(
          result =>
            `<div class="${styles.port} ${c ? `${styles.on}` : ''}">
              <a href="${result.url}" target="_blank" class="${styles.port_link} ${
              result.pointer == 'none' ? `${styles.point_none}` : ''
            }" title="새창으로 열림">
                <div class="${styles.port_image}"><img src="/images/${result.image}.webp" alt="${result.title}"></div>
                <div class="${styles.port_tit}"><h2>${result.title}</h2></div>
                <div class="${styles.posi_date}">
                  <div class="${styles.l}">${result.position}</div>
                  <div class="${styles.r}">${result.date}</div>
                </div>
              </a>
            </div>
          `,
        )
        .join('');
      portfolioList.current.innerHTML += html;
    };

    const scrollData = () => {
      if (
        document.documentElement.scrollTop + document.documentElement.clientHeight + 300 >=
        document.documentElement.scrollHeight
      ) {
        if (page + 1 < total / limit) {
          page++;
          loader.current.classList.remove(`${styles.hidden}`);
          getData(page, limit);
          setTimeout(() => {
            loader.current.classList.add(`${styles.hidden}`);
            let data = Array.from(document.querySelectorAll(`.` + styles.on));

            for (let i = 0; i < data.length; i++) {
              data[i].classList.remove(`${styles.on}`);
            }
          }, 500);
        } else {
          return;
        }
      }
    };

    document.addEventListener('DOMContentLoaded', getData(0, 10));
    window.addEventListener('scroll', scrollData);
  }, []);

  return (
    <>
      {/* <PageLoading /> */}
      <Head>
        <title>Portfolio | Jonghyuk&apos;s Portfolio</title>
        {/* <title>Portfolio</title> */}
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
        <meta name="og:url" content="https://portfolio-one-phi-86.vercel.app/" />
        <meta property="og:image" content="/images/og_img.jpg" />
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
          <h2 className={styles.subTit} ref={portTit}>
            Work Experience
          </h2>
          <div className={styles.portfolio_list} ref={portfolioList}></div>
          <div className={`${styles.loader} ${styles.hidden}`} ref={loader}></div>
        </motion.div>
        {/* <div className={`${styles.loader} ${styles.hidden}`} ref={loader}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div> */}
      </Curve>
    </>
  );
}
