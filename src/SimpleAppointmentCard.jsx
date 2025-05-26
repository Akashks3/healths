
import React from 'react';
import './SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ title, time }) => {
  return (
    <div className="simple-appointment-card">
      <span>{title}</span>
      <span>{time}</span>
    </div>
  );
};

export default SimpleAppointmentCard;
