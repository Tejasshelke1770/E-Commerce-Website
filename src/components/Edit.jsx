import React, { useContext, useEffect, useState } from "react";
import { json, useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../Utils/Context";

const Edit = () => {
  const { id } = useParams();
  const Navigate = useNavigate()
  const [products, setProducts] = useContext(ProductContext);
  const existingProduct = products.find((p) => p.id == id);

  const [image, setImage] = useState(existingProduct.image || '');
  const [title, settitle] = useState(existingProduct.title || '');
  const [price, setprice] = useState(existingProduct.price || '');
  const [category, setCategory] = useState(existingProduct.category || '');
  const [description, setdescription] = useState(existingProduct.description || '');


  const handleSubmit = (e)=>{
    e.preventDefault()
    const EditedProduct = {
        id: existingProduct.id,
        image: image,
        title: title,
        price: price,
        category: category,
        description: description,
      }
      
    setProducts(products.map(e => e.id == id ? EditedProduct : e) )
    localStorage.setItem('products', JSON.stringify(products.map(e => e.id == id ? EditedProduct : e) ) )
    Navigate(-1)
  }

  return (
    <form
      onSubmit={ handleSubmit}
      className="flex flex-col p-[5%] w-screen h-screen items-center"
    >
      <h1 className=" text-2xl w-1/2 mb-5 ">Edit Product</h1>
      <input
        type="url"
        required
        placeholder={`${existingProduct.image}`}
        className="mb-3 w-1/2 p-2 text-1xl bg-zinc-100 rounded-md border 2px black "
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />

      <input
        type="text"
        required
        placeholder={`${existingProduct.title}`}
        className="mb-3 w-1/2 p-2 text-1xl bg-zinc-100 rounded-md border 2px black "
        onChange={(e) => settitle(e.target.value)}
        value={title}
      />

      <div className="flex gap-10 justify-between w-1/2 ">
        <input
          required
          placeholder={`${existingProduct.category}`}
          type="text"
          className="mb-3 w-1/2 p-2 text-1xl bg-zinc-100 rounded-md border 2px black "
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <input
          required
          placeholder={`${existingProduct.price}`}
          type="number"
          className="mb-3 w-1/2 p-2 text-1xl bg-zinc-100 rounded-md border 2px black "
          onChange={(e) => setprice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        className="mb-3 w-1/2 p-2 text-1xl bg-zinc-100 rounded-md border 2px black "
        placeholder={`${existingProduct.description}`}
        required
        rows="10"
        onChange={(e) => setdescription(e.target.value)}
        value={description}
      ></textarea>
      <div className="w-1/2">
        <button className="border border-blue-200 px-4 py-1 rounded-md mt-3 flex justify-normal ">
          Edit Product
        </button>
      </div>
    </form>
  );
};

export default Edit;
