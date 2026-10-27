
import React from "react";

function TableRow({ coin }) {
  const change = coin.price_change_percentage_24h;

  return (
    <tr>
      <td>{coin.market_cap_rank}</td>

      <td className="coin-name">
        <img
          src={coin.image}
          alt={coin.name}
          className="coin-image"
        />
        <span>{coin.name}</span>
        <span className="symbol">
          {coin.symbol.toUpperCase()}
        </span>
      </td>

      <td>
        $
        {coin.current_price.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 6
        })}
      </td>

      <td className={change >= 0 ? "positive" : "negative"}>
        {change == null ? "N/A" : `${change.toFixed(2)}%`}
      </td>

      <td>
        ${coin.market_cap.toLocaleString("en-US")}
      </td>

      <td>
        ${coin.total_volume.toLocaleString("en-US")}
      </td>
    </tr>
  );
}

export default TableRow;
