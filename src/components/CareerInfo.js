function CareerInfo({ time, title, content }) {
  return (
    <div className="carrer-info">
      <div className="primary-text mb-8">{time}</div>
      <div className="title-text">{title}</div>
      <p className="normal-text">{content}</p>
    </div>
  );
}

export default CareerInfo;
