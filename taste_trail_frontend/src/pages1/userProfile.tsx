// // UserProfile.tsx
//
// import React from 'react';
// import './css/userProfile.css';
// import Header from '../components/header.tsx';
// import Footer from '../components/footer.tsx';
// import RecipeCard from "../components/Recipecard.tsx";
// import recipes from "./Recipes.tsx";
//
// interface UserProfileProps {
//     userId: string;
// }
//
// interface UserProfileData {
//     userId: number;
//     username: string;
//     email: string;
// }
//
// interface Recipe {
//     id: number;
//     title: string;
//     category: string;
//     description: string;
//     totalTime: string;
//     img: string;
// }
//
// const UserProfile: React.FC<UserProfileProps> = ({ userId }) => {
//     // Static mock data for styling purposes
//     const mockUserProfile: UserProfileData = {
//         userId: 123,
//         username: 'purnima_rana',
//         email: 'purnima.rana@example.com',
//     };
//
//     // Static mock data for user's favorite recipes
//     const mockUserFavorites: Recipe[] = [
//         {
//             id: 1,
//             img: 'path/to/image1.jpg',
//             title: 'Favorite Recipe 1',
//             category: 'Dessert',
//             description: 'A delicious dessert recipe.',
//             totalTime: '30 mins',
//         },
//         {
//             id: 2,
//             img: 'path/to/image2.jpg',
//             title: 'Favorite Recipe 2',
//             category: 'Main Course',
//             description: 'A flavorful main course recipe.',
//             totalTime: '45 mins',
//         },
//         // Add more favorite recipes as needed
//     ];
//
//
//     // Function to generate the profile picture initials from the first and last names
//     const getProfilePictureInitials = (firstName: string, lastName: string): string => {
//         const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;
//         return initials.toUpperCase();
//     };
//
//     // Filter recipes for Section 1 and Section 2
//     return (
//         <>
//             <Header />
//             <div className="userProfileContainer">
//                 <div className="profile-part">
//                     <div className="profile-picture">
//                         {getProfilePictureInitials(
//                             mockUserProfile.username.split('_')[0],
//                             mockUserProfile.username.split('_')[1]
//                         )}
//                     </div>
//                     <div className="profile-info">
//                         <h2>{mockUserProfile.username}</h2>
//                         <p>{mockUserProfile.email}</p>
//                     </div>
//                 </div>
//                 <div className="favorites-section">
//                     <h3>Your Favorites</h3>
//                     {/* Section 1: All recipes */}
//                     <div className={'main-cards'}>
//                         <section className="threecards container flex">
//                                 <RecipeCard key={recipe.id} recipe={recipe} />
//                             ))}
//                         </section>
//                     </div>
//                 </div>
//             </div>
//
//             <Footer />
//         </>
//     );
// };
//
// export default UserProfile;
