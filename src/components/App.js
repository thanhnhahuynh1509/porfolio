import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Skills from "./Skills";

import Projects from "./Projects";

import Testimonials from "./Testimonials";

import Question from "./Question";
import Contact from "./Contact";
import {
  FacebookLogo,
  GithubLogo,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";

function App() {
  return (
    <div>
      <Header />

      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Testimonials />
        <div className="container border-bottom"></div>
        <Question />
        <Contact />
      </main>

      <footer className="footer p-vertical-128">
        <div className="container mb-48">
          <ul className="footer-icon-list">
            <li>
              <a href="#">
                <FacebookLogo size={32} weight="fill" />
              </a>
            </li>
            <li>
              <a href="#">
                <YoutubeLogo size={32} weight="fill" />
              </a>
            </li>
            <li>
              <a href="#">
                <TwitterLogo size={32} weight="fill" />
              </a>
            </li>
            <li>
              <a href="#">
                <GithubLogo size={32} weight="fill" />
              </a>
            </li>
          </ul>
        </div>
        <div className="container flex justify-content-center">
          <p className="normal-text">Copyright &copy; Huỳnh Thanh Nhã</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
