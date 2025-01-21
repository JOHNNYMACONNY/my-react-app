import React from 'react';

const UserProfile = ({ user }) => {
    return (
        <div className="user-profile">
            <h2>User Profile</h2>
            <p><strong>Services/Specialties:</strong> {user.services}</p>
            <p><strong>Potential Needs:</strong> {user.needs}</p>
            <p><strong>Portfolio:</strong> <a href={user.portfolio} target="_blank" rel="noopener noreferrer">View Portfolio</a></p>
        </div>
    );
};

export default UserProfile;