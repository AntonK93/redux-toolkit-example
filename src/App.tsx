import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { userAuthApi } from "./store/api/userAuthApi";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from './store/store';
import { updateUserName } from './store/slice/user';

function App() {
  const [apiCallUserLogin] = userAuthApi.useLazyUserLoginQuery();
  const userStore = useSelector((state: RootState) => state.userStore);
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({ email: 'test', password: 'test' });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="wrapper">
          <div className="login-container">
             <form onSubmit={(e) => { e.preventDefault(); apiCallUserLogin(credentials); }}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={credentials.email}
                    onChange={(e) => setCredentials({... credentials, email: e.target.value })}
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={credentials.password}
                    onChange={(e) => setCredentials({... credentials, password: e.target.value })}
                    required
                />
                <input type="submit" value="Login" />
            </form>
          </div>
          <div className="login-container">
                <label htmlFor="id">User id: {userStore.first_name}</label>
                <input
                    type="text"
                    id="id"
                    value={userStore.first_name}
                    onChange={(e) => dispatch(updateUserName(e.target.value))}
                    required
                />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
