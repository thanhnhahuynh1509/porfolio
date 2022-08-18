import heroBg2 from "../imgs/hero-bg-2.jpg";
import heroBg3 from "../imgs/hero3.jpg";
import heroBg4 from "../imgs/hero4.jpg";
import SectionTitle from "./SectionTitle";
import ProjectBox from "./ProjectBox";

function Projects() {
  return (
    <section
      className="section-projects p-vertical-128 p-vertical-128-sm "
      id="projects"
    >
      <SectionTitle
        title={"Delivered projects"}
        content={
          "Listed below are some of the most representative projects I've worked on. They range from basic web design for presentation sites to advanced web development for online shops"
        }
      />
      <div className="container grid grid-cols-3 g-24">
        <ProjectBox
          name={"Project name"}
          content={"Base project"}
          date={"01/06/2021"}
          img={heroBg2}
        />

        <ProjectBox
          name={"Project name 2"}
          content={"Base project 2"}
          date={"08/06/2021"}
          img={heroBg3}
        />

        <ProjectBox
          name={"Project name 2"}
          content={"Base project 2"}
          date={"08/06/2021"}
          img={heroBg4}
        />

        <ProjectBox
          name={"Project name 2"}
          content={"Base project 2"}
          date={"08/06/2021"}
          img={heroBg4}
        />

        <ProjectBox
          name={"Project name 2"}
          content={"Base project 2"}
          date={"08/06/2021"}
          img={heroBg3}
        />

        <ProjectBox
          name={"Project name 2"}
          content={"Base project 2"}
          date={"08/06/2021"}
          img={heroBg2}
        />
      </div>
    </section>
  );
}

export default Projects;
