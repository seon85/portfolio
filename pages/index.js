"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "@/styles/Page.module.scss";
import { AnimatePresence } from "framer-motion";
import Preloader from "../components/Preloader";
import Layout from "./layout";
import Main from "./main";

// import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  return (
    <>
      <Main />
    </>
  );
}
