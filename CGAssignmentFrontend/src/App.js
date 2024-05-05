import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Container } from "@material-ui/core";
import Register from "./components/Register";

import { AuthProvider } from "./components/AuthContext";
import PageTransition from "./components/PageTransition";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import { UserContext } from "./context/UserContext";

import Board from "./components/Board"; // Add this


import './App.css';


const App = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser, token, setToken }}>
        <AuthProvider>
          <Router>
            <Navbar />
            <Container>
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<PageTransition component={HomePage} />} />
                  <Route path="/register" element={<PageTransition component={Register} />} />
                  <Route path="/board" element={<PageTransition component={Board} />} /> 
                </Routes>
              </AnimatePresence>
            </Container>
          </Router>
        </AuthProvider>
      </UserContext.Provider>
    </div>
  );
};

export default App;
