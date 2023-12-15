"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/router";

export default function pageLoading() {
  const router = useRouter();

  const loadingCont = useRef(null);
  const loadingBox = useRef(null);
  const loadingTop = useRef(null);
  const loadingBottom = useRef(null);
  const loadingWord = useRef(null);

  useEffect(() => {
    if (router.pathname == "/about") {
      document.querySelector(".page-title > h2").textContent = "ABOUT";
    } else {
      document.querySelector(".page-title > h2").textContent = "FORTPOLIO";
    }

    // if (performance.navigation.type === 1) {
    //   document.querySelector("body").style.cssText = "background: #141517";
    //   //console.log("새로고침");
    // }

    if (localStorage.getItem("load") != null) {
      document.body.style.cssText = "background: #141517";
    } else {
      localStorage.setItem("load", "Y");
    }

    document.body.classList.add("scroll-none");
    gsap.set(loadingCont.current, { zIndex: "1000" });
    gsap.to(loadingBox.current, {
      //height: 0,
      top: "0%",
      duration: 1,
      ease: "power3.inOut",
    });

    gsap.to(loadingTop.current, {
      height: "10vh",
      //y: '-100vh',
      duration: 0.5,
      ease: "power3.inOut",
    });

    gsap.to(loadingWord.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.inOut",
      onComplete: function () {
        gsap.to(loadingTop.current, {
          height: "0vh",
          //y: '-100vh',
          duration: 0.5,
          ease: "power3.inOut",
        });

        gsap.to(loadingBottom.current, {
          height: "10vh",
          //y: '-100vh',
          duration: 0.5,
          ease: "power3.inOut",
        });

        gsap.to(loadingBox.current, {
          //height: 0,
          top: "-130%",
          duration: 1,
          ease: "power3.inOut",
          onStart: function () {
            document.body.style.cssText = "";
          },
          onComplete: function () {
            gsap.set(loadingCont.current, { zIndex: "-1" });
            gsap.set(loadingBox.current, { top: "100%" });
            document.body.classList.remove("scroll-none");
            window.scrollTo(0, 0);
          },
        });
      },
    });
  }, []);

  return (
    <div className="loading-container" ref={loadingCont}>
      <div className="loading" ref={loadingBox}>
        <div className="top" ref={loadingTop}>
          <div className="round-div"></div>
        </div>
        <div className="page-title">
          <h2 ref={loadingWord}></h2>
        </div>
        <div className="bottom" ref={loadingBottom}>
          <div className="round-div"></div>
        </div>
      </div>
    </div>
  );
}
