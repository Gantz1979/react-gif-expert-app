import React from 'react'
import { Button } from '@material-ui/core';

export const FormProducto = () => {

    const handleButton = () => {

        console.log('Material UI')
    }
    
    return (
        <>
        <Button color="default" onClick = { handleButton }>Hello World</Button>
        </>
    )
}

export default FormProducto;

