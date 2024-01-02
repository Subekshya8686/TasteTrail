// import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Homepage from "./pages1/homepage.tsx";
import Header from "./components/header.tsx";
import Footer from "./components/footer.tsx";
import Upload from "./pages1/upload.tsx";
import LoginRegister from "./pages1/LoginRegister.tsx";
const router  =createBrowserRouter(
    [
        {
            path:"/h",
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

