function TestimonialBox({ quote, img, name, role }) {
  return (
    <div className="testimonial-box">
      <blockquote className="italic-text mb-24">{quote}</blockquote>
      <div className="testimonial-info flex align-items-center g-8">
        <img src={img} className="testimonial-img" />
        <div className="div flex flex-col g-4">
          <p className="name">{name}</p>
          <p className="role">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialBox;
