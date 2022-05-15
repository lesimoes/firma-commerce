import React, { useState } from 'react';
import './App.css';
import GlobalStyle from './styles/globalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Sign } from './pages/sign/Sign';
import UserContext from './contexts/UserContext';
import { MainLayout } from './layouts/MainLayout';
import Shop from './pages/shop/Shop';

function App() {

  const [user, setUser] = useState({});

  return (
    <div className="App">
      <GlobalStyle />
      <UserContext.Provider value={{user, setUser}}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/sign" element={<Sign />} />
            <Route element={<MainLayout />}>
              <Route exact path="/" element={<Home />} />
            </Route>
            <Route element={<MainLayout />}>
              <Route exact path="/shop" element={<Shop />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
