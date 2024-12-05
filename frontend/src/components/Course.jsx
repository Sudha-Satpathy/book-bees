import { Link } from "react-router-dom";
import BookCard from "../components/BookCard"
import { useEffect, useState } from "react";
import axios from 'axios';
const Course = () => {
  const [books,setBooks] = useState([]);
  useEffect(()=>{
    const getBooks = async () =>{
      try {
       const res = await axios.get("https://book-bees.onrender.com/books");
       //console.log(res.data);
       setBooks(res.data)
      } catch (error) {
       console.log(error); 
      }
    }
    getBooks();
  },[])
  return (
    <>
      <div className="max-w-screen-2xl  container mx-auto md:px-20 px-4">
        <div className="pt-32 text-center ">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We're delighted to have You{" "}
            <span className="text-yellow-500">here!&nbsp; :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            perferendis, nam quo ex ut corrupti eligendi nihil! Numquam repellat
            et, similique maxime est laboriosam ipsum reprehenderit aperiam!
            Error, obcaecati ea?
          </p>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 duration-500 mt-6">
            <Link to={"/"} >Back</Link>
          </button>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {
            books.map(item=>(
                <BookCard key={item.id} item={item}/>
            ))
        }
      </div>
    </>
  );
};

export default Course;
