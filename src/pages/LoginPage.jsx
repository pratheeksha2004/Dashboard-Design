import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("business_owner");
    const navigate = useNavigate();
    const usernameInputRef = useRef(null); // Ref for the username input

    useEffect(() => {
        if (usernameInputRef.current) {
            usernameInputRef.current.focus(); // Focus the input on mount
        }
    }, []);

    const handleLogin = () => {
        if (!username || !password) {
            alert("Please enter both username and password.");
            return;
        }

        const userData = { username, role };
        setUser(userData);
        navigate("/dashboard");
    };

    const handleForgotPassword = () => {
        navigate("/forgot-password");
    };

    const handleSignupRedirect = () => {
        navigate("/signup");
    };

    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center"> {/* Container: Background, min height, centering */}
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm"> {/* Form container: Background, shadow, rounded corners, padding, width */}
          <h2 className="text-center text-2xl font-bold mb-6 text-gray-800">Login</h2> {/* Heading: Centered, size, weight, margin, color */}

          <div className="mb-4"> {/* Username input group: Margin bottom */}
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username"> {/* Label: Block, color, size, weight, margin */}
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              ref={usernameInputRef}
            />
          </div>

          <div className="mb-6"> {/* Password input group: Margin bottom */}
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password"> {/* Label: Block, color, size, weight, margin */}
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-4"> {/* Role select group: Margin bottom */}
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role"> {/* Label: Block, color, size, weight, margin */}
              Role
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="business_owner">Business Owner</option>
              <option value="store_manager">Store Manager</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="flex items-center justify-between"> {/* Buttons container: Flex, alignment, spacing */}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </button>
          </div>
          <div className="text-center mt-4"> {/* Signup link container: Centered, margin top */}
            <p>
              Don't have an account?
              <button
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 ml-1"
                onClick={handleSignupRedirect}
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </div>
    );
}

export default LoginPage;