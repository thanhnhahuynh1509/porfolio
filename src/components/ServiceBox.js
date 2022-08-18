function ServiceBox({ title, content, icon }) {
  return (
    <div className="service-box">
      {icon}
      <p className="heading-four mb-16">{title}</p>
      <p className="normal-text">{content}</p>
    </div>
  );
}

export default ServiceBox;
