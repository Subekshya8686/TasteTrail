import Homepage from "./pages1/homepage.tsx";

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Header from "./components/header.tsx";
import Footer from "./components/footer.tsx";
import LoginRegister from "./pages1/LoginRegister.tsx";
import Category_snacks from "./pages1/Category_snacks.tsx";
import Recipes from "./pages1/Recipes.tsx";
import TermsAndConditions from "./pages1/TermsAndConditions.tsx";
import {QueryClient, QueryClientProvider} from "react-query";
import ContentCreate from "./pages1/Admin/ContentCreate.tsx";
import ContentList from "./pages1/Admin/ContentList.tsx";
import UserProfile from "./pages1/UserProfile.tsx";

const router = createBrowserRouter(
    [
        {
            path: "/category_snacks",
            element: <Category_snacks/>
        },
        {
            path: "/recipes",
            element: <Recipes/>
        },

        {
            path: "/homepage",
            element: <Homepage/>
        },
        {
            path: "/header",
            element: <Header/>
        },
        {
            path: "/footer",
            element: <Footer/>
        },
        {
            path: "/admin/contentcreate",
            element: <ContentCreate/>
        },
        {
            path: "/admin/contentedit/:id",
            element: <ContentCreate/>
        },
        {
            path: "/admin/contentlist",
            element: <ContentList/>
        },
        {
            path: "/",
            element: <LoginRegister/>
        },
        {
            path:"/profile",
            element: <UserProfile/>
        },
        {
            path: "/termsandconditions",
            element: <TermsAndConditions/>
        },
    ]
)

const querClient = new QueryClient();

function App() {

    return (
        <>
            <QueryClientProvider client={querClient}>
                <RouterProvider router={router}/>
            </QueryClientProvider>
        </>
    )
}

export default App

