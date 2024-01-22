import Homepage from "./pages1/homepage.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Header from "./components/header.tsx";
import Footer from "./components/footer.tsx";
import LoginRegister from "./pages1/LoginRegister.tsx";
import Category_snacks from "./pages1/Category/Category_snacks.tsx";
import Recipes from "./pages1/Recipes.tsx";
import UserProfile from "./pages1/userProfile.tsx"
import AdminPanel from "./pages1/Admin/AdminPanel.tsx";
import {QueryClient, QueryClientProvider} from "react-query";
import ContentCreate from "./pages1/Admin/ContentCreate.tsx";
// import ContentList from "./pages1/Admin/ContentList.tsx";
import Category_lunch from "./pages1/Category/Category_lunch.tsx";
import Category_dinner from "./pages1/Category/Category_dinner.tsx";
import Category_breakfast from "./pages1/Category/Category_breakfast.tsx";
import Category_dessert from "./pages1/Category/Category_dessert.tsx";
import Category_Holiday from "./pages1/Category/Category_Holiday.tsx";
import RecipeList from "./pages1/Admin/RecipeList.tsx";


const router = createBrowserRouter(
    [
        {
            path: "/recipes",
            element: <Recipes/>
        },

        {
            path:"/homepage",
            element:<Homepage/>

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
        // {
        //     path: "/admin/contentlist",
        //     element: <ContentList/>
        // },

        {
            path: "/admin/recipelist",
            element: <RecipeList/>
        },

        {
            path: "/loginRegister",
            element: <LoginRegister/>
        },

        {
            path: "/category_snacks",
            element: <Category_snacks/>
        },

        {
            path: "/category_lunch",
            element: <Category_lunch/>
        },

        {
            path: "/category_dinner",
            element: <Category_dinner/>
        },

        {
            path: "/category_breakfast",
            element: <Category_breakfast/>
        },

        {
            path: "/category_dessert",
            element: <Category_dessert/>
        },

        {
            path: "/category_holiday",
            element: <Category_Holiday/>
        },

        {
            path: "/user-profile",
            element: <UserProfile userId="123"/>
        },

        {
            path :"/admin",
            element: <AdminPanel/>
        },

        // {
        //     path: "/termsandconditions",
        //     element: <TermsAndConditions/>
        // },
    ]
)

const queryClient = new QueryClient();

function App() {

    return (
        <>
            <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            </QueryClientProvider>
        </>
    )
}

export default App

