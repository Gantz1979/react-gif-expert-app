
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categorias, setCategorias] = useState( ['Dragon Ball'] );
    /* AGREGAR ELEMENTO AL ARREGLO
    const handleAdd = () => {
        //setCategorias([...categorias, 'CUATRO']); //Las 2 formas son validas.
        setCategorias( cat => [...cat, 'CINCO']);    //=> setCategorias retorna un callback con el estado anterior
    }
    */

    return(

        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias = { setCategorias }/>
            <hr />

            <ol>
                {
                    categorias.map( (categoria) => (
                        <GifGrid 
                            key={categoria}
                            categoria={categoria} 
                        />
                    ))
                    
                }
            </ol>
        </>
    )
}

export default GifExpertApp;