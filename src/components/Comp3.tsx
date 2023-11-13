import React, { useState } from "react";

const Comp3 = () => {
  let [name, setName] = useState("");
  const changeNameField = (item: React.ChangeEvent<HTMLInputElement>) => {
    resetErrMessage();
    setName(item.target.value);
  };
  let [email, setEmail] = useState("");
  const changeEmailField = (item: React.ChangeEvent<HTMLInputElement>) => {
    resetErrMessage();
    setEmail(item.target.value);
  };
  const errMessage = "All fieldis are required";
  let [errorMessageVar, setErrorMessageVar] = useState("");

  const resetErrMessage = () => {
    setErrorMessageVar("");
  };
  const submitForm = () => {
    if (!name) {
      setErrorMessageVar(errMessage);
    } else if (!email) {
      setErrorMessageVar(errMessage);
    } else {
      alert("form submitted sucessfully");
    }
  };

  return (
    <div>
      <label>Name: </label>{" "}
      <input
        type="text"
        onChange={changeNameField}
        value={name}
        data-testid="name"
      />
      <br />
      <label>Email: </label>{" "}
      <input
        type="email"
        onChange={changeEmailField}
        value={email}
        data-testid="email"
      />
      <br />
      <span style={{ color: "red", fontSize: "10px" }}>{errorMessageVar}</span>
      <br />
      <button data-testid="submit" onClick={submitForm}>
        Submit
      </button>
    </div>
  );
};

export default Comp3;
