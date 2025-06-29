import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const TopSelling = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.fromTo(
        "h2",
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
    },
    { scope: containerRef }
  );

  const topSellingArr: { img: string; price: string; name: string }[] = [
    {
      img: "",
      price: "25, 000",
      name: "calathea",
    },
    {
      img: "",
      price: "55, 000",
      name: "desk",
    },
    {
      img: "",
      price: "35, 000",
      name: "memorial",
    },
    {
      img: "",
      price: "45, 000",
      name: "home",
    },
    {
      img: "",
      price: "35, 000",
      name: "beautiful",
    },
    {
      img: "",
      price: "15, 000",
      name: "table",
    },
    {
      img: "",
      price: "65, 000",
      name: "outdoor",
    },
    {
      img: "",
      price: "55, 000",
      name: "room",
    },
    {
      img: "",
      price: "105, 000",
      name: "Alexander's",
    },
  ];

  return (
    <div className="bg-[#141F10] pt-[105px] text-white" ref={containerRef}>
      <div className=" w-[93vw] mx-auto">
        <div className="mx-auto relative mb-[85.8px] w-[478.33px] flex items-center justify-center h-[86px] text-white">
          <img
            src="/imgs/right_gradient_border.png"
            className="h-[66.96px] absolute top-0 right-0"
            alt=""
          />
          <img
            src="/imgs/left_gradient_border.png"
            className="h-[66.96px] absolute left-0 bottom-0"
            alt=""
          />
          <h2 className="text-[50px] font-semibold">Our Top Selling</h2>
        </div>
        <div className="grid grid-cols-3 gap-[29px]">
          {topSellingArr.map((sellingInst, i) => (
            <div key={i}>
              <img src={sellingInst.img} alt="" />
              <p className="text-[36px] mb-[15px]">{sellingInst.name} plant</p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Bibendum amet fringilla
                quis integer nunc imperdiet urna elit...{" "}
              </p>
              <div className="flex items-center justify-between mt-[41px]">
                <p className="text-[30px]">N{sellingInst.price}/-</p>
                <button className="border-2 rounded-[10px] cursor-pointer size-[53px] grid place-items-center">
                  <img src="/imgs/shopping-bag.png" className="size-[30px]" alt="" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSelling;
