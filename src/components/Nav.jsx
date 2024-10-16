import React , { useContext } from 'react'
import { ProductContext } from '../Utils/Context'
import { Link,  } from 'react-router-dom'


function Nav() {
  const [products] = useContext(ProductContext)
  

  let categorys = [...new Set(products.map(product=>product.category))]



  let color = ()=>{
    return `rgba(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)},0.5)`
  }
 
   
  return (
    <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
        <a className="py-2 px-5 border border-blue-200 rounded mb-3 text-blue-300 "
          href="/create">Add New Product</a>

        <h1 className="text-2xl font-bold w-[80%] mb-3">Category Filter</h1>
        <ul className="w-[80%] ">
            {categorys.map((cat, index )=>{
              return   <Link to={`/?category=${cat}`} key={index} className="mb-3  flex items-center">
                        <span className="block w-[15px] h-[15px]  rounded-full mr-3" style={{backgroundColor : color()}}></span>
                        {cat}
                      </Link>
            })}
        </ul>
    </nav>
  )
}

export default Nav
