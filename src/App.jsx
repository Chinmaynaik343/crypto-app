
import React, { useState, useEffect } from "react";
import "./App.css";
import TableRow from "./TableRow.jsx";

const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch cryptocurrency data.");
        }
        return response.json();
      })
      .then((data) => {
        setCoins(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app">
      <h1>Cryptocurrency Market</h1>
      <p className="subtitle">Top 10 cryptocurrencies by market cap</p>

      {loading && <p className="message">Loading...</p>}

      {error && <p className="error">{error} Please try again later.</p>}

      {!loading && !error && (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Coin</th>
                <th>Price</th>
                <th>24h Change</th>
                <th>Market Cap</th>
                <th>Total Volume</th>
              </tr>
            </thead>

            <tbody>
              {coins.map((coin) => (
                <TableRow key={coin.id} coin={coin} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
