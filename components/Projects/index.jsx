"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Styles from "./Style.module.scss";
import { gsap } from "gsap";
import { AnimatePresence } from "framer-motion";

export default function Projects() {
  return (
    <>
      <div className={Styles.projects}>프로젝트 영역</div>
    </>
  );
}
