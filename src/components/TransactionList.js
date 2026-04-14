import React from "react";

function TransactionList({ transactions, deleteTransaction }) {
  return (
    <div>
      <h3>Transactions</h3>
      <ul>
        {transactions.map((t) => (
          <li key={t.id}>
            {t.text} - ₹{t.amount}
            <button onClick={() => deleteTransaction(t.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;