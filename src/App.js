import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((response) => {
        setCoins(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form action="">
          <input type="text" placeholder="Search" className="coin-input" />
        </form>
      </div>
    </div>
  );
}

export default App;
