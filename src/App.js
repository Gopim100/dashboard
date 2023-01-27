import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/Sidebar/SideBar";
import "./App.css";

import Dashboard from "./pages/Dashboard";
import Apppages from "./pages/Apppages";
import Auth from "./pages/Auth";
import User from "./pages/User";
import Layouts from "./pages/Layouts";
import Landingpage from "./pages/Landingpage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className=" w-[100%] flex flex-row">
          <div className="w-[10%] h-[10%]">
            <SideBar />
          </div>
          <div class="w-[90%] flex flex-col">
            <div className="w-[100%]">
              <Navbar />
            </div>
            <div className="h-[90%] pt-20 px-40 lg:px-10 lg:px-none text-center">
              <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/apppages" element={<Apppages />}></Route>
                <Route path="/auth" element={<Auth />}></Route>
                <Route path="/user" element={<User />}></Route>
                <Route path="/layouts" element={<Layouts />}></Route>
                <Route path="/landingpage" element={<Landingpage />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
