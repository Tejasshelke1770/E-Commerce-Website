import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Details from "./components/Details";
import Create from "./components/Create";
import Edit from "./components/Edit";

function App() {
  const {search, pathname} = useLocation();
  return (
    <div className="h-screen w-screen  flex">
      {(pathname  != "/" || search.length > 0) && (
        <Link to="/" className="text-red-300 absolute left-[17%] top-[3%]"  >Home</Link>
      )}

      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/create" element={<Create />} /> 
        <Route path="/details/:id" element={<Details/>} /> 
        <Route path="/edit/:id" element={< Edit/> } />
      </Routes>

    
    </div>
  );
}

export default App;
