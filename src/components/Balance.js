import React from "react";

function Balance({ transactions }) {
  const amounts = transactions.map((t) => t.amount);

  const total = amounts.reduce((acc, item) => acc + item, 0);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => acc + item, 0);

  return (
    <div>
      <h3>Balance: ₹{total}</h3>
      <p>Income: ₹{income}</p>
      <p>Expense: ₹{Math.abs(expense)}</p>
    </div>
  );
}

export default Balance;