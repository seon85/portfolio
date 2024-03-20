'use client';
import styles from '@/styles/style.module.scss';
import { useState, useEffect, useRef } from 'react';
import Project from './components/project';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import Rounded from '../../common/RoundedButton';

const projects = [
  {
    title: '우체국금융 차세대 채널파트 UI/UX 부분 (퍼블리싱)',
    src: 'img_rec_pj1.webp',
    color: '#000000',
    href: 'https://www.epostbank.go.kr/',
  },
  {
    title: '지역신문발전위원회',
    src: 'img_rec_pj2.webp',
    color: '#8C8C8C',
    href: 'https://www.cln.or.kr/cln/index.do',
  },
  {
    title: '정부인증 가사서비스 가사랑',
    src: 'img_rec_pj3.webp',
    color: '#EFE8D3',
    href: 'https://www.gasarang.go.kr/hpgsMain.do',
  },
  {
    title: '경기도평생교육진흥원',
    src: 'img_rec_pj4.webp',
    color: '#706D63',
    href: 'https://www.gill.or.kr/gill/index.do',
  },
  {
    title: '언론진흥재단 뉴스토어',
    src: 'img_rec_pj5.webp',
    color: '#706D63',
    href: 'https://www.newstore.or.kr/store/main.do',
  },
];

const scaleAnimation = {
  initial: { scale: 0, x: '-50%', y: '-50%' },
  enter: { scale: 1, x: '-50%', y: '-50%', transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
  closed: { scale: 0, x: '-50%', y: '-50%', transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } },
};

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  const project = useRef(null);
  const projectTit = useRef(null);
  const projectList = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, 'left', { duration: 0.8, ease: 'power3' });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, 'top', { duration: 0.8, ease: 'power3' });
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, 'left', { duration: 0.5, ease: 'power3' });
    yMoveCursor.current = gsap.quickTo(cursor.current, 'top', { duration: 0.5, ease: 'power3' });
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, 'left', { duration: 0.45, ease: 'power3' });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, 'top', { duration: 0.45, ease: 'power3' });

    gsap.registerPlugin(ScrollTrigger);
    gsap.to(projectTit.current, {
      y: 0,
      opacity: 1,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: project.current,
        //scrub: 1,
        start: '10% 100%',
        end: '17% 60%',
        pin: false,
        //markers: true,
      },
    });

    gsap.to(projectList.current, {
      y: 0,
      opacity: 1,
      // autoAlpha: 0,
      // rotateX: 360,
      // scale: 0.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: project.current,
        //scrub: 0.5,
        start: '20% 70%',
        end: '30% 30%',
        pin: false,
        //markers: true,
      },
    });
  }, []);

  const moveItems = (x, y) => {
    xMoveContainer.current(x);
    yMoveContainer.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };
  const manageModal = (active, index, x, y) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <div
      onMouseMove={e => {
        moveItems(e.clientX, e.clientY);
      }}
      className={styles.projects}
      ref={project}>
      <div className={styles.inner}>
        <div className={styles.tit} ref={projectTit}>
          <h3>PORTFOLIO</h3>
          <p>Some of My Most Recent Projects</p>
        </div>
        <div className={styles.body} ref={projectList}>
          {projects.map((project, index) => {
            return (
              <Project index={index} href={project.href} title={project.title} manageModal={manageModal} key={index} />
            );
          })}
        </div>
        <Rounded>
          <Link href="/portfolio" scroll={false} className={styles.moreAbout}>
            More Work 👉
          </Link>
        </Rounded>
        <>
          <motion.div
            ref={modalContainer}
            variants={scaleAnimation}
            initial="initial"
            animate={active ? 'enter' : 'closed'}
            className={styles.modalContainer}>
            <div style={{ top: index * -100 + '%' }} className={styles.modalSlider}>
              {projects.map((project, index) => {
                const { src, color } = project;
                return (
                  <div className={styles.modal} style={{ backgroundColor: color }} key={`modal_${index}`}>
                    <Image src={`/images/${src}`} width={300} height={0} alt="image" />
                  </div>
                );
              })}
            </div>
          </motion.div>
          <motion.div
            ref={cursor}
            className={styles.cursor}
            variants={scaleAnimation}
            initial="initial"
            animate={active ? 'enter' : 'closed'}></motion.div>
          <motion.div
            ref={cursorLabel}
            className={styles.cursorLabel}
            variants={scaleAnimation}
            initial="initial"
            animate={active ? 'enter' : 'closed'}>
            View
          </motion.div>
        </>
      </div>
    </div>
  );
}
