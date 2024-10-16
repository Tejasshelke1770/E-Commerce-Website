import React, { useState,useContext } from "react";
import { ProductContext } from '../Utils/Context'
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [products, setProducts] = useContext(ProductContext);
    const Navigate = useNavigate()

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");

 const addProductHandler = (e)=>{
    // e.preventDefault();
    const product = {
        id: nanoid(),
        title,
        image,
        category,
        price,
        description,
      };
      setProducts([...products, product])
      localStorage.setItem('products' , JSON.stringify([...products, product]))
      Navigate('/')
    }
  
  return (
    <form
      className="flex flex-col  p-[5%] w-screen h-screen items-center "
      onSubmit={addProductHandler}
    >
      <h1 className="text-2xl w-1/2 mb-5 ">Add New Product</h1>
      <input
        type="url"
        required
        placeholder="Product Image Link"
        className="mb-3 w-1/2 p-2 text-1xl bg-zinc-100 rounded-md border 2px black "
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        required
        placeholder="Product Title"
        className="mb-3 w-1/2 p-2 text-1xl bg-zinc-100 rounded-md border 2px black"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <div className="flex gap-10 justify-between w-1/2">
        <input
          type="text"
          required
          placeholder="Product Category"
          className="mb-3 w-1/2 p-2 text-1xl bg-zinc-100 rounded-md border 2px black"
          onChange={(e) => setcategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          required
          placeholder="Product Price"
          className="mb-3 w-1/2 p-2 text-1xl bg-zinc-100 rounded-md border 2px black"
          onChange={(e) => setprice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        className="flex justify-start w-1/2 p-3 border 2px black text-1xl bg-zinc-100 rounded-md"
        placeholder="Enter Product Description Here..."
        value={description}
        required
        onChange={(e) => setdescription(e.target.value)}
        rows="10"
      ></textarea>
      <div className=" w-1/2">
       <button className="border border-blue-200 px-4 py-1 rounded-md mt-3 flex justify-normal ">Add New Product</button>
      </div>
      
    </form>
  );
};

export default Create;
