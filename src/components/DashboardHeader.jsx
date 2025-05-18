import { LogOut } from "lucide-react";
import { logout } from "../api/authService"; // Adjust path as needed

const DashboardHeader = () => {
  const handleLogout = () => {
    logout();
  };

  return (
    <div className="flex items-center justify-between px-6 py-4 bg-aaa-dark-bg shadow-md rounded-b-2xl">
      <h1 className="text-white text-2xl font-bold flex items-center gap-2">
        <span className="text-aaa-light-bg">CryptoDash</span>
      </h1>

      <div className="flex items-center gap-4">
        <span className="text-aaa-light-bg font-bold  text-xl">
          Welcome, Admin
        </span>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-3 py-2 bg-red-400 hover:bg-red-700 text-white rounded-lg transition-all"
        >
          <LogOut size={18} />
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
