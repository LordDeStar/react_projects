import React from "react";
import "./../Styles/Auth.css";

const Auth = () => {
  return (
    <div class="containerAuth">
      <h1>Authorization</h1>
      <form>
          <div class="inputBox">
            <input type="text" name="login" required="required"/>
            <span>Login</span>
          </div>
          <div class="inputBox">
            <input type="password" name="pass" required="required"/>
            <span>Password</span>
          </div>
          <div class="inputBox">
            <input type="submit" value="Enter" name=""/>
          </div>
      </form>
    </div>
  );
}

export default Auth;