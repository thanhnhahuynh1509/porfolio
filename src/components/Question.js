import AccordionItem from "./AccordionItem";
import SectionTitle from "./SectionTitle";

function Question() {
  // let currentAccordion = null;
  const showAccordionItem = (e) => {
    // if (currentAccordion != null) {
    //   currentAccordion.classList.remove("accordion-open");
    // }
    const accordionItem = e.target.closest(".accordion-item");
    // if (currentAccordion === accordionItem) {
    //   currentAccordion = null;
    //   return;
    // }
    accordionItem.classList.toggle("accordion-open");
    // currentAccordion = accordionItem;
  };
  return (
    <section className="section-questions p-vertical-128" id="questions">
      <div className="container">
        <SectionTitle title={"Frequent questions"} />
        <div className="container flex justify-content-center">
          <ul className="accordion-list">
            <li>
              <AccordionItem
                question="How can I contact you and quickly get a quote for my online project?"
                answer="The best way to reach me is through the contact form of by messaging me on my social media accounts. For a fast quote make sure your provide many project details"
                showAccordionItem={showAccordionItem}
              />
            </li>
            <li>
              <AccordionItem
                question="How can I contact you and quickly get a quote for my online project?"
                answer="The best way to reach me is through the contact form of by messaging me on my social media accounts. For a fast quote make sure your provide many project details"
                showAccordionItem={showAccordionItem}
              />
            </li>
            <li>
              <AccordionItem
                question="How can I contact you and quickly get a quote for my online project?"
                answer="The best way to reach me is through the contact form of by messaging me on my social media accounts. For a fast quote make sure your provide many project details"
                showAccordionItem={showAccordionItem}
              />
            </li>
            <li>
              <AccordionItem
                question="How can I contact you and quickly get a quote for my online project?"
                answer="The best way to reach me is through the contact form of by messaging me on my social media accounts. For a fast quote make sure your provide many project details"
                showAccordionItem={showAccordionItem}
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Question;
