import React from "react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 md:py-2 px-6 flex flex-col md:flex-row items-center md:gap-72 py-24 md:my-10">
      <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32 ">
        <div className="space-y-9">
          <h2 className="text-4xl font-bold">
            Hello, Welcome here to learn something{" "}
            <span className="text-yellow-500">new everyday!!!</span>
          </h2>
          <p className="text-xl text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            accusamus sint consequatur autem? Non, id consequatur reprehenderit
            earum quod
          </p>
          <div>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
        </div>
        </div>
        <button className="btn bg-yellow-500 text-white hover:bg-black hover:text-yellow-300 mt-6"
        onClick={()=>navigate("/register")}
        >Discover</button>
      </div>
      <div className="order-1 w-full md:w-1/2 mt-12 ">
            <img src="/images/book5.jpeg" className="w-auto h-auto md:w-96 h-96 rounded-lg md:rounded-full" />
      </div>
    </div>
  );
};

export default Banner;
