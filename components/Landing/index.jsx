"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";
import { gsap } from "gsap";
import { AnimatePresence } from "framer-motion";

export default function Randing() {
  return (
    <>
      <div className={styles.randing}>랜딩 영역</div>
    </>
  );
}
