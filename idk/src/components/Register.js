import React from "react";
import useHooks from "./Hooks";
const Register = () => {
  const { inputs, handleInputChange, handleSubmit } = useHooks;
  return (
    <form onSubmit={handleSubmit} className="register">
      <h3>Register</h3>
      <label>Username</label>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={inputs.username}
        onChange={handleInputChange}
      ></input>
      <label>E-mail</label>
      <input
        type="text"
        name="email"
        placeholder="E-mail"
        value={inputs.email}
        onChange={handleInputChange}
      ></input>

      <label>Password</label>
      <input
        type="password"
        name="pass"
        placeholder="Password"
        value={inputs.pass}
        onChange={handleInputChange}
      ></input>
      <button className="btn">Submit</button>
    </form>
  );
};
export default Register;
