import my from "../imgs/my.jpg";
import my1 from "../imgs/hero-bg-2.jpg";
import my2 from "../imgs/hero4.jpg";
import SectionTitle from "./SectionTitle";
import TestimonialBox from "./TestimonialBox";

function Testimonials() {
  return (
    <section className="section-testimonials p-vertical-128" id="testimonials">
      <div className="container mb-48">
        <SectionTitle
          title={"A few words from people that chose to work with me"}
          className="w-660"
        />
      </div>

      <div className="container">
        <div className="testimonials grid grid-cols-3 g-64">
          <TestimonialBox
            quote={
              "“Nha is a skilled developer which will do everything possible to deliver the project on time and I really appreciate that”"
            }
            img={my}
            name={"Samantha Bloom"}
            role={"Team Leader - Syncnow"}
          />
          <TestimonialBox
            quote={
              "“Nha is a skilled developer which will do everything possible to deliver the project on time and I really appreciate that”"
            }
            img={my1}
            name={"Samantha Bloom"}
            role={"Team Leader - Syncnow"}
          />
          <TestimonialBox
            quote={
              "“Nha is a skilled developer which will do everything possible to deliver the project on time and I really appreciate that”"
            }
            img={my2}
            name={"Samantha Bloom"}
            role={"Team Leader - Syncnow"}
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
