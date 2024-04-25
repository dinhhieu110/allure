import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { RootState } from './redux-context/store/store';
import { useSelector } from 'react-redux';
import './App.scss';
import { Language, ThemeProvider, getAllureTheme } from '@gui/fluent-ui-allure';

import NavBar from './components/navbar/NavBar';
import NavigationBar from './components/navigationbar/NavigationBar';
import Dialog from './pages/dialog/Dialog';
import Buttons from './pages/buttons/Buttons';
import Introduction from './pages/introduction/Introduction';

import { getThemeColor } from './util/theme';
import Error from './pages/error/Error';
function App() {
  const colorName = useSelector((state: RootState) => state.theme.value);
  console.log(colorName);

  return (
    <ThemeProvider
      theme={getAllureTheme(getThemeColor(colorName), Language.EN)}
    >
      <div className="App">
        <div className="wrapper">
          <Router>
            <NavBar />
            <div className="body-container">
              <NavigationBar />
              <div className="page-container">
                <Routes>
                  <Route path="/" element={<Introduction />} />
                  <Route path="/dialog" element={<Dialog />} />
                  <Route path="/button" element={<Buttons />} />
                  <Route path="/introduction" element={<Introduction />} />
                  <Route path="/error" element={<Error />} />
                </Routes>
              </div>
            </div>
          </Router>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
