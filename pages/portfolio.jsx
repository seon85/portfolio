import Layout from './sub_layout';
import PageLoading from '../components/pageLoading';
import styles from '../styles/sub.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { createElement, useEffect, useLayoutEffect, useRef, useState } from 'react';

export default function Portfolio() {
  const datas = require('/public/data.json');
  const portfolioList = useRef(null);
  let count = 1;

  useEffect(() => {
    datas.forEach((item, key) => {
      //console.log(`${key} : ${item.title}`);
      if (count <= 4) {
        let temp = document.createElement('div');
        temp.classList.add(`${styles.port}`);
        temp.innerHTML = `
          <a href="#" target="_blank" class="${styles.port_link}">
            <div class="${styles.port_tit}">${item.title}</div>
            <div class="${styles.port_image}"><img src="${item.image}" alt=""></div>
          </a>`;
        portfolioList.current.append(temp);
      }
      count++;
    });

    // window.addEventListener('scroll', () => {
    //   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    //     console.log('a');
    //   }
    // });
  }, []);

  return (
    <>
      <PageLoading />
      <Layout>
        <div className={styles.container}>
          <h2 className={styles.subTit}>Creating next level digital products</h2>
          <div className={styles.portfolio_list} ref={portfolioList}></div>
        </div>
      </Layout>
    </>
  );
}
