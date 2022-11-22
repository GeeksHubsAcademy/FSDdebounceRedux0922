
import React, {useState, useEffect} from 'react';
import './Home.css';
import { useSelector } from "react-redux";
import { filmData } from '../filmSlice';
 
const Home = () => {

    //Me conecto a RDX en modo lectura.
    const filmsFromRdx = useSelector(filmData);

    useEffect(()=> {
       console.log("soy las peliculas", filmsFromRdx);    
    })

     return (
         <div className='homeDesign'>

              {
                //Renderizado condicional de los datos que vienen de RDX

                filmsFromRdx.movies.length > 0 &&

                <div className='moviesShowcase'>
                    {
                        filmsFromRdx.movies.map(movie => {
                            return (
                                <div key={movie.id} >
                                    {movie.title}
                                </div>
                            )
                        })
                    }
                </div>
              }

         </div>
     )
}
export default Home;