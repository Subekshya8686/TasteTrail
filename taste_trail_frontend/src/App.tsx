import Homepage from "./pages1/homepage.tsx";

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Header from "./components/header.tsx";
import Footer from "./components/footer.tsx";
import Upload from "./pages1/upload.tsx";
import LoginRegister from "./pages1/LoginRegister.tsx";
import Category_snacks from "./pages1/Category_snacks.tsx";
import Recipes from "./pages1/Recipes.tsx";
import UserProfile from "./pages1/userProfile.tsx";
import Category_snacks1 from "./pages1/Category_snacks1.tsx";

const router  =createBrowserRouter(
    [
        {
            path:"/category_snacks",
            element:<Category_snacks/>
        },
        {
            path:"/recipes",
            element:<Recipes/>
        },

        {
            path:"/homepage",
            element:<Homepage/>
        },
        {
            path:"/header",
            element:<Header/>
        },
        {
            path:"/footer",
            element:<Footer/>
        },
        {
            path:"/upload",
            element:<Upload/>
        },
        {
            path :"/",
            element: <LoginRegister/>
        },
        {
            path:"/category_snacks1",
            element:<Category_snacks1/>
        },
        {
            path :"/user-profile",
            element: <UserProfile userId="123"/>
        }


    ]
)

function App() {

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App

