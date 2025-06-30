import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Testimonials from "./components/Testimonials"
import TopSelling from "./components/TopSelling"

const App = () => {
  return (
    <div className="bg-[#141F10]">
      <Hero />
      <TopSelling />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App