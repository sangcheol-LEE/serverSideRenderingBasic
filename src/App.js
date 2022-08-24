import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from './components/Menu';

const App = () => {
  return (
    <div>
      <Menu />
      <hr />
      <Outlet />
    </div>
  );
};

export default App;