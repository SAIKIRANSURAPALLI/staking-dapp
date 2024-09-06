import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
//INTERNAL IMPORT
import {
  Header,
  ICOSale,
  HeroSection,
  Loader,
  Footer,
  Pools,
  PoolsModel,
  WithdrawModal,
  Withdraw,
  Partners,
  Statistics,
  Token,
  Notification,
  Ask,
  Contact,
} from "../Components/index";
import {
  CONTRACT_DATA,
  deposit,
  withdraw,
  claimReward,
  addTokenMetaMask,
} from "../Context/index";
const index = () => {
  const { address } = useAccount();
  const [loader, setLoader] = useState(false);
  const [contactUs, setContactUs] = useState(false);
  const [poolID, setPoolID] = useState();
  const [withdrawPoolID, setWithdrawPoolID] = useState();
  const [poolDetails, setPoolDetails] = useState();
  const [selectedPool, setSelectedPool] = useState();
  const [selectedToken, setSelectedToken] = useState();
  const LOAD_DATA = async () => {
    if (address) {
      setLoader(true);
      const data = await CONTRACT_DATA(address);
      console.log(data);
      setPoolDetails(data);
      setLoader(false);
    }
  };
  useEffect(() => {
    LOAD_DATA();
  }, [address]);
  return (
    <div className="body-backgroundColor">
      <Header />
      <HeroSection
        poolDetails={poolDetails}
        addTokenMetaMask={addTokenMetaMask}
      />
      <Statistics poolDetails={poolDetails} />
      <Pools
        setPoolID={setPoolID}
        poolDetails={poolDetails}
        setSelectedPool={setSelectedPool}
        setSelectedToken={setSelectedToken}
      />
      <Token poolDetails={poolDetails} />
      <Withdraw
        setWithdrawPoolID={setWithdrawPoolID}
        poolDetails={poolDetails}
      />
      <Notification poolDetails={poolDetails} />
      <Partners />
      <Ask setContactUs={setContactUs} />
      <Footer />
      {/*Modal*/}
      <PoolsModel
        deposit={deposit}
        poolID={poolID}
        address={address}
        selectedPool={selectedPool}
        selectedToken={selectedToken}
        setLoader={setLoader}
      />
      <WithdrawModal
        withdraw={withdraw}
        withdrawPoolID={withdrawPoolID}
        address={address}
        setLoader={setLoader}
        claimReward={claimReward}
      />
      <ICOSale setLoader={setLoader} />
      {contactUs && <Contact setContactUs={setContactUs} />}
      {loader && <Loader />}
    </div>
  );
};

export default index;
