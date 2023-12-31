import {createBrowserRouter, RouterProvider} from "react-router-dom";
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
