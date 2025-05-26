import React from 'react';
import Sidebar from './Sidebar';
import './App.css'; 
import DashboardMainContent from './DashboardMainContent.jsx';
const App = () => {
  return (
    <div className="app-container">
      <div className="main-content">
        <Sidebar />
        <DashboardMainContent/>
      </div>
    </div>
  );
};
export default App;
