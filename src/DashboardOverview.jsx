import './Header.css'
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthCalendar';
import UpcomingSchedule from './UpcomingSchedule';
import './DashboardOverview.css'; 

const DashboardOverview = () => {
  return (
    <div className="dashboard-overview">
      <AnatomySection />
      <div>
      <HealthStatusCards />
      <UpcomingSchedule />
      </div>
    </div>
  );
};

export default DashboardOverview;
