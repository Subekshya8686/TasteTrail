import Homepage from "./pages1/homepage.tsx";

import {createBrowserRouter, RouterProvider} from "react-router-dom";
// import Category_snacks from "./pages1/Category_snacks .tsx";
// import Recipes from "./pages1/Recipes.tsx";
import Header from "./components/header.tsx";
import Footer from "./components/footer.tsx";
import Upload from "./pages1/upload.tsx";
import LoginRegister from "./pages1/LoginRegister.tsx";
import Category_snacks from "./pages1/Category_snacks.tsx";
import Recipes from "./pages1/Recipes.tsx";

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
            path:"/",
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
            path :"/login",
            element: <LoginRegister/>
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

