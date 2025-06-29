import  { useRef } from "react";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export interface PlantsPreview {
  img: string;
  name: string;
  type: string;
}

const MainHero = () => {

  gsap.registerPlugin(ScrollTrigger);

  const textRef = useRef<HTMLParagraphElement | null>(null);
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      const split = new SplitType(textRef.current!, { types: "lines" });

      tl.fromTo(
        "h1",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          delay: 2,
        }
      );

      tl.fromTo(
        split.lines,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          // delay: 3,
          ease: "power1.inOut",
          stagger: 0.2,
        }
      );

      tl.fromTo(
        ".cta-hero-btns",
        {
          opacity: 0,
          x: -500,
        },
        {
          opacity: 1,
          x: 0,
        }
      ).fromTo(
        ".carousel",
        {
          opacity: 0,
          x: 200,
        },
        {
          opacity: 1,
          x: 0,
        },
        "<"
      );

      tl.fromTo(".testimony-01", {
        opacity: 0,
        x: "-50vw"
      }, {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".testimony-01", 
          start: "20% bottom",
          end: "bottom 80%",
          scrub: true
        }
      })
    },
    { scope: container }
  );

  return (
    <div
      className="w-[91vw] lg:flex mx-auto lg:mt-20 lg:justify-between"
      ref={container}
    >
      <div className="mt-8">
        <h1 className="text-center lg:text-left mb-3 text-3xl font-semibold capitalize lg:text-[110px]">
          breath natural
        </h1>
        <p
          className="font-medium lg:text-[24px] hero-1st-text lg:w-[720px] max-lg:text-center"
          ref={textRef}
        >
          Lorem ipsum dolor sit amet consectetur. Bibendum amet fringilla quis
          integer nunc imperdiet urna elit&nbsp;.{" "}
        </p>
        <div className="mt-4 mx-auto max-lg:w-fit flex gap-4 lg:gap-[26px] cta-hero-btns">
          <button className="border-2 rounded-[10px] lg:w-[149px] max-lg:px-4 lg:text-[24px]">
            Explore
          </button>
          <div className="flex items-center gap-[18px]">
            <button className="size-[55px] rounded-full border-2 flex items-center justify-center">
              <img src="/imgs/play-btn.png" className="size-[24px]" alt="" />
            </button>
            <p className="lg:text-[24px] font-medium">Live Demo...</p>
          </div>
        </div>
        <div className="lg:mt-43 testimony-01 mt-20 rounded-[42px] w-fit px-10 py-[43px] backdrop-blur-[20px]">
          <div className="flex gap-3 items-center">
            <img src="/imgs/user_img_01.png" className="size-[49px]" alt="" />
            <div>
              <p className="text-[18px] font-medium">Alina Patel</p>
              <img
                src="/imgs/Rating_4.5.png"
                className="w-20 h-[14px]"
                alt=""
              />
            </div>
          </div>
          <p className="text-[18px] lg:w-80 mt-10 lg:mt-[29px]">
            Lorem ipsum dolor sit amet consectetur. Bibendum amet fringilla quis
            integer nunc imperdiet urna elit...
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainHero;

// width: 502;
// height: 549;
// top: 175px;
// left: 1154px;
