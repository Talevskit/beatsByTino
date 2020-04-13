import React from "react";
import useHooks from "./Hooks";

const Login = () => {
  const { inputs, handleInputChange, handleSubmit } = useHooks;
  return (
    <div>
      <form onSubmit={handleSubmit} className="login">
        <h3>Log In</h3>
        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={inputs.username}
          onChange={handleInputChange}
        ></input>
        <br></br>
        <label>Password</label>
        <input
          type="password"
          name="pass"
          placeholder="Password"
          value={inputs.pass}
          onChange={handleInputChange}
        ></input>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Login;
