import React, { useState } from "react";

const useHooks = () => {
  const [inputs, setInputs] = useState([{ username: "", pass: "", email: "" }]);
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
  };
  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  return <div>{(handleSubmit, handleInputChange, inputs)}</div>;
};
export default useHooks;
