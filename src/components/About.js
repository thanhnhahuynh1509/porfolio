import CareerInfo from "./CareerInfo";

function About() {
  return (
    <section className="section-about p-vertical-128" id="about">
      <div className="container grid grid-cols-3 g-48 grid-cols-2-md">
        <div className="about-info">
          <h3 className="support-text mb-32">About me</h3>
          <h2 className="heading-tertiary mb-16">Hi there I'm Nha,</h2>
          <p className="normal-text">
            And I love to create beautiful and efficient websites for my
            customers. I love going through the entire process with the customer
            from concept, to design and then development and launch
          </p>
        </div>
        <div className="about-career">
          <div className="carrer-info">
            <div className="primary-text mb-8">2019 - PRESENT</div>
            <div className="title-text">Student at Hutech University</div>
            <p className="normal-text">
              I'm study at Hutech University and done it with 92% scores
            </p>
          </div>

          <CareerInfo
            time="2019 - Present"
            title="Student at Hutech University"
            content="I'm study at Hutech University and done it with 92% scores"
          />
        </div>
        <div className="about-career">
          <CareerInfo
            time="2019 - Present"
            title="Student at Hutech University"
            content="I'm study at Hutech University and done it with 92% scores"
          />

          <CareerInfo
            time="2019 - Present"
            title="Student at Hutech University"
            content="I'm study at Hutech University and done it with 92% scores"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
