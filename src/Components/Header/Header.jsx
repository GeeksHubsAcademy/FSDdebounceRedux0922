
import React, {useState, useEffect} from 'react';
import './Header.css';

import { searchFilms } from '../../Services/apiCalls';
import { useDispatch } from "react-redux";
import { addSearch, cleanSearch } from '../../Containers/filmSlice';

const Header = () => {

    //Conexion a RDX en modo escritura
    const dispatch = useDispatch();

    //Hook encargado de recoger el criterio de búsqueda
    const [criteria, setCriteria] = useState('');

    const inputHandler = (e) => {

        setCriteria(e.target.value);

    }

    useEffect(()=> {

        if(criteria !== ''){

            //Voy a aplicar mi proceso de debounce....
            
            const bring = setTimeout(()=>{

                searchFilms(criteria)
                .then(res => {

                    //Guardo en RDX
                    dispatch(addSearch({movies : res.data.results}))
                })
                .catch(error => console.log(error));

            },350);

            return () => clearTimeout(bring);
            
        } else if (criteria === '') {
                    //Guardo en RDX pelis vacías...
                    dispatch(cleanSearch({movies : []}))
        }      

    },[criteria]);

    return (
        <div className='headerDesign'>

            {/* Input encargado de realizar la búsqueda */}
            <input name="criteria" placeholder='search for a film!' onChange={(e)=>inputHandler(e)}/>
        </div>
    )
}

export default Header;