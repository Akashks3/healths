import React, { useState } from 'react';
import './Sidebar.css'; 
import { FaCalendar, FaClipboardList, FaChartBar, FaComments, FaCog } from 'react-icons/fa';
import { IoIosCall } from "react-icons/io";
import { TbCategory2 } from "react-icons/tb";
import { HiSwitchVertical } from "react-icons/hi";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <aside className="sidebar">
      <header className="header">
        <div className="logo">
          <span className="logo-health">Health</span><span className="logo-care">care.</span>
        </div>
      </header>
      <h2>General</h2>
      <nav>
        <ul>
          <li className={activeItem === 'Dashboard' ? 'active' : ''} onClick={() => handleItemClick('Dashboard')}>
            < TbCategory2 /> Dashboard
          </li>
          <li className={activeItem === 'History' ? 'active' : ''} onClick={() => handleItemClick('History')}>
            <HiSwitchVertical /> History
          </li>
          <li className={activeItem === 'Calendar' ? 'active' : ''} onClick={() => handleItemClick('Calendar')}>
            <FaCalendar /> Calendar
          </li>
          <li className={activeItem === 'Appointments' ? 'active' : ''} onClick={() => handleItemClick('Appointments')}>
            <FaClipboardList /> Appointments
          </li>
          <li className={activeItem === 'Statistics' ? 'active' : ''} onClick={() => handleItemClick('Statistics')}>
            <FaChartBar /> Statistics
          </li>
        </ul>
        <h2>Tests</h2>
        <ul>
          <li className={activeItem === 'Chat' ? 'active' : ''} onClick={() => handleItemClick('Chat')}>
            <FaComments /> Chat
          </li>
          <li className={activeItem === 'Support' ? 'active' : ''} onClick={() => handleItemClick('Support')}>
            <IoIosCall />Support
          </li>
        </ul>
        <ul>
          <li className={activeItem === 'Setting' ? 'active' : ''} onClick={() => handleItemClick('Setting')}>
            <FaCog /> Setting
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
