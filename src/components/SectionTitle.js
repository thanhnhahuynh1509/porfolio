function SectionTitle({ title, content, className }) {
  let allClass = "container text-center mb-64 " + className;

  return (
    <div className={allClass}>
      <div className="contain-title mb-32">
        <h2 className="heading-tertiary">{title}</h2>
      </div>

      <p className="normal-text-lg service-text">{content}</p>
    </div>
  );
}

export default SectionTitle;
