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
