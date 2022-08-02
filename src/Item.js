import React from "react";

const Item = ({ item }) => {
  const { category, url, price, title, description } = item;
  console.log(category);

  return (
    <div className="grid gap-5 grid-col-1  md:grid-cols-2 max-w-[450px] drop-shadow-lg py-5">
      <div>
        <img
          src={url}
          alt={title}
          className="w-[300px] h-[200px] rounded-md object-cover"
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-2">
        <div className="flex items-center justify-between gap-10 ">
          <h1 className="font-extrabold text-gray-700 capitalize ">{title}</h1>
          <h2 className="text-sm text-secondary">PKR {price}</h2>
        </div>
        <p className="text-sm text-gray-500 text-start">{description}</p>
      </div>
    </div>
  );
};

export default Item;
