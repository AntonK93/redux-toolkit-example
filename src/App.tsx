import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { userAuthApi } from "./store/api/userAuthApi";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from './store/store';
import { updateCredentials } from './store/slice/user';

function App() {
  const [apiCallUserLogin] = userAuthApi.useLazyUserLoginQuery();
  const userStore = useSelector((state: RootState) => state.userStore);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="wrapper">
          <div className="login-container">
             <form onSubmit={(e) => { e.preventDefault(); apiCallUserLogin({ email: userStore.email, password: userStore.password })}}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={userStore.email}
                    onChange={(e) => dispatch(updateCredentials({ email: e.target.value }))}
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={userStore.password}
                    onChange={(e) => dispatch(updateCredentials({ password: e.target.value }))}
                    required
                />
                <input type="submit" value="Login" />
            </form>
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;
