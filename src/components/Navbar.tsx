import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Navbar = () => {

  useGSAP(() => {
    gsap.fromTo(".navbar", {
      y: -150,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      ease: "power1.inOut",
      duration: 1.5
      // ease: "bounce"
    })
  }, [])

  return (
    <div className="w-[91vw] navbar mx-auto pt-5 md:pt-8 flex items-center justify-between">
      <div className="gap-[2px] flex items-center">
        <img src="/imgs/logo.png" className="w-9 h-10" alt="" />
        <h1 className="font-bold text-[28px]">Planto.</h1>
      </div>
      <div className="hidden lg:block">
        <ul className="flex gap-15 text-[24px]">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Plant Type</a>
          </li>
          <li>
            <a href="">More</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-8">
        <div className="md:flex items-center gap-8 hidden">
          <img src="/imgs/shopping-bag.png" className="size-[25px] cursor-pointer" alt="" />
          <img src="/imgs/search-icon.png" className="size-[25px] cursor-pointer" alt="" />
        </div>
        <img src="/imgs/nav_menu.png" className="w-[26px] h-3 cursor-pointer" alt="" />
      </div>
    </div>
  )
}

export default Navbar