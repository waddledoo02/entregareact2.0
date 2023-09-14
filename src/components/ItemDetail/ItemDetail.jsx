import React,{useState,useEffect} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import laptopnormal from '../Item/imagenes/laptopnormal.png'
import telefono from '../Item/imagenes/telefono.jpg'
import tv from '../Item/imagenes/tv.jpg'
const ItemDetail = () => {
  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
  }
  const products = [
    {
      id: 1, image: tv,
      title: "Televisor"
    },
    {
      id: 2, image: telefono,
      title: "Iphone"
    },
    {
      id: 3, image: laptopnormal,
      title: "Laptop"
    }
  ];
const [data,setData] = useState([]);

useEffect(()=>{
const getData = new Promise(resolve=> {
  setTimeout(() => {
    resolve(products);
  }, 3000);
});
getData.then(res => console.log(res));
},[])


  return (
    <>
      <ItemCount initial={1} stock={5} onAdd={onAdd}></ItemCount>
      <ItemList data ={data}></ItemList>
    </>
  )
}

export default ItemDetail