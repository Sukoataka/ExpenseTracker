import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //const [userInput, setUserInput] = useState({
  //enteredTitle: "",
  //enteredAmount: "",
  //enteredDate: "",
  //});

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //setUserInput((prevState) => {
    //return { ...prevState, enteredTitle: event.target.value}
    //})
  };

  const amountChangeHandler = (event) => {
    //setUserInput((prevState) => {
    //return { ...prevState, enteredAmount: event.target.value}
    //})
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    //setUserInput((prevState) => {
    //})
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Titel</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Prijs</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Datum</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Annuleer
        </button>
        <button type="submit">Voeg toe</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
