import React from "react";

const BookCard = ({item}) => {
  return (
    <div className="my-6 p-3 ">
      <div className="card dark:bg-slate-900 dark:text-white dark:shadow-white shadow-lg bg-base-100 w-92 m-2 shadow-2xl hover:scale-105 duration-200">
        <figure>
          <img className="w-80 h-80 border rounded-xl"
            src={item.Image}
            alt="Books"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge bg-yellow-500 text-white p-3">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline px-6 py-4 ">${item.price}</div>
            <div className="badge badge-outline p-4 hover:bg-yellow-500 hover:text-white duration-200">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
