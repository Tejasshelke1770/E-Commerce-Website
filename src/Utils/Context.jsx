import { json } from "react-router-dom";
import axios from "./Axios"
import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext()

const Context = (props)=> {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) || null );

  // const getProducts = async()=>{
  //   try {
  //     const {data} = await axios.get("/products")
  //     localStorage.setItem('products', JSON.stringify(data))
  //   } catch (error) {
  //       console.error(error)
  //   }
  // }
  // useEffect(()=>{
  //   getProducts()
  // },[])
  return (
    <ProductContext.Provider value={[products, setProducts]}>
        {props.children}
    </ProductContext.Provider>
  )
}

export default Context;
