import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BookCard from "./BookCard";
import axios from 'axios';
import { useEffect, useState } from "react";

const FreeBook = () => {
  const [books,setBooks] = useState([]);
 
  useEffect(()=>{
    const getBooks = async () =>{
      try {
        const res = await axios.get("https://book-bees.onrender.com/books");
        setBooks(res.data.filter((data) => data.category === "Free"));
        //console.log(res.data.filter((data)=>data.category === "Free"));
      } catch (error) {
        console.log(error);
      }
    }
    getBooks();
  },[]);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Books Available</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla non
            quae sapiente ratione impedit ab voluptatibus porro cum rem autem
          </p>
        </div>

        <div>
          <div className="slider-container">
            <Slider {...settings}>
              {
                books.map(item=>(
                    <BookCard key={item.id} item={item}/>
                ))
              }
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeBook;
