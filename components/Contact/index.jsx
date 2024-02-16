import styles from '@/styles/main.module.scss';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '../../common/Magnetic';
import Link from 'next/link';

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end'],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  return (
    <motion.div style={{ y }} ref={container} className={styles.contact}>
      <div className={styles.body}>
        <div className={styles.title}>
          {/* <span>
            <div className={styles.imageContainer}>
              <Image fill={true} alt={'image'} src={`/images/background.jpg`} />
            </div>
            <h2>Let's work</h2>
          </span> */}
          <p>소통 능력 및 내재된 가능성이 있는 창의적인 인재를 찾고 계시나요?</p>
          <p>메일을 보내주시면 1~2일 내로 연락드리겠습니다.</p>
          {/* <h2>together</h2> */}
          <motion.div style={{ x }} className={styles.buttonContainer}>
            <Rounded backgroundColor={'#334BD3'} className={styles.button}>
              <Link href="/contact" scroll={false} className={styles.btn_cont}>
                <p>
                  Get in touch
                  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="50" viewBox="0 -20 42 90">
                    <g id="tap" data-name="Tap">
                      <g id="tap_inner" data-name="Tap Pointer">
                        <g>
                          <path
                            className={styles.tap_cls_1}
                            d="M19,36.67V12.75c0-2.64-1.32-4.39-4.74-4.39s-4.74,1.75-4.74,4.39V48.19"></path>
                          <path
                            className={styles.tap_cls_1}
                            d="M36.19,40.51v-8.6c0-3.64-.85-6-4.08-6.28a5.85,5.85,0,0,0-4.08.83"></path>
                          <path
                            className={styles.tap_cls_1}
                            d="M36.19,30.48c4.76-.8,6.27,1.81,6.53,6s.36,6.45.36,11.72c0,12.71-7,20-7,20"></path>
                          <path
                            className={styles.tap_cls_1}
                            d="M9.08,33.37a14.56,14.56,0,0,0-3-.29c-2.38,0-4.16,1.88-4.52,5.24A76,76,0,0,0,1,46.36c-.1,5.93,1,8.57,3.32,12,3.24,4.68,10,10,10,10"></path>
                          <path
                            className={styles.tap_cls_1}
                            d="M28.43,37.56v-8c0-3.64-1-6.9-4.73-6.9a10.83,10.83,0,0,0-4.73.83"></path>
                          <path className={styles.tap_cls_2} d="M3.29,11.93a10.93,10.93,0,1,1,21.86,0"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </p>
              </Link>
            </Rounded>
          </motion.div>
          {/* <motion.svg
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg> */}
        </div>
        <div className={styles.nav}>
          <Rounded>
            <Link href="mailto:wleks85@gmail.com">📩 wleks85@gmail.com</Link>
          </Rounded>
          <Rounded>
            <Link href="tel:01050424129">📞 010 - 5042 - 4129</Link>
          </Rounded>
        </div>
        {/* <div className={styles.info}>
          <div>
            <span>
              <h3>Version</h3>
              <p>2022 © Edition</p>
            </span>
            <span>
              <h3>Version</h3>
              <p>11:49 PM GMT+2</p>
            </span>
          </div>
          <div>
            <span>
              <h3>socials</h3>
              <Magnetic>
                <p>Awwwards</p>
              </Magnetic>
            </span>
            <Magnetic>
              <p>Instagram</p>
            </Magnetic>
            <Magnetic>
              <p>Dribbble</p>
            </Magnetic>
            <Magnetic>
              <p>Linkedin</p>
            </Magnetic>
          </div>
        </div> */}
      </div>
    </motion.div>
  );
}
