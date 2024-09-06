import React, { useState } from "react";
import ButtonCmp from "./RegularComp/ButtonCmp";
import InputField from "./RegularComp/InputField";
import ClickButton from "./RegularComp/ClickButton";
import Title from "./RegularComp/Title";
const Staking = ({ pooldetails, sweep, setLoader }) => {
  const [token, setToken] = useState({
    token: "",
    amount: "",
  });
  const CALLING_FUNCTION_SWEEP = async (token) => {
    setLoader(true);
    console.log(token);
    const receipt = await sweep(token);
    if (receipt) {
      console.log(receipt);
      setLoader(false);
      window.location.reload();
    }
    setLoader(false);
  };
  return (
    <div className="tab-pane fade" id="tab-3" role="tabpanel">
      <div className="row">
        <div className="col-12">
          <div className="profile">
            <ul
              className="nav nav-tabs section__tabs section__tabs--left"
              id="section__profile-tabs2"
              role="tablist"
            >
              <ButtonCmp name={"Sweep"} tab={"f4"} styleClass={"active"} />
            </ul>
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="tab-f4"
                role="tabpanel"
              >
                <div className="row">
                  <Title title={"Withdraw Staking Token Crypto Currency"} />
                  <InputField
                    size={"6"}
                    type={"text"}
                    title={"Token Address"}
                    name={"amount2"}
                    placeholder={`address`}
                    handleChange={(e) =>
                      setToken({ ...token, token: e.target.value })
                    }
                  />
                  <InputField
                    size={"6"}
                    type={"text"}
                    title={"Enter Amount"}
                    name={"amount3"}
                    placeholder={`${pooldetails?.contractTokenBalance}${pooldetails?.depositToken?.symbol}`}
                    handleChange={(e) =>
                      setToken({ ...token, amount: e.target.value })
                    }
                  />
                  <ClickButton
                    name={"Withdraw"}
                    handleClick={() => CALLING_FUNCTION_SWEEP(token)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staking;
