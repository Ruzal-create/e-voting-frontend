import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import SignUp from "./login/SignUp";
import SignIn from "./login/SignIn";
import Voting from "./Pages/voting";
import Home from "./Pages/Home"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/voting" element={<Voting/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;