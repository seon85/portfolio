'use client';
import Layout from './sub_layout';
import PageLoading from '../components/pageLoading';
import styles from '../styles/sub.module.scss';
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
    y: 300,
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
      drawCard(datas.slice(skip * take, take * (page + 1)), datas.length);
    };

    const drawCard = (results, length) => {
      total = length;
      const html = results
        .map(
          result =>
            `<div class="${styles.port}">
              <a href="${result.url}" target="_blank" class="${styles.port_link}" title="새창으로 열림">
                <div class="${styles.port_image}"><img src="${result.image}" alt="${result.title}"></div>
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
        document.documentElement.scrollTop + document.documentElement.clientHeight + 100 >=
        document.documentElement.scrollHeight
      ) {
        if (page + 1 < total / limit) {
          page++;
          loader.current.classList.remove(`${styles.hidden}`);
          getData(page, limit);
          setTimeout(() => {
            loader.current.classList.add(`${styles.hidden}`);
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
        <title>PORTFOLIO</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Curve>
        <motion.div className={styles.container} variants={slideUp} initial="initial" animate="enter">
          <h2 className={styles.subTit} ref={portTit}>
            Creating next level digital products
          </h2>
          <div className={styles.portfolio_list} ref={portfolioList}></div>
        </motion.div>
        <div className={`${styles.loader} ${styles.hidden}`} ref={loader}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
      </Curve>
    </>
  );
}
