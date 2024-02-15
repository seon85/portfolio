'use client';
import styles from '@/styles/sub.module.scss';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { createElement, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Curve from '@/components/Layout/index';
import { motion } from 'framer-motion';
// import { ChakraProvider } from '@chakra-ui/react';
// import theme from '../config/theme';
import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { sendContactForm } from '../lib/api';

const initValues = { name: '', email: '', subject: '', message: '' };

const initState = { isLoading: false, error: '', values: initValues };

const slideUp = {
  initial: {
    y: 300,
  },
  enter: {
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.5 },
  },
};

export default function Contact() {
  // const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) => setTouched(prev => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState(prev => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState(prev => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      // toast({
      //   title: '정상적으로 메세지가 전송되었습니다.',
      //   status: 'success',
      //   duration: 2000,
      //   position: 'top',
      // });
      alert('정상적으로 메세지가 전송되었습니다.');
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };
  return (
    <>
      {/* <PageLoading /> */}
      <Head>
        {/* <title>Contact | 선종혁의 웹 포트폴리오</title> */}
        <title>Contact</title>
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
          <h2 className={styles.subTit}>start a project together</h2>
          <div className={styles.cont_wrap}>
            <div className={styles.cont_mail}>
              <Container className={styles.contact_form}>
                {error && (
                  <Text color="red.300" my={4} fontSize="xl">
                    {error}
                  </Text>
                )}

                <FormControl isRequired isInvalid={touched.name && !values.name}>
                  <div className="l">01</div>
                  <div className="r">
                    <FormLabel>이름</FormLabel>
                    <Input
                      type="text"
                      name="name"
                      errorBorderColor="red.300"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={onBlur}
                      placeholder="이름을 입력해주세요."
                    />
                  </div>
                  <FormErrorMessage>이름을 입력해주세요.</FormErrorMessage>
                </FormControl>

                <FormControl isRequired isInvalid={touched.email && !values.email}>
                  <div className="l">02</div>
                  <div className="r">
                    <FormLabel>이메일 주소</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      errorBorderColor="red.300"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={onBlur}
                      placeholder="이메일 주소를 입력해주세요."
                    />
                  </div>
                  <FormErrorMessage>이메일 주소를 입력해주세요.</FormErrorMessage>
                </FormControl>

                <FormControl isRequired isInvalid={touched.subject && !values.subject}>
                  <div className="l">03</div>
                  <div className="r">
                    <FormLabel>제목</FormLabel>
                    <Input
                      type="text"
                      name="subject"
                      errorBorderColor="red.300"
                      value={values.subject}
                      onChange={handleChange}
                      onBlur={onBlur}
                      placeholder="제목을 입력해주세요."
                    />
                  </div>
                  <FormErrorMessage>제목을 입력해주세요.</FormErrorMessage>
                </FormControl>

                <FormControl isRequired isInvalid={touched.message && !values.message}>
                  <div className="l">04</div>
                  <div className="r">
                    <FormLabel>내용</FormLabel>
                    <Textarea
                      type="text"
                      name="message"
                      rows={4}
                      errorBorderColor="red.300"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={onBlur}
                      placeholder="내용을 입력해주세요."
                    />
                  </div>
                  <FormErrorMessage>내용을 입력해주세요.</FormErrorMessage>
                </FormControl>

                <div className={styles.btn_submit}>
                  <Button
                    variant="outline"
                    colorScheme="blue"
                    isLoading={isLoading}
                    disabled={!values.name || !values.email || !values.subject || !values.message}
                    onClick={onSubmit}>
                    메일 보내기
                  </Button>
                </div>
              </Container>
            </div>
            <div className={styles.cont_info}>
              <h3>Contact Details</h3>
              <ul>
                <li>My Name : 선종혁</li>
                <li>
                  <a href="mailto:wleks85@gmail.com">Our Email : wleks85@gmail.com</a>
                </li>
                <li>Our Address : 경기도 의왕시</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </Curve>
      <style jsx global>{`
        body {
          background: #1c1d20;
        }
        header {
          & a {
            color: #fff !important;
          }
        }
        h2 {
          color: #fff;
        }
      `}</style>
    </>
  );
}
