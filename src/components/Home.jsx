import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Nav from './Nav'
import { ProductContext } from '../Utils/Context'
import Loading from './Loading'
import axios from "../Utils/Axios"


function Home() {
  const [products] =  useContext(ProductContext)
  const {search} = useLocation();
  const qCategory = decodeURIComponent(search.split('=')[1]);
//    console.log(search)
 const [filterProducts, setFilterProducts] = useState(null)

    
   const getProductsCat = async()=>{
    try{
        const {data} = await axios.get(`/products/category/${qCategory}`)
        setFilterProducts(data)
    }catch(error){
        console.log(error)
   }
   }
   useEffect(()=>{
    if(!filterProducts || qCategory == 'undefined'){
        setFilterProducts(products);
    }
    if(qCategory != "undefined"){
        // getProductsCat()
        setFilterProducts(products.filter((p) => p.category == qCategory ))
    }
   },[qCategory, products])

  return ( products ? 
  <> 
    <Nav />
    <div className=" w-[85%]  flex flex-wrap  gap-10 p-10 pt-[5%] overflow-x-hidden overflow-y-auto">
        {filterProducts && filterProducts.map((product , index)=>{
            return (
                <Link key={index} to={`/details/${product.id}`} className="card p-3 border shadow rounded-md w-[17%] h-[30vh] flex-col flex items-center justify-center ">
                    <div
                     className="hover:scale-110 duration-300 mb-3 w-full h-[80%] rounded-md bg-no-repeat bg-contain bg-center"
                     style={{
                            backgroundImage:
                            `url(${product.image})`
                        }}
                     ></div>
                     <h1 className="hover:text-blue-400">{product.title}</h1>
                </Link>
            )})}
      </div> 
  </> 
  : <Loading />);
}

export default Home

