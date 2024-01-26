import React, { useEffect, useState } from 'react';

interface UserData {
    firstName: string;
    lastName: string;
    email: string;
}

const Profiler: React.FC = () => {
    const [user, setUser] = useState<UserData | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userId = localStorage.getItem('userId');
                console.log('User ID from local storage:', userId); // Debugging log
                if (!userId) {
                    console.error('User ID not found in local storage');
                    return;
                }

                const response = await fetch(`http://localhost:8080/users/${userId}`,{
                    headers:{authorization:"Bearer "+ localStorage.getItem("accessToken")}
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const userData = await response.json();
                console.log('User data:', userData); // Debugging log
                setUser(userData);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchUser();
    }, []);

    const getProfilePictureInitials = (firstName: string, lastName: string): string => {
        const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;
        return initials.toUpperCase();
    };

    return (
        <div className="userProfileContainer">
            <div className="profile-part">
                <div className="profile-picture">
                    {user && getProfilePictureInitials(user.firstName.split('_')[0], user.lastName.split('_')[0])}
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
