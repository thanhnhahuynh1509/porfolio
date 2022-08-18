import { User } from "phosphor-react";
import heroBg2 from "../imgs/hero-bg-2.jpg";
import heroBg3 from "../imgs/hero3.jpg";
import heroBg4 from "../imgs/hero4.jpg";
import { Link } from "react-scroll";

function Hero() {
  return (
    <section className="section-hero hero-md" id="home">
      <div className="hero-container container grid grid-cols-2 g-16 align-items-center grid-cols-1-md text-center-md">
        <div className="hero-left">
          <h1 className="heading-primary mb-80">
            I love to create beautiful and efficient websites
          </h1>
          <div className="flex align-items-center g-24 justify-content-center-md">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="btn btn-filled"
            >
              <span>Discover</span>
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              className="btn flex align-items-center g-8"
            >
              <User size={16} weight={"duotone"} />
              <span>Contact Me</span>
            </Link>
          </div>
        </div>
        <div className="hero-right">
          <img src={heroBg4} alt="" className="w-full" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
