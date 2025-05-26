import React from "react";
import SimpleAppointmentCard from "./SimpleAppointmentCard";
import "./UpcomingSchedule.css";

const UpcomingSchedule = () => {
  return (
    <>
      <h3>The Upcoming Schedule</h3>

      <div>On Thursday</div>
      <div className="upcoming-schedule">
        <SimpleAppointmentCard
          title="Health checkup complete 🩺"
          time="10:00"
        />
        <SimpleAppointmentCard title="Ophthalmologist 👁️" time="14:00" />
      </div>
      <div>On Saturday</div>
      <div className="upcoming-schedule">
        <SimpleAppointmentCard time="09:00" title="Cardiology ❤️" />
        <SimpleAppointmentCard title="Neurology 🧠" time="11:30" />
      </div>
    </>
  );
};

export default UpcomingSchedule;
