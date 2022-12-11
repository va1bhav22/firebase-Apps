import React from "react";
import {Routes,Route, Navigate} from "react-router-dom"
import Home from "./Pages/Home/Home";
import List from "./Pages/List/List";
import Login from "./Pages/Login/Login";
import Single from "./Pages/Single/Single";
function App() {

  const currentUser = false ;
////////////////////////////// Required Authenticatiion /////////////////////////////////////////////
  const RequireAuth=({children})=>{
    return currentUser ? (children) : <Navigate to='/login' />
  }
  ////////////////////////////// Required Authenticatiion End /////////////////////////////////////////////
  return <>
    <Routes>
       <Route path="/login" element={<Login/>}></Route>
        <Route path="/" element={<RequireAuth><Home/></RequireAuth>}></Route>
        <Route path="/single" element={<RequireAuth><Single/></RequireAuth>}></Route>
        <Route path="" element={<RequireAuth><Single/></RequireAuth>}></Route>
        <Route path="" element={<List/>}></Route>

        {/* <Route path="" element={}></Route>
        <Route path="" element={}></Route>
        <Route path="" element={}></Route> */}

    </Routes>
  </>;
}

export default App;
