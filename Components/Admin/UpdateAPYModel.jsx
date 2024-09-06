import React, { useState } from "react";
import { IoMdClose } from "../ReactICON";
const UpdateAPYModel = ({ setLoader, modifyPool, modifyPoolID }) => {
  const [amount, setAmount] = useState();
  const CALLING_FUNCTION_MODIFY_POOL = async (modifyPoolID, amount) => {
    setLoader(true);
    console.log(modifyPoolID, amount);
    const receipt = await modifyPool(modifyPoolID, amount);
    if (receipt) {
      console.log(receipt);
      setLoader(false);
      window.location.reload();
    }
    setLoader(false);
  };
  return (
    <div
      className="modal modal--auto fade"
      id="modal-apool"
      tabIndex={-1}
      aria-labelledby="modal-apool"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal__content">
            <button
              className="modal__close"
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="ti ti-x">
                <IoMdClose />
              </i>
            </button>
            <h4 className="modal__title">Invest</h4>
            <p className="modal__text">
              Update Staking Pool #00-{modifyPoolID} APY %
            </p>
            <div className="modal__form">
              <label htmlFor="amount2" className="form__label">
                Enter Amount
              </label>
              <input
                type="text"
                name="amount2"
                id="amount2"
                className="amount2"
                style={{
                  backgroundColor: "transparent",
                }}
                placeholder="Amount in %"
                onChange={(e) => setAmount(e.target.value)}
              />
              <button
                onClick={() =>
                  CALLING_FUNCTION_MODIFY_POOL(modifyPoolID, amount)
                }
                className="form__btn"
                type="button"
              >
                Update APY
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateAPYModel;
