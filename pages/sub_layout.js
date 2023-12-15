import Style from "@/styles/sub.module.scss";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const main = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname != "/") {
      // 메인페이지가 아니라면
      //gsap.set(main.current, { y: "20%" });
      gsap.set(main.current, { top: "100px" });
      gsap.to(main.current, {
        delay: 1,
        //y: "0%",
        top: 0,
        duration: 1,
        opacity: 1,
        ease: "power3.inOut",
      });
    }
  }, []);

  return (
    <>
      <main className={Style.main_container} ref={main}>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
}
