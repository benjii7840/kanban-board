import Sidebar from "../components/sideBar";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-900 h-full">
        <Sidebar />
      </div>
      <div className="bg-gray-100 h-full"></div>
    </div>
  );
};

export default Dashboard;
