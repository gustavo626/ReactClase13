import React, { useContext }  from 'react'
import { CartContext } from '../../context/CartContex'

export const Checkout = () =>{

    const {carrito, totalcompra} = useContext(CartContext)

    const orden ={
        buyer: {
            nombre: "colque gustavo",
            email: "boch@.com",
            tel:12345543
        },
        items: carrito,
        total: totalcompra ()
    }

    const handleEnviar = () => {
        console.log()
    }
    return (
        <div>
            <h2>Resumen de compra</h2>
            <hr/>
        </div>
    )
}