import { useEffect, useState } from "react";
import { getGifts } from '../helpers/getGifs';


export const useFetchGifs = ( categoria ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getGifts( categoria )
            .then( imgs => {
                setState( {
                    data: imgs,
                    loading: false
                })
            });

    }, [categoria]); //segundo argumento del useEfect es un arreglo de dependencias

    return state; // {data:[], loading: true }
}

