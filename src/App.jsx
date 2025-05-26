import React from 'react';
import Sidebar from './Sidebar';
import DashboardMainContent from './DashboardMainContent';
import './App.css'; 
const App = () => {
  return (
    <div className="app-container">
      <div className="main-content">
        <Sidebar />
        <DashboardMainContent />
      </div>
    </div>
  );
};
export default App;