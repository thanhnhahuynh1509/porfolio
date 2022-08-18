import {
  Target,
  ProjectorScreen,
  Calendar,
  ArrowCircleRight,
} from "phosphor-react";

function ProjectBox({ name, content, date, img }) {
  return (
    <div className="project-box">
      <div className="img-project-contain mb-12">
        <img src={img} alt="" className="w-100-percent img-project" />
      </div>
      <div className="flex flex-col g-12">
        <p className="normal-text-lg icon-and-text g-12">
          <ProjectorScreen size={18} color={"#1098ad"} />
          <span>{name}</span>
        </p>
        <p className="normal-text-lg icon-and-text g-12">
          <Target size={18} color={"#1098ad"} />
          <span>{content}</span>
        </p>
        <p className="normal-text-lg icon-and-text g-12">
          <Calendar size={18} color={"#1098ad"} />
          <span>{date}</span>
        </p>
        <p>
          <a className="normal-text-link icon-and-text g-8" href="#">
            See more details
            <ArrowCircleRight
              className="icon"
              size={18}
              color={"#084c57"}
              weight={"fill"}
            />
          </a>
        </p>
      </div>
    </div>
  );
}

export default ProjectBox;
