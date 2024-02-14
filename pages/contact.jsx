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
        <title>CONTACT</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Curve>
        <motion.div className={styles.container} variants={slideUp} initial="initial" animate="enter">
          <Container>
            <Heading>Contact</Heading>
            {error && (
              <Text color="red.300" my={4} fontSize="xl">
                {error}
              </Text>
            )}

            <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
              <FormLabel>이름</FormLabel>
              <Input
                type="text"
                name="name"
                errorBorderColor="red.300"
                value={values.name}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>

            <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
              <FormLabel>이메일 주소</FormLabel>
              <Input
                type="email"
                name="email"
                errorBorderColor="red.300"
                value={values.email}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>

            <FormControl mb={5} isRequired isInvalid={touched.subject && !values.subject}>
              <FormLabel>제목</FormLabel>
              <Input
                type="text"
                name="subject"
                errorBorderColor="red.300"
                value={values.subject}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>

            <FormControl isRequired isInvalid={touched.message && !values.message} mb={5}>
              <FormLabel>내용</FormLabel>
              <Textarea
                type="text"
                name="message"
                rows={4}
                errorBorderColor="red.300"
                value={values.message}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>

            <Button
              variant="outline"
              colorScheme="blue"
              isLoading={isLoading}
              disabled={!values.name || !values.email || !values.subject || !values.message}
              onClick={onSubmit}>
              Submit
            </Button>
          </Container>
        </motion.div>
      </Curve>
    </>
  );
}
