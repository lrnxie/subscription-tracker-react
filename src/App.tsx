import React from "react";

import { SubscriptionContextProvider } from "./contexts/SubscriptionContext";
import Header from "./components/Header";
import SubscriptionList from "./components/SubscriptionList";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div>
      <SubscriptionContextProvider>
        <Header />
        <SubscriptionList />
      </SubscriptionContextProvider>
      <Footer />
    </div>
  );
};

export default App;
