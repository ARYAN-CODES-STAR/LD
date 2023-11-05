import React from "react";
import Info from "./Info";
import Cards from "./Cards";

const Section2 = () => {
  return (
    <div className="relative flex justify-center  gap-4 border rounded md:mx-24 text-black p-4">
      <div className="sticky lg:w-1/5">
        <Info />
      </div>
      <div className="w-4/5">
      <div className="font-medium mb-2">
        Read your fav articles
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      </div>
    </div>
  );
};

export default Section2;
