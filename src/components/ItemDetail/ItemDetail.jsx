
import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css"
const ItemDetail = ({product}) => {

  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
  }

  return (
    <>
    <div>
      <h1>{product.title}</h1>
      <img className="product"src={product.image} alt="" />
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
    </div>
    </>
  )
}

export default ItemDetail
