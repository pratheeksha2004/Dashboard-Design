import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center"> {/* Main container: Background, min height, flex, centering */}
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Platform</h1> {/* Heading: Size, weight, color, margin */}
            <p className="text-lg text-gray-600 mb-8">Sign up or log in to access...</p> {/* Paragraph: Size, color, margin */}
            <Link to="/login">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Started</button> {/* Button: Background, hover, text, weight, padding, rounded */}
            </Link>
        </div>
    );
}

export default HomePage;