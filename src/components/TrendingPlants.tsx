import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import gsap from "gsap";
const TrendingPlants = () => {
  gsap.registerPlugin(ScrollTrigger);
  const Container = useRef<HTMLDivElement | null>(null);
  const textRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      const split = new SplitType(".split-text", { types: "lines" });
      const split2 = new SplitType(".split-text-2", { types: "lines" });

      tl.fromTo(
        ".trending-plants",
        {
          y: -90,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: "h2",
            start: "top 90%",
            end: "bottom 75%",
            scrub: true,
          },
        }
      );

      tl.fromTo(
        ".img_01",
        {
          x: "50%",
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".img_01",
            start: "50% bottom",
            end: "bottom 90%",
            scrub: true,
          },
        }
      );

      tl.fromTo(
        split.lines,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          stagger: 0.2,
          // delay: 0.5,
          duration: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: ".text-ref-content",
            // trigger: split.lines,
            start: "bottom bottom",
            end: "bottom 90%",
            scrub: true,
          },
        }
      )
      .fromTo(
        ".cta-btn-1",
        { x: "100%", opacity: 0 },
        {
          x: 0,
          opacity: 1,
          delay: 0.5,
          scrollTrigger: {
            trigger: ".cta-btn-1",
            start: "bottom bottom",
            end: "bottom 85%",
            scrub: true,
          },
          duration: 2
        },
      );

      tl.fromTo(
        ".img_02",
        {
          x: "-120%",
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".img_02",
            start: "50% bottom",
            end: "bottom 90%",
            scrub: true,
          },
        }
      );

      tl.fromTo(
        split2.lines,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          delay: 0.5,
          // duration: 1,
          scrollTrigger: {
            trigger: ".text-ref-content-2",
            start: "top bottom",
            end: "bottom 99%",
            scrub: true,
          },
        }
      );
    },
    { scope: Container }
  );

  return (
    <div ref={Container}>
      <div>
        <div className="relative font-semibold mx-auto mt-[149px] h-[91.2px] flex items-center justify-center w-[90%] md:w-[517.02px]">
          <img
            src="/imgs/right_gradient_border.png"
            className="h-[66.96px] absolute top-0 right-0"
            alt=""
          />
          <h2 className="lg:text-[47px] text-[30px] trending-plants">
            Our Trending Plants
          </h2>
          <img
            src="/imgs/left_gradient_border.png"
            className="h-[66.96px] absolute left-0 bottom-0"
            alt=""
          />
        </div>
      </div>
      <div className="w-[93vw] bg-white/5 items-center mx-auto min-h-[526px] backdrop-blur-[20px] rounded-2xl lg:rounded-[151px] mt-[152.8px] lg:flex">
        <img
          src="/imgs/plant_02.png"
          className="md:w-[698px] max-lg:mx-auto max-lg:block md:h-[575px] w-[300px] h-[223px] lg:-mt-23 -mt-[132px]  img_01"
          alt=""
        />
        <div className="text-ref-content" ref={textRef}>
          <h3 className="split-text capitalize font-semibold sm:text-[32px] text-[28px] max-md:text-center">
            For small Desk Ai Plan
          </h3>
          <p className="split-text text-[20px] mt-4 w-[90%] max-md:text-center max-md:mx-auto lg:w-[400px]">
            Lorem ipsum dolor sit amet consectetur. Bibendum amet fringilla quis
            integer nunc imperdiet urna elit...{" "}
          </p>
          <div className="cta-btn-1 max-lg:w-fit max-lg:mx-auto py-7">
            <p className="text-[32px] mt-[33px] mb-4">N35, 000/-</p>
            <div className="flex gap-[27px]">
              <button className="border-2 text-[20px] cursor-pointer rounded-[10px] w-[166px] h-[53px]">
                Buy Now
              </button>
              <button className="border-2 cursor-pointer grid rounded-[10px] place-items-center size-[53px]">
                <img
                  src="/imgs/shopping-bag.png"
                  className="size-[30px]"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[93vw] bg-white/5 items-center mx-auto min-h-[526px] backdrop-blur-[20px] rounded-2xl lg:rounded-[151px] max-lg:py-11 mt-[152.8px] lg:flex justify-center">
        <div className="text-ref-content-2" ref={textRef}>
          <h3 className="split-text-2 capitalize font-semibold max-lg:text-center text-[32px]">
            White Desk Ai Plan
          </h3>
          <p className="split-text-2 mx-auto text-[20px] mt-4 lg:w-[400px] w-[90%] max-lg:text-center">
            Lorem ipsum dolor sit amet consectetur. Bibendum amet fringilla quis
            integer nunc imperdiet urna elit...
          </p>
          <div className="max-lg:w-fit max-lg:mx-auto">
            <p className="text-[32px] mt-[33px] mb-4">N45, 000/-</p>
            <div className="flex gap-[27px]">
              <button className="border-2 text-[20px] cursor-pointer rounded-[10px] w-[166px] h-[53px]">
                Buy Now
              </button>
              <button className="border-2 cursor-pointer grid rounded-[10px] place-items-center size-[53px]">
                <img
                  src="/imgs/shopping-bag.png"
                  className="size-[30px]"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
        <img
          src="/imgs/plant_03.png"
          className="w-[698px] h-[575px] lg:-mt-26 -mt-8  img_02"
          alt=""
        />
      </div>
    </div>
  );
};

export default TrendingPlants;
