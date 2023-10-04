import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import laptopnormal from '../Item/imagenes/laptopnormal.png'
import telefono from '../Item/imagenes/telefono.jpg'
import tv from '../Item/imagenes/tv.jpg'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const products = [
    {
      id: 1, image: tv,
      title: "Televisor",
      price: 300,
      category:"Electrodomesticos",
    },
    {
      id: 2, image: telefono,
      title: "Iphone",
      price: 400,
      category:"Celulares",
    },
    {
      id: 3, image: laptopnormal,
      title: "Laptop",
      price: 700,
      category:"Computadoras",
    }
  ];

  const [data, setData] = useState({});
  const { idProducto } = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(products);
      }, 3000);
    });
  
    getData.then(res => {
      const filteredProduct = res.find(product => product.id === parseInt(idProducto));
      if (filteredProduct) {
        setData(filteredProduct);
      }
    });
  }, [idProducto]);
  
  return (
    <ItemDetail product={data} />
  )
}

export default ItemDetailContainer;
