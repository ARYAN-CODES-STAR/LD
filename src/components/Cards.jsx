import React from "react";

const Cards = () => {

  return (
    // <div className="flex  border rounded md:mx-24">

    <>
      {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 align-center lg:w-4/5 relative gap-3"> */}
        <div className=" hover:scale-[1.06] transition-transform duration-2s max-w-sm bg-white border border-gray-200 rounded-lg shadow text-black hover:border-green-600"
        data-aos="fade-up">
          <div className="m-2">
            <img
              className="rounded-t-lg"
              src="https://test.learnduke.com/_next/image?url=https%3A%2F%2Fapitest.learnduke.com%2Fapi%2Fimages%2Fda3a8150-d1dd-42ab-a027-4ff0e980aea9&w=1080&q=75"
              alt=""
            />
          </div>
          <div className="p-5">
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm text-center text-gray-700 bg-gray-200 rounded-2xl hover:bg-green-100 hover:text-green-600 "
            >
              Read more
            </a>
            <a href="#">
              <h5 className="mb-2 tracking-tight text-gray-800">
                This is a sample text!!
              </h5>
            </a>
            {/* <p className="mb-3 font-normal text-gray-700">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p> */}
          </div>
        </div>
      {/* </div> */}
    </>
      
    // </div>
  );
};

export default Cards;
