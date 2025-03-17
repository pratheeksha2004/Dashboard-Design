import React from "react";
import { Link } from "react-router-dom";

function PricingPage() {
  return (
    <div className="bg-gray-100 py-12"> {/* Main container: Background, padding */}
      <div className="container mx-auto text-center"> {/* Container: Centering, width */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Choose Your Perfect Plan</h2> {/* Heading: Size, weight, color, margin */}

        <div className="flex flex-wrap justify-center -mx-4"> {/* Pricing cards container: Flex, wrap, centering, negative margin */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"> {/* Card: Width, padding, margin */}
            <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col"> {/* Card inner: Background, rounded, shadow, padding, height, flex column */}
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Standard</h3> {/* Title: Size, weight, color, margin */}
              <div className="text-2xl font-bold text-blue-500 mb-4">$19/month</div> {/* Price: Size, weight, color, margin */}
              <ul className="text-gray-600 flex-grow"> {/* Features: Color, fill space */}
                <li className="mb-2">Create invoices, quotes, bills, expenses & journals</li> {/* Feature: Margin */}
                <li className="mb-2">Accept online payments</li>
                <li className="mb-2">Automate payment reminders</li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Premium</h3>
              <div className="text-2xl font-bold text-blue-500 mb-4">$49/month</div>
              <ul className="text-gray-600 flex-grow">
                <li className="mb-2">All Standard features, plus:</li>
                <li className="mb-2">Enable self-service customer portal</li>
                <li className="mb-2">Manage credits and refunds</li>
                <li className="mb-2">Bank reconciliation</li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Professional</h3>
              <div className="text-2xl font-bold text-blue-500 mb-4">$99/month</div>
              <ul className="text-gray-600 flex-grow">
                <li className="mb-2">All Premium features, plus:</li>
                <li className="mb-2">Track sales and purchase orders</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mt-8 w-3/4 mx-auto"> {/* Free plan: Background, rounded, shadow, padding, margin, width */}
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Free Plan</h3> {/* Title: Size, weight, color, margin */}
          <p className="text-gray-600 mb-4">Start with our free plan and explore the basic features. Perfect for small businesses and freelancers just getting started.</p> {/* Description: Color, margin */}
          <ul className="text-gray-600"> {/* Features: Color */}
            <li className="mb-2">Limited number of invoices</li> {/* Feature: Margin */}
            <li className="mb-2">Basic reporting</li>
          </ul>
        </div>

        <Link to="/signup" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8"> {/* Sign up button: Inline block, background, hover, color, weight, padding, rounded, margin */}
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default PricingPage;