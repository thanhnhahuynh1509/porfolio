import heroBg2 from "../imgs/hero-bg-2.jpg";
import docker from "../imgs/docker.png";
import git from "../imgs/git.png";
import java from "../imgs/java.png";
import js from "../imgs/js.png";
import sql from "../imgs/mysql.png";
import react from "../imgs/physics.png";
import heroBg3 from "../imgs/hero3.jpg";
import heroBg4 from "../imgs/hero4.jpg";
import my from "../imgs/my.jpg";

function Skills() {
  return (
    <section
      className="section-skills p-vertical-128 grid grid-cols-2 g-48"
      id="skills"
    >
      <div className="section-left">
        <img src={heroBg3} className="w-full filter-dark" />
      </div>
      <div className="section-right flex align-items-center p-horizontal-24 justify-content-center-md">
        <div className="flex flex-col g-32">
          <div className="w-460">
            <h2 className="heading-tertiary mb-16">Why Work With Me</h2>
            <p className="normal-text-lg">
              I am a great communicator and love to invest the necessary time to
              understand the customer's problem very well
            </p>
          </div>
          <div className="w-460">
            <h3 className="heading-four mb-16">DESIGN TOOLS</h3>
            <p className="normal-text">
              My favorite design tools are Photoshop and Illustrator but I can
              create designs in Figma, Sketch and Adobe XD too
            </p>
          </div>
          <div className="w-460">
            <h3 className="heading-four mb-16">DEVELOPMENT SKILLS</h3>
            <p className="normal-text">
              I am familiar and work on a daily basis with HTML, CSS,
              JavaScript, Java, MYSQL, Git, Docker
            </p>
          </div>
          <div className="flex g-24">
            <img src={java} className="img-icon" />
            <img src={sql} className="img-icon" />
            <img src={js} className="img-icon" />
            <img src={react} className="img-icon" />
            <img src={git} className="img-icon" />
            <img src={docker} className="img-icon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
