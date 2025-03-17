import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import Sidebar from "./Sidebar";
import SettingsPanel from "./SettingsPanel";
import EditProfilePage from "./EditProfilePage";

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend, Filler);

function Dashboard({ user, setUser, activeItem, handleItemSelected }) {
  const [localActiveForm, setLocalActiveForm] = useState(null); // Ensure it starts as null
  const navigate = useNavigate();

  useEffect(() => {
    // Set initial localActiveForm based on user role if no activeItem is selected
    if (user && !activeItem) {
      let initialForm = null;
      if (user.role === "business_owner") {
        initialForm = 'charts';
      } else if (user.role === "store_manager") {
        initialForm = 'salesReport';
      } else if (user.role === "admin") {
        initialForm = 'adminReports';
      }
      setLocalActiveForm(initialForm);
      handleItemSelected(initialForm); // Update activeItem in App.js as well
    }
  }, [user, handleItemSelected, activeItem]); // Add activeItem to dependencies

  useEffect(() => {
    // Update localActiveForm when activeItem changes
    setLocalActiveForm(activeItem);
  }, [activeItem]);

  const handleSidebarItemClick = (item) => {
    handleItemSelected(item); // Call handleItemSelected to update activeItem in App.js
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/');
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart Title',
      },
    },
  };

  const businessData = {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Number of Stores',
        data: [5, 8, 12, 15, 20],
        backgroundColor: 'rgb(210, 180, 140)',
        borderColor: 'rgb(12, 12, 12)',
        borderWidth: 1,
      },
    ],
  };

  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales ($)',
        data: [10000, 15000, 12000, 18000, 22000, 25000],
        borderColor: 'rgb(210, 180, 140)',
        backgroundColor: 'rgba(52, 120, 139, 0.2)',
        fill: true,
      },
    ],
  };
  const userStatsData = {
    labels: ['Business Owners', 'Store Managers'],
    datasets: [
      {
        label: 'User Distribution',
        data: [20, 35],
        backgroundColor: ['#FF5733', '#33FF57'],
      },
    ],
  };

  const financialReportData = {
    labels: ['Sales', 'Revenue', 'Tax', 'Expenses'],
    datasets: [
      {
        label: 'Amount ($)',
        data: [50000, 70000, 10000, 20000],
        backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384', '#4BC0C0'],
      },
    ],
  };
  const expenseData = {
    labels: ['Rent', 'Utilities', 'Salaries', 'Marketing', 'Supplies'],
    datasets: [
      {
        label: 'Expenses ($)',
        data: [3000, 1000, 7000, 2000, 1500],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  const dailySalesData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Daily Sales ($)',
        data: [2000, 2500, 2200, 2700, 3000, 3500, 4000],
        backgroundColor: 'rgb(193, 147, 181)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 2,
      },
    ],
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex-1 p-4 overflow-y-auto">
        {activeItem === 'settings' ? (
          <SettingsPanel />
        ) : activeItem === 'edit-profile' ? (
          <EditProfilePage user={user} setUser={setUser} />
        ) : (
          <>
            {/* Business Owner Dashboard */}
            {user.role === "business_owner" && (
              <>
                {localActiveForm === 'business' && (
                  <div className="bg-white shadow-md rounded-md p-4 mb-4">
                    <h4 className="text-lg font-semibold mb-2">Create or Manage Business</h4>
                    <input type="text" placeholder="Business Name" className="w-full p-2 border rounded-md mb-2" />
                    <textarea placeholder="Business Description" className="w-full p-2 border rounded-md mb-2"></textarea>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save Business</button>
                  </div>
                )}
                {localActiveForm === 'invoice' && (
                  <div className="bg-white shadow-md rounded-md p-4 mb-4">
                    <h4 className="text-lg font-semibold mb-2">Create or Manage Invoice</h4>
                    <input type="text" placeholder="Invoice Number" className="w-full p-2 border rounded-md mb-2" />
                    <input type="date" placeholder="Invoice Date" className="w-full p-2 border rounded-md mb-2" />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save Invoice</button>
                  </div>
                )}
                {localActiveForm === 'tax' && (
                  <div className="bg-white shadow-md rounded-md p-4 mb-4">
                    <h4 className="text-lg font-semibold mb-2">Tax & Compliance Settings</h4>
                    <input type="text" placeholder="Tax Rate" className="w-full p-2 border rounded-md mb-2" />
                    <textarea placeholder="Compliance Details" className="w-full p-2 border rounded-md mb-2"></textarea>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save Tax Settings</button>
                  </div>
                )}
                {localActiveForm === 'charts' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white shadow-md rounded-md p-4">
                      <h4 className="text-lg font-semibold mb-2">Number of Stores Over Years</h4>
                      <div style={{ height: '300px' }}>
                        <Bar data={businessData} options={chartOptions} />
                      </div>
                    </div>
                    <div className="bg-white shadow-md rounded-md p-4">
                      <h4 className="text-lg font-semibold mb-2">Sales Report (Last 6 Months)</h4>
                      <div style={{ height: '300px' }}>
                        <Line data={salesData} options={chartOptions} />
                      </div>
                    </div>
                    <div className="bg-white shadow-md rounded-md p-4">
                      <h4 className="text-lg font-semibold mb-2">Expense Breakdown</h4>
                      <div style={{ height: '300px' }}>
                        <Pie data={expenseData} options={chartOptions} />
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Store Manager Dashboard */}
            {user.role === "store_manager" && (
              <>
                {localActiveForm === 'invoice' && (
                  <div className="bg-white shadow-md rounded-md p-4 mb-4">
                    <h4 className="text-lg font-semibold mb-2">Create or Process Invoice</h4>
                    <input type="text" placeholder="Invoice Number" className="w-full p-2 border rounded-md mb-2" />
                    <input type="date" placeholder="Invoice Date" className="w-full p-2 border rounded-md mb-2" />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Generate Invoice</button>
                  </div>
                )}
                {localActiveForm === 'inventory' && (
                  <div className="bg-white shadow-md rounded-md p-4 mb-4">
                    <h4 className="text-lg font-semibold mb-2">Track & Manage Inventory</h4>
                    <input type="text" placeholder="Product Name" className="w-full p-2 border rounded-md mb-2" />
                    <input type="number" placeholder="Stock Quantity" className="w-full p-2 border rounded-md mb-2" />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update Inventory</button>
                  </div>
                )}
                {localActiveForm === 'customers' && (
                  <div className="bg-white shadow-md rounded-md p-4 mb-4">
                    <h4 className="text-lg font-semibold mb-2">Manage Customer Records</h4>
                    <input type="text" placeholder="Customer Name" className="w-full p-2 border rounded-md mb-2" />
                    <input type="text" placeholder="Purchase History" className="w-full p-2 border rounded-md mb-2" />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save Customer</button>
                  </div>
                )}
                {localActiveForm === 'salesReport' && (
                  <div className="grid grid-cols-1">
                    <div className="bg-white shadow-md rounded-md p-4">
                      <h4 className="text-lg font-semibold mb-2">Daily Sales Report</h4>
                      <div style={{ height: '300px' }}>
                        <Bar data={dailySalesData} options={chartOptions} />
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Admin Dashboard */}
            {user.role === "admin" && (
              <>
                {localActiveForm === 'manageUsers' && (
                  <div className="bg-white shadow-md rounded-md p-4 mb-4">
                    <h4 className="text-lg font-semibold mb-2">Manage Users</h4>
                    <input type="text" placeholder="Username" className="w-full p-2 border rounded-md mb-2" />
                    <select className="w-full p-2 border rounded-md mb-2">
                      <option value="business_owner">Business Owner</option>
                      <option value="store_manager">Store Manager</option>
                    </select>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add User</button>
                  </div>
                )}
                {localActiveForm === 'integrations' && (
                  <div className="bg-white shadow-md rounded-md p-4 mb-4">
                    <h4 className="text-lg font-semibold mb-2">Third-Party Integrations</h4>
                    <select className="w-full p-2 border rounded-md mb-2">
                      <option>QuickBooks</option>
                      <option>Stripe</option>
                      <option>Google Analytics</option>
                    </select>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Connect</button>
                  </div>
                )}
                {localActiveForm === 'adminReports' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white shadow-md rounded-md p-4">
                      <h4 className="text-lg font-semibold mb-2">User Statistics</h4>
                      <div style={{ height: '300px' }}>
                        <Pie data={userStatsData} options={chartOptions} />
                      </div>
                    </div>
                    <div className="bg-white shadow-md rounded-md p-4">
                      <h4 className="text-lg font-semibold mb-2">Financial Reports</h4>
                      <div style={{ height: '300px' }}>
                        <Bar data={financialReportData} options={chartOptions} />
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;