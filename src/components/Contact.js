import SectionTitle from "./SectionTitle";

function Contact() {
  return (
    <section className="section-contact p-vertical-128" id="contact">
      <div className="container">
        <SectionTitle
          title={"Contact details"}
          content={
            "For any type of online project please don't hesitate to get in touch with me. The fastest way is to send me your message using the following email contact@domain.com"
          }
        />
      </div>
      <div className="container flex justify-content-center">
        <form action="#" className="form-contact w-660 flex flex-col g-24">
          <div className="input-field">
            <input
              placeholder=" "
              type="text"
              className="w-100-percent input-item"
              required
            />
            <label>Name</label>
          </div>
          <div className="input-field">
            <input
              placeholder=" "
              type="email"
              className="w-100-percent input-item"
              required
            />
            <label>Email</label>
          </div>
          <div className="textarea-field">
            <textarea
              placeholder=" "
              type="text"
              className="w-100-percent textarea-item"
              rows={"15"}
            ></textarea>
            <label>Project details</label>
          </div>
          <button type="submit" className="btn btn-filled">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
