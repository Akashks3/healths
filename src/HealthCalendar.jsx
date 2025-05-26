import React, { useState} from "react";
import "./HealthCalendar.css";

const HealthStatusCards = () => {
  const currentDate = new Date();

  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());


 

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  const generateMonthData = (year, month) => {
    const totalDays = daysInMonth(year, month);
    const days = [];
    for (let day = 1; day <= totalDays; day++) {
      const dateObj = new Date(year, month, day);
      const isToday =
        dateObj.toDateString() === new Date().toDateString();
      const isPast = dateObj < new Date().setHours(0, 0, 0, 0);
      const isFuture = dateObj > new Date().setHours(23, 59, 59, 999);

      days.push({
        day,
        weekday: weekdays[dateObj.getDay()],
        isToday,
        isPast,
        isFuture,
      });
    }

    return {
      monthName: new Date(year, month).toLocaleString("default", { month: "long" }),
      days,
    };
  };

  const { monthName, days } = generateMonthData(currentYear, currentMonth);

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className="health-status-cards">
      <header className="header">
        <div className="user-profile">
          <img className="avatar" alt="" />
          <button className="add-button">+</button>
        </div>
       
      </header>

      <div className="calendar-view-row">
        <div className="navigation-row">
            <span className="current-label">
            {monthName} {currentYear}
          </span>
          <button onClick={goToPreviousMonth} className="year-nav-button">← </button>
          <button onClick={goToNextMonth} className="year-nav-button"> →</button>
        
        </div>

        <div className="month-section single-row">
          <div className="month-days-header">
            {weekdays.map((weekday) => (
              <div key={weekday} className="weekday-name">{weekday}</div>
            ))}
          </div>
          <div className="month-days-grid row-style">
            {(() => {
              const firstDayWeekday = days[0]?.weekday || "Sun";
              const emptySlotsCount = weekdays.indexOf(firstDayWeekday);
              return Array.from({ length: emptySlotsCount }).map((_, idx) => (
                <div key={"empty-" + idx} className="day empty"></div>
              ));
            })()}
            {days.map(({ day, isToday, isPast, isFuture }) => {
              let className = "day";
              if (isToday) className += " today";
              else if (isPast) className += " past";
              else if (isFuture) className += " future";

              return <div key={day} className={className}>{day}</div>;
            })}
          </div>
        </div>

        <div className="upcoming-schedule">
          <div className="simple-appointment-card">
            Dentist 🦷 <br /> 09:00
          </div>
          <div className="simple-appointment-card">
            Physiotherapy Appointment 🤲 <br /> 11:00
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthStatusCards;
