import React from 'react';

function ForgotPassword() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center"> {/* Main container: Background, min height, flex, centering */}
      <div className="bg-white p-8 rounded shadow-md w-96"> {/* Form container: Background, padding, rounded corners, shadow, width */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Reset Password</h2> {/* Heading: Size, weight, margin, color */}
        <input
          type="email"
          placeholder="Enter your email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" // Input: Shadow, appearance, border, rounded, width, padding, color, focus styles, margin
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Reset Password
        </button>
      </div>
    </div>
  );
}

export default ForgotPassword;