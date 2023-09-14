
import Title from '../Title/Title';
import ItemCount from '../ItemCount/ItemCount';
import React,{useState,useEffect} from 'react'
const ItemDetail = (props) => {
  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
    return (
      <><Title greeting={props.texto}></Title>
        <ItemCount initial={1} stock={5} onAdd={onAdd}></ItemCount></>
    )
  }
}
export default ItemDetail