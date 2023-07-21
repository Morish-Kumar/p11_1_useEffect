import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
// import { Component } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 
  // const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn')

  // if(storedUserLoggedInInformation === '1'){
  //   setIsLoggedIn(true)
  // }

  // problem with above multi line comment is that the it will re-render when the Component re-runs

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);
  // if the dependecy array is empty it means particular useEffect function will run only once

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1"); // 1 is to signal that the user is logged in and 0 for not logged in
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn') // remove the item from localeStorage
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
