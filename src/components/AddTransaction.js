import React, { useState } from "react";

function AddTransaction({ addTransaction }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
    setText("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Transaction</h3>
      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">Add</button>
      
      
    </form>
  );
}

export default AddTransaction;