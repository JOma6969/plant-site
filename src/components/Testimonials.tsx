import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const users: { name: string; img: string }[] = [
    { name: "John Doe", img: "/imgs/john_doe.png" },
    { name: "Joseph Phen", img: "/imgs/joseph_phen.png" },
    { name: "Ella Janny", img: "/imgs/ella_janny.png" },
  ];
  const parent = useRef<HTMLDivElement | null>(null)!

  useGSAP(
    () => {

      if(!parent.current) return;
      const boxes: HTMLElement[] = gsap.utils.toArray(parent.current?.children);

      gsap.fromTo(
        "h2",
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: "h2",
            start: "bottom 90%",
            end: "bottom 55%",
            scrub: true,
          },
        }
      );
      boxes.forEach(item => {
        gsap.fromTo(item, {y: 50, opacity: 0}, {y: 0, opacity: 1, scrollTrigger: {
          trigger: item, 
          start: "20% bottom",
          end: "bottom 95%",
          scrub: true
        }})
      })
    },
    { scope: containerRef }
  );

  return (
    <div className="w-[91vw] mx-auto mt-10 text-white" ref={containerRef}>
      <div className="relative mb-[110px] h-[86.2px] w-full md:w-[589px] mx-auto flex items-center justify-center">
        <img
          src="/imgs/right_gradient_border.png"
          className="absolute top-0 right-0 h-[66.96px]"
          alt=""
        />
        <img
          src="/imgs/left_gradient_border.png"
          className="absolute bottom-0 left-0 h-[66.96px]"
          alt=""
        />
        <h2 className="text-[30px] md:text-[40px]">Customers' Review</h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-[21px]" ref={parent}>
        {users.map((userInst, i) => (
          <div key={i} className="backdrop-blur-[20px] rounded-[84px] py-15 px-[55px] border-2">
            <div className="flex items-center gap-[19px] mb-10">
              <img src={userInst.img} className="size-[71px]" alt="" />
              <div>
                <p>{userInst.name}</p>
                <img src="/imgs/Rating_4.5.png" className="w-20" alt="" />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Magna eu volutpat risus
              vitae et natoque consectetur. Vel egestas lectus tincidunt sed
              vitae.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;


// box-shadow: 0px 2.28px 51.61px 0px #00000000;

// box-shadow: 0px 2.53px 42.45px 0px #00000000;

// box-shadow: 0px 2.7px 33.61px 0px #00000004;

// box-shadow: 0px 4px 65px 0px #00000017;
