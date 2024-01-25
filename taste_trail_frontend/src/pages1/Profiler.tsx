// UserProfile.tsx

import React, { useEffect, useState } from 'react';

interface UserProfileProps {
    id: number;
}

interface UserData {
    firstName: string;
    lastName: string;
    email: string;
}

const Profiler: React.FC<UserProfileProps> = ({ id }) => {
    const [user, setUser] = useState<UserData | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`http://localhost:8080/users/${parseInt(id, 10)}`);
                const userData = await response.json();
                setUser(userData);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchUser();
    }, [id]);

    const getProfilePictureInitials = (firstName: string, lastName: string): string => {
        const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;
        return initials.toUpperCase();
    };


    return (
        <div className="userProfileContainer">
                <div className="profile-part">
                    <div className="profile-picture">
                        {user && (
                    getProfilePictureInitials(
                        user.firstName.split('_')[0],
                        user.lastName.split('_')[0]
                    )
                )}
                    </div>
                    <div className="profile-info">
                        {user ? (
                <>
                    <div>
                        <strong>Full Name:</strong> {user.firstName} {user.lastName}

                    </div>
                    <div>
                        <strong>Email:</strong> {user.email}
                    </div>
                </>
            ) : (
                <p>Loading user data...</p>
            )}
                    </div>
                </div>
        </div>
    );
}

export default Profiler;
