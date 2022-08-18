import ServiceBox from "./ServiceBox";
import { SelectionBackground, BracketsCurly, Rocket } from "phosphor-react";
import SectionTitle from "./SectionTitle";
function Services() {
  return (
    <section className="section-services p-vertical-128" id="services">
      <SectionTitle
        title={"Offered services"}
        content={
          "Web design and development have been my bread and butter for more than 5 years. During that time I've discovered that I can help startups and companies with the following services"
        }
      />
      <div className="container grid grid-cols-3 g-24">
        <ServiceBox
          title={"Design"}
          content={
            "Successful online projects start with good design. It establishes a solid foundation for future development and allows for long term growth"
          }
          icon={
            <SelectionBackground
              className="mb-24"
              size={48}
              weight={"bold"}
              color={"#1098ad"}
            />
          }
        />

        <ServiceBox
          title={"Development"}
          content={
            "I can code my own designs or even use the customer's design as base. My focus is to generate clean code that's well structured for reliability"
          }
          icon={
            <BracketsCurly
              className="mb-24"
              size={48}
              weight={"bold"}
              color={"#1098ad"}
            />
          }
        />

        <ServiceBox
          title={"Deploy"}
          content={
            "i can setup your project to use basic SEO principles which will push your project to the first page on search engines and save you ads money"
          }
          icon={
            <Rocket
              className="mb-24"
              size={48}
              weight={"bold"}
              color={"#1098ad"}
            />
          }
        />
      </div>
    </section>
  );
}

export default Services;
