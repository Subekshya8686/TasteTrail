import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Homepage from "./pages1/homepage.tsx";
import Header from "./components/header.tsx";
import Footer from "./components/footer.tsx";
import Upload from "./pages1/upload.tsx";
const router  =createBrowserRouter(
    [
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
 