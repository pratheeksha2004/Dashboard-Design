import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ user, onItemSelected, onLogout }) {
  const handleItemClick = (item) => {
    onItemSelected(item);
  };

  return (
    <div className="bg-gray-200 w-64 p-4 flex flex-col">
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Profile</h3>
          <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-2">
            <img src="profile1.jpg" alt="Profile" className="object-cover w-full h-full" />
          </div>
        <h4 className="text-center">{user.username}</h4>
      </div>

      <nav className="flex-1">
        <ul>
          {user.role === "business_owner" && (
            <>
              <li onClick={() => handleItemClick('business')} className="py-2 px-4 hover:bg-gray-300 cursor-pointer">Manage Business</li>
              <li onClick={() => handleItemClick('invoice')} className="py-2 px-4 hover:bg-gray-300 cursor-pointer">Manage Invoices</li>
              <li onClick={() => handleItemClick('tax')} className="py-2 px-4 hover:bg-gray-300 cursor-pointer">Tax & Compliance</li>
              <li onClick={() => handleItemClick('charts')} className="py-2 px-4 hover:bg-gray-300 cursor-pointer">Charts</li>
            </>
          )}
          {user.role === "store_manager" && (
            <>
              <li onClick={() => handleItemClick('invoice')} className="py-2 px-4 hover:bg-gray-300 cursor-pointer">Create Invoices</li>
              <li onClick={() => handleItemClick('inventory')} className="py-2 px-4 hover:bg-gray-300 cursor-pointer">Track Inventory</li>
              <li onClick={() => handleItemClick('customers')} className="py-2 px-4 hover:bg-gray-300 cursor-pointer">Manage Customers</li>
              <li onClick={() => handleItemClick('salesReport')} className="py-2 px-4 hover:bg-gray-300 cursor-pointer">Sales Report</li>
            </>
          )}
          {user.role === "admin" && (
            <>
              <li onClick={() => handleItemClick('manageUsers')} className="py-2 px-4 hover:bg-gray-300 cursor-pointer">Manage Users</li>
              <li onClick={() => handleItemClick('integrations')} className="py-2 px-4 hover:bg-gray-300 cursor-pointer">Integrations</li>
              <li onClick={() => handleItemClick('adminReports')} className="py-2 px-4 hover:bg-gray-300 cursor-pointer">Reports</li>
            </>
          )}
          <li onClick={() => handleItemClick('settings')} className="py-2 px-4 hover:bg-gray-300 cursor-pointer">Settings</li>
          <li onClick={() => handleItemClick('edit-profile')} className="py-2 px-4 hover:bg-gray-300 cursor-pointer">Edit Profile</li>
          <li onClick={onLogout} className="py-2 px-4 hover:bg-gray-300 cursor-pointer">Logout</li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;