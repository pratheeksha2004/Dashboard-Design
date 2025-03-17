import React, { useState } from 'react';

function EditProfilePage({ user, setUser }) {
    const [profileData, setProfileData] = useState({
        name: user?.name || '',
        city: user?.city || '',
        address: user?.address || '',
        phoneNumber: user?.phoneNumber || '',
        emailAddress: user?.emailAddress || '',
        businessName: user?.businessName || '',
        businessType: user?.businessType || '',
        businessDescription: user?.businessDescription || ''
    });

    const [profileImage, setProfileImage] = useState(user?.profileImage || 'profile1.jpg'); // Default image
    const [newImage, setNewImage] = useState(null);

    const handleChange = (e) => {
        setProfileData({
            ...profileData,
            [e.target.name]: e.target.value,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewImage(reader.result); // Store the base64 encoded image
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        setProfileImage('profile1.jpg'); // Reset to default image
        setNewImage(null);
    };

    const handleSave = () => {
        // Update the user data in App.js
        setUser({
            ...user,
            ...profileData, // Merge edited profile data with existing user data
            profileImage: profileImage // Save the image URL
        });
        alert("Profile has been updated!");
    };

    return (
      <div className="bg-gray-100 min-h-screen py-8"> {/* Page container: Background, min height, padding */}
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md overflow-hidden"> {/* Form container: Max width, centered, background, shadow, rounded, overflow hidden */}
          <div className="bg-gray-50 py-4 px-6 border-b border-gray-200"> {/* Header: Background, padding, border */}
            <h2 className="text-2xl font-semibold text-gray-800">Edit Profile</h2> {/* Heading: Size, weight, color */}
          </div>

          <div className="p-6"> {/* Main content: Padding */}
            <div className="flex items-center justify-center mb-6"> {/* Profile summary: Flex, centering, margin */}
              <img src={profileImage} alt="Profile" className="w-24 h-24 rounded-full object-cover mr-4" /> {/* Image: Size, rounded, cover, margin */}
              <div>
                <p className="text-lg font-semibold text-gray-700">{user?.username}</p> {/* Username: Size, weight, color */}
                <div>
                  <input type="file" accept="image/*" onChange={handleImageChange} id="imageUpload" className="hidden" /> {/* Hidden input */}
                  <label htmlFor="imageUpload" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"> {/* Upload button: inline, background, hover, text, weight, padding, rounded, pointer */}
                    Upload New Photo
                  </label>
                  {profileImage !== 'profile1.jpg' && (
                    <button onClick={handleRemoveImage} className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"> {/* Remove button: margin, background, hover, text, weight, padding, rounded */}
                      Remove Photo
                    </button>
                  )}
                </div>
              </div>
            </div>

            <form className="space-y-4"> {/* Form: Spacing between elements */}
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label> {/* Label: Block, color, size, weight, margin */}
                <input type="text" id="name" name="name" value={profileData.name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" /> {/* Input: Shadow, appearance, border, rounded, width, padding, color, focus styles */}
              </div>

              <div>
                <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">City:</label>
                <input type="text" id="city" name="city" value={profileData.city} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>

              <div>
                <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address:</label>
                <input type="text" id="address" name="address" value={profileData.address} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">Phone Number:</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" value={profileData.phoneNumber} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>

              <div>
                <label htmlFor="emailAddress" className="block text-gray-700 text-sm font-bold mb-2">Email Address:</label>
                <input type="email" id="emailAddress" name="emailAddress" value={profileData.emailAddress} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>

              <div>
                <label htmlFor="businessName" className="block text-gray-700 text-sm font-bold mb-2">Business/Store Name:</label>
                <input type="text" id="businessName" name="businessName" value={profileData.businessName} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>

              <div>
                <label htmlFor="businessType" className="block text-gray-700 text-sm font-bold mb-2">Type:</label>
                <input type="text" id="businessType" name="businessType" value={profileData.businessType} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>

              <div>
                <label htmlFor="businessDescription" className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
                <textarea id="businessDescription" name="businessDescription" value={profileData.businessDescription} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"></textarea> {/* Textarea height */}
              </div>

              <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"> {/* Save button: Background, hover, text, weight, padding, rounded, focus styles */}
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default EditProfilePage;