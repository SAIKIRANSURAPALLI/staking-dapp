import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import toast from "react-hot-toast";
import { IoMdClose } from "./ReactICON";
const FORMSPREE_API = process.env.NEXT_PUBLIC_FORMSPREE_API;
const Contact = ({ setContactUs }) => {
  const notifySuccess = (msg) => toast.success(msg, { duration: 2000 });
  const [state, handleSubmit] = useForm(FORMSPREE_API);
  if (state.succeeded) {
    return notifySuccess("Message sent successfully");
  }
  return (
    <div
      className="modal modal--auto fade show"
      id="modal-ask"
      tabIndex={-1}
      aria-labelledby="modal-ask"
      ari-modal="true"
      role="dialog"
      style={{
        display: "block",
        paddingLeft: 0,
      }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal__content">
            <button
              className="modal__close"
              onClick={() => setContactUs(false)}
            >
              <i className="ti ti-x">
                <IoMdClose />
              </i>
            </button>
            <h4 className="modal__title">Ask A Question</h4>
            <p className="modal__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <form onSubmit={handleSubmit} className="modal__form">
              <div className="form__group">
                <input
                  type="name"
                  name="name"
                  id="name"
                  className="form__input"
                  placeholder="Name"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div className="form__group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form__input"
                  placeholder="Email"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="form__group">
                <textarea
                  type="message"
                  name="message"
                  id="message"
                  className="form__textarea"
                  placeholder="Your Questions"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <button
                type="submit"
                className="form__btn"
                disabled={state.submitting}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
