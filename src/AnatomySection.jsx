import React, { useState } from 'react';
import './AnatomySection.css';
import { IoMdNotifications } from "react-icons/io";

const AnatomySection = () => {
  const [lungsProgress] = useState(70);
  const [teethProgress] = useState(80);
  const [boneProgress] = useState(60);

  const [searchTerm, setSearchTerm] = useState("");
  const [zoomLevel, setZoomLevel] = useState(1);
  const [hoveredPart, setHoveredPart] = useState("");

  // Map of the body parts with their coordinates
  const bodyParts = [
    { name: "Lungs", coords: { x1: 50, y1: 100, x2: 150, y2: 200 } },
    { name: "Bone", coords: { x1: 300, y1: 300, x2: 400, y2: 400 } },
    { name: "Teeth", coords: { x1: 200, y1: 50, x2: 300, y2: 150 } },
    { name: "Head", coords: { x1: 50, y1: 20, x2: 100, y2: 60 } },
    { name: "Right Arm", coords: { x1: 100, y1: 300, x2: 200, y2: 400 } },
    { name: "Left Leg", coords: { x1: 200, y1: 450, x2: 300, y2: 500 } },
    { name: "Right Leg", coords: { x1: 150, y1: 400, x2: 200, y2: 500 } },
    // Add more body parts here as needed
  ];

  // Function to handle mouse move and determine the body part
  const handleMouseMove = (e) => {
    // Get mouse coordinates relative to the image
    const img = e.target;
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Check which body part the mouse is over based on coordinates
    const part = bodyParts.find((part) => {
      return (
        x >= part.coords.x1 &&
        x <= part.coords.x2 &&
        y >= part.coords.y1 &&
        y <= part.coords.y2
      );
    });

    if (part) {
      setHoveredPart(part.name);
    } else {
      setHoveredPart(""); // If mouse is outside any body part
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Filter organs based on search term
  const organs = [
    { name: "Lungs", emoji: "🫁", progress: lungsProgress, date: "24 Oct 2025" },
    { name: "Teeth", emoji: "🦷", progress: teethProgress, date: "25 Oct 2025" },
    { name: "Bone", emoji: "🦴", progress: boneProgress, date: "26 Oct 2025" },
  ];

  const filteredOrgans = organs.filter(organ =>
    organ.name.toLowerCase().includes(searchTerm)
  );

  // Simulated weekly activity data
  const activityData = [
    { day: 'Mon', appointments: 3 },
    { day: 'Tues', appointments: 2 },
    { day: 'Wed', appointments: 5 },
    { day: 'Thu', appointments: 1 },
    { day: 'Fri', appointments: 4 },
    { day: 'Sat', appointments: 2 },
    { day: 'Sun', appointments: 3 },
  ];

  // Zoom functionality
  const zoomIn = () => {
    setZoomLevel(prevZoom => Math.min(prevZoom + 0.2, 3));
  };

  const zoomOut = () => {
    setZoomLevel(prevZoom => Math.max(prevZoom - 0.2, 1));
  };

  return (
    <div className='dashboard'>
      <header className="header">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className='notify'>
          <IoMdNotifications />
        </div>
      </header>

      <h3 className="dashboard-header">Dashboard</h3>

      <div className="anatomy-section">
        <div className="anatomical-illustration">
          <img
            src="https://i.pinimg.com/736x/96/83/04/968304d0e9c4eb4f99a424632505d07f.jpg"
            alt="Human Anatomy"
            className="full-body-anatomy"
            useMap="#anatomy-map"
            style={{ transform: `scale(${zoomLevel})` }}
            onMouseMove={handleMouseMove} 
          />

          <div className="zoom-controls">
            <button onClick={zoomIn}>+</button>
            <button onClick={zoomOut}>-</button>
          </div>

          {hoveredPart && (
            <div className="hover-info">
              <strong>{hoveredPart}</strong>
            </div>
          )}
        </div>

        <div className="health-status-cards">
          {filteredOrgans.length > 0 ? (
            filteredOrgans.map((organ) => (
              <div key={organ.name} className="card">
                <span className="organ-icon">{organ.emoji} {organ.name}</span>
                <h6>Date: {organ.date}</h6>
                <div className="progress-bar-container">
                  <div className="progress-bar" style={{ width: `${organ.progress}%` }}></div>
                </div>
              </div>
            ))
          ) : (
            <p>No organs found for "{searchTerm}"</p>
          )}
        </div>
      </div>

      <div className="activity-feed">
        <div className="activity">
          <h3 className="activity1">Activity</h3>
          <div className="activity2">{activityData.reduce((acc, curr) => acc + curr.appointments, 0)} appointments this week</div>
        </div>

        <div className="bar-chart">
          <div className="bars">
            {activityData.map((data) => (
              <div key={data.day} className="bar-container">
                <div className="bar" style={{ height: `${data.appointments * 10}%` }}></div>
                <div className="bar-label">{data.day}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default AnatomySection;
