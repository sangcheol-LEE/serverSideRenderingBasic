import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import RedPage from './page/RedPage';
import BluePage from './page/BluePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}>
          <Route path="/red" element={<RedPage />}/>
          <Route path="/blue" element={<BluePage />}/>
        </Route>
    </Routes>
  </BrowserRouter>
);

