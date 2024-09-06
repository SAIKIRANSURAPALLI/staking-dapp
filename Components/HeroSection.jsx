import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { TiTick } from "./ReactICON";
import { LOAD_TOKEN_ICO } from "../Context/constants";
const CURRENCY = process.env.NEXT_PUBLIC_CURRENCY;
const HeroSection = ({ addTokenMetaMask }) => {
  const { address } = useAccount();
  const [percentage, setPercentage] = useState();
  const [tokenDetails, setTokenDetails] = useState();
  useEffect(() => {
    if (address) {
      const loadToken = async () => {
        const token = await LOAD_TOKEN_ICO();
        setTokenDetails(token);
        console.log(token);
      };
      loadToken();
    }
  }, [address]);
  useEffect(() => {
    const calculatePercentage = () => {
      const tokenSold = tokenDetails?.soldToken ?? 0;
      const tokenTotalSupply =
        tokenDetails?.soldToken + Number(tokenDetails?.tokenBal) * 1 ?? 1;
      const percentageNew = (tokenSold / tokenTotalSupply) * 100;
      if (tokenTotalSupply === 0) {
        console.log("Token Balance is Zero, Cannot Calculate Percentage");
      } else {
        setPercentage(tokenTotalSupply);
      }
    };
    const timer = setTimeout(calculatePercentage, 1000);
    return () => clearTimeout(timer);
  }, [tokenDetails]);
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7 col-xl-6">
            <div className="hero__content hero__content--first">
              <h1 className="hero__title">
                <strong>Crypto King</strong>
                <br />
                Best Return on your investment
              </h1>
              <div className="hero__btns">
                <a
                  type="button"
                  data-bs-target="#modal-deposit1"
                  data-bs-toggle="modal"
                  className="hero__btn"
                >
                  BUY {tokenDetails?.symbol || " "} TOKEN
                </a>
                <a
                  onClick={() => addTokenMetaMask()}
                  className="hero__btn hero__btn--light"
                >
                  ADD TOKEN {tokenDetails?.symbol || " "}
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-5 col-xl-4 offset-xl-2">
            <div className="hero__content hero__content--second">
              <div className="node node--hero">
                <h3 className="node__title node__title--red">
                  <b>{tokenDetails?.symbol || " "}</b> Token ICO
                </h3>
                <span className="node__date">
                  {tokenDetails?.tokenPrice || " "}
                  {CURRENCY}
                </span>
                <span className="node__price">
                  ICO Left:{" "}
                  <b>
                    {tokenDetails?.tokenBal || " "}
                    {tokenDetails?.symbol}
                  </b>
                </span>
                <span className="node__line">
                  <img src="img/dodgers/dots--line-red.svg" alt="" />
                </span>
                <ul className="node__list">
                  <li className="ti">
                    <TiTick />
                    <b>1.1%</b> of the deposit amount
                  </li>
                  <li className="ti">
                    <TiTick />
                    <b>
                      {tokenDetails?.supply}
                      {tokenDetails?.symbol}
                    </b>{" "}
                    Total supply
                  </li>
                </ul>
                <div className={"progressbar progressbar--cta"}>
                  <h3 className="progressbar__title">
                    ICO Sale: {tokenDetails?.soldToken} {tokenDetails?.symbol}
                  </h3>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Animated striped"
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      style={{
                        width: `${percentage}%`,
                      }}
                    >
                      <span>{tokenDetails?.soldToken}</span>
                    </div>
                  </div>
                  <div className="progressbar__values">
                    <span className="progressbar__value progressbar__value--left"></span>
                    <span className="progressbar__value progressbar__value--right">
                      {Number(tokenDetails?.tokenBal || 0) +
                        Number(tokenDetails?.soldToken || 0)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
