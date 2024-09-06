import React, { useState, useEffect } from "react";
import { useAccount } from "wagmi";
//INTERNAL IMPORT
import {
  Header,
  Footer,
  Loader,
  ICOSale,
  Statistics,
  Notification,
} from "../Components/index";
import { CONTRACT_DATA } from "../Context/index";
const activities = () => {
  const { address } = useAccount();
  const [loader, setLoader] = useState(false);
  const [poolDetails, setPoolDetails] = useState();
  const LOAD_DATA = async () => {
    if (address) {
      setLoader(true);
      const data = await CONTRACT_DATA(address);
      setPoolDetails(data);
      setLoader(false);
    }
  };
  useEffect(() => {
    LOAD_DATA();
  }, [address]);
  return (
    <div classname="body-backgroundColor">
      <Header page={"activity"} />
      <div className="new-margin"></div>
      <Statistics poolDetails={poolDetails} />
      <Notification page={"activity"} poolDetails={poolDetails} />
      <Footer />
      <ICOSale setLoader={setLoader} />
      {loader && <Loader />}
    </div>
  );
};

export default activities;
