import React from "react";

const Ask = ({ setContactUs }) => {
  return (
    <section id="ask" className="section">
      <div className="container">
        <div className="row row-relative">
          <div className="col-12">
            <div className="question">
              <h2 className="question__title">Any Questions</h2>
              <p className="question__text">
                Our Support Team is always on call and ready to help you with
                all your questions.
              </p>
              <div className="section__btns section__btns--mt">
                <button
                  className="section__btn section__btn--light"
                  onClick={() => setContactUs(true)}
                >
                  Ask a question
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ask;
