import React, { useState } from "react";
import { connectWallet } from "./wallet";
import Wallet from "./components/wallet";

const App: React.FC = () => {

  return (
      <div>
        <Wallet />
      </div>
  );
};

export default App;
