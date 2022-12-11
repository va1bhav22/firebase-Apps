import React from "react";
import {Routes,Route} from "react-router-dom"
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Single from "./Pages/Single/Single";
function App() {
  return <>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/single" element={<Single/>}></Route>
        {/* <Route path="" element={}></Route>
        <Route path="" element={}></Route>
        <Route path="" element={}></Route>
        <Route path="" element={}></Route>
        <Route path="" element={}></Route> */}

    </Routes>
  </>;
}

export default App;
