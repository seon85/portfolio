import Layout from './sub_layout';
import PageLoading from '../components/pageLoading';
import styles from '../styles/sub.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { createElement, useEffect, useLayoutEffect, useRef, useState } from 'react';

export default function Portfolio() {
  const datas = require('/public/data.json');
  const portfolioList = useRef(null);

  useEffect(() => {
    datas.forEach((item, key) => {
      //console.log(`${key} : ${item.title}`);
      let temp = document.createElement('div');
      temp.classList.add(`${styles.port}`);
      temp.innerHTML = `<a href="#" target="_blank" class="${styles.port_link}">
        <div class="${styles.port_tit}">${item.title}</div>
        <div class="${styles.port_image}"><img src="${item.image}" alt=""></div>
        </a>`;
      portfolioList.current.append(temp);
    });
  }, []);

  return (
    <>
      <PageLoading />
      <Layout>
        <div className={styles.section}>포트폴리오 페이지입니다.</div>
        <div className={styles.portfolio_list} ref={portfolioList}></div>
      </Layout>
    </>
  );
}
