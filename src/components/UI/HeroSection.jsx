import { FaLongArrowAltRight } from "react-icons/fa"
import { NavLink } from "react-router-dom"

export const HeroSection = ()=>{  
  return (
  <main className="hero-section main">
    <div className="container grid grid-two-cols">
    <div className="hero-content">
      <h1 className="heading-xl">
        Explore the World, One Country at a Time
      </h1>
      <p className="paragraph">
        Discover the history, culture, and beauty of every nation.
        Sort, search and filter through countries to find details.
      </p>
      <button className="btn btn-darken btn-inline bg-white-box">
        <NavLink to="/country" className="start" > Start Exploring </NavLink> <FaLongArrowAltRight />
      </button>
      </div>

    <div className="hero-image ">
      <img src="/images/world.png" alt="world-beauty" className="banner-image" />
    </div>
    
    </div>
  </main>)
}