import React from 'react';
import './css/Category.css'
import { useQuery } from 'react-query';
import axios from 'axios';
import Header from "../components/header.tsx";
import RecipeCard from "../components/Recipecard.tsx";
import Footer from "../components/footer.tsx";
import {useParams} from "react-router-dom";


const SearchComp: React.FC = () => {

    const {title}=useParams();
console.log(title)
    const {data:searchData}=useQuery({
        queryKey:["SEARCH_ALL"],
        queryFn:()=>{
            return axios.get("http://localhost:8080/content/byTitle/"+title,{
                headers:{authorization:"Bearer "+ localStorage.getItem("accessToken")}
            })
        }
    })




    return (
        <>
            <Header/>

            <main>

                <div className="quickrecipe-title flex">
                    <h2>Searched Item:</h2>
                </div>
                <div className={'main-cards'}>
                    <section className="explorerecipe  flex">
                        {searchData?.data?.map((recipe:any) => (
                            <RecipeCard key={recipe.id} recipe={recipe} />
                        ))}
                    </section>
                </div>
            </main>


            <Footer/>

        </>
    );
}

export default SearchComp;