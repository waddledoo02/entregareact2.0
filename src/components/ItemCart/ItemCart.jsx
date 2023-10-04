import React from 'react';
import './ItemCart.css';
import { useCartContext } from '../../context/CartContext';
const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className='ItemCart'>
            <img src={product.image} alt={product.title} />
            <div>
                <p>Titulo:{product.title}</p>
                <p>Cantiad:{product.quantity}</p>
                <p>Precio unit:{product.price}</p>
                <p>Subtotal:${product.quantity * product.price}</p>
                <button onClick={()=>removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart