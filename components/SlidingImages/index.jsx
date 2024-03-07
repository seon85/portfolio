import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from '@/styles/style.module.scss';
import Image from 'next/image';

const slider1 = [
  {
    color: '#e3e5e7',
    src: 'img_epost.webp',
  },
  {
    color: '#d6d7dc',
    src: 'img_kocea.webp',
  },
  {
    color: '#e3e3e3',
    src: 'img_gsr.webp',
  },
  {
    color: '#21242b',
    src: 'img_gill.webp',
  },
];

const slider2 = [
  {
    color: '#d4e3ec',
    src: 'img_tempo.webp',
  },
  {
    color: '#e5e0e1',
    src: 'img_ksure.webp',
  },
  {
    color: '#d7d4cf',
    src: 'img_fipa.webp',
  },
  {
    color: '#e1dad6',
    src: 'img_ns.webp',
  },
];

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div ref={container} className={styles.slidingImages}>
      <div className={styles.imgBox}>
        <motion.div style={{ x: x1 }} className={styles.slider}>
          {slider1.map((project, index) => {
            return (
              <div key={index} className={styles.project} style={{ backgroundColor: project.color }}>
                <div className={styles.imageContainer}>
                  <Image fill={true} alt={'image'} src={`/images/${project.src}`} />
                </div>
              </div>
            );
          })}
        </motion.div>
        <motion.div style={{ x: x2 }} className={styles.slider}>
          {slider2.map((project, index) => {
            return (
              <div key={index} className={styles.project} style={{ backgroundColor: project.color }}>
                <div key={index} className={styles.imageContainer}>
                  <Image fill={true} alt={'image'} src={`/images/${project.src}`} />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.round_circle}></div>
      </motion.div>
    </div>
  );
}
