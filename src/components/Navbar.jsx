import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar({ user }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-gray-800 shadow-md py-2"> {/* Navbar container */}
      <div className="container mx-auto flex items-center justify-between"> {/* Centered content, space between logo and links */}
        <div className="flex items-center"> {/* Logo container: flex for vertical centering */}
          <img src="logo.jpg" alt="Platform Log" className="h-11 w-auto mr-4" /> {/* Logo styling: height, width, margin */}
          <span className="font-bold text-xl text-gray-800">Your Platform</span> {/* Optional: Add a platform name */}
        </div>

        <div className="flex items-center space-x-4"> {/* Navbar links container: flex, spacing between links */}
          <Link className="text-white hover:text-blue-500 transition duration-300" to="/">Home</Link> {/* Link styling: color, hover effect */}

          <div
            className="relative" // Important for dropdown positioning
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link className="text-white hover:text-blue-500 transition duration-300" to="#">Features</Link>
            {dropdownOpen && (
              <div className="absolute top-full left-0 bg-white shadow-md rounded-md mt-1 py-2 w-48"> {/* Dropdown: absolute positioning, background, shadow, rounded corners, margin-top, width */}
                <Link to="/features/invoice" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 transition duration-300">Invoice Creation</Link> {/* Dropdown item styling */}
                <Link to="/features/billing" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 transition duration-300">Billing</Link>
                <Link to="/features/payments" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 transition duration-300">Payment Management</Link>
              </div>
            )}
          </div>

          <Link className="text-white hover:text-blue-500 transition duration-300" to="/pricing">Pricing</Link> {/* Link styling */}

          {!user ? (
            <>
              <Link className="text-white hover:text-blue-500 transition duration-300" to="/signup">Sign Up</Link> {/* Link styling */}
              <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300" to="/login">Login</Link> {/* Button styling */}
            </>
          ) : (
            <Link className="text-white hover:text-blue-500 transition duration-300" to="/dashboard">Dashboard</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;