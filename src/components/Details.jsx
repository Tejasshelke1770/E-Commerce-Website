import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "../Utils/Axios";
import Loading from "./Loading";
import { ProductContext } from "../Utils/Context";

function Details() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const [products, setProducts] = useContext(ProductContext);
  const Navigate = useNavigate() 

  useEffect(() => {
    if (!product) {
      setProduct(products.filter((p) => p.id == id)[0] )
    }
  }, []);

  const deleteItem =  (id)=>{
    const updatedProducts  = products.filter((p) =>{
      return p.id !== id
    })
   setProducts(updatedProducts )
  localStorage.setItem('products', JSON.stringify(updatedProducts))
  Navigate(-1)
  }

  return product ? (
    <div className="w-[70%] h-full  m-auto p-[10%] flex justify-between items-center ">
      <img
        className="w-[40%] h-[80%]  object-contain"
        src={`${product.image}`}
      />
      <div className=" w-[50%]">
        <h1 className="text-4xl">{product.title}</h1>
        <h3 className="text-zinc-500 my-5">{product.category}</h3>
        <h2 className="text-red-500 mb-2">${product.price}</h2>
        <p className="mb-[5%]">{product.description}</p>
        <Link to={`/edit/${product.id}`} className="mr-4 py-2 px-5 border border-blue-200 rounded mb-3 text-blue-300 ">
          Edit
        </Link>
        <Link onClick={()=> deleteItem(product.id)} className="ml-4 py-2 px-5 border border-red-200 rounded mb-3 text-red-300 ">
          Delete
        </Link>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Details;
