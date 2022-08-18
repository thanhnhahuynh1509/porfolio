import { CaretCircleUp } from "phosphor-react";
function AccordionItem({ question, answer, showAccordionItem }) {
  return (
    <div className="accordion-item accordion-open">
      <div className="accordion-header" onClick={showAccordionItem}>
        <CaretCircleUp
          size={24}
          color="#333"
          weight="bold"
          className="icon-accordion"
        />
        <h1 className="heading-four">{question}</h1>
      </div>
      <div className="contain-content-accordion">
        <div className="normal-text-lg w-660 accordion-content flex g-48">
          <div></div>
          <div>{answer}</div>
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
