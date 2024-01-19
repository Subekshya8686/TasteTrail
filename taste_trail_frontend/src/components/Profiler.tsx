import React from "react";

interface UserProfileProps {
    userId: string;
}

interface UserProfileData {
    userId: number;
    username: string;
    email: string;
}
const profiler: React.FC<UserProfileProps> = ({ userId }) => {
        // Static mock data for styling purposes
        const mockUserProfile: UserProfileData = {
            userId: 123,
            username: 'purnima_rana',
            email: 'purnima.rana@example.com',
        };

    const getProfilePictureInitials = (firstName: string, lastName: string): string => {
        const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;
        return initials.toUpperCase();
    };

        return(

            <div className="userProfileContainer">
                <div className="profile-part">
                    <div className="profile-picture">
                        {getProfilePictureInitials(
                            mockUserProfile.username.split('_')[0],
                            mockUserProfile.username.split('_')[1]
                        )}
                    </div>
                    <div className="profile-info">
                        <h2>{mockUserProfile.username}</h2>
                        <p>{mockUserProfile.email}</p>
                    </div>
                </div>
            </div>

    )
}
export default profiler;