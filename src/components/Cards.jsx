import React from "react";

const Cards = () => {
  const cardsData = [
    {
      title: "Card 1",
      description: "This is the description for Card 1.",
    },
    {
      title: "Card 2",
      description: "This is the description for Card 2.",
    },
    {
      title: "Card 3",
      description: "This is the description for Card 3.",
    },
    // Add more card data here
  ];

  return (
    <div className="flex  p-4 border rounded  px-8 mx-4 my-8 md:mx-24">
      {/* Left Section (1/5 width) */}
      {/* <div className="w-1/5 bg-red-400 h-[100%] p-4 hidden lg:flex flex-col gap-4">
        Content for the left section
        <h2 className="text-xl font-bold">Left Section</h2>
        <p>This is the left section content.</p>
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-gray-200 px-3 rounded-full flex justify-center items-center">
            asdf
          </div>
          <div className="bg-gray-200 px-3 rounded-full flex justify-center items-center">
            asdf
          </div>
          <div className="bg-gray-200 px-3 rounded-full flex justify-center items-center">
            asdf
          </div>
          <div className="bg-gray-200 px-3 rounded-full flex justify-center items-center">
            asdf
          </div>
          <div className="bg-gray-200 px-3 rounded-full flex justify-center items-center">
            asdf
          </div>
          <div className="bg-gray-200 px-3 rounded-full flex justify-center items-center">
            asdf
          </div>
          <div className="bg-gray-200 px-3 rounded-full flex justify-center items-center">
            asdf
          </div>
        </div>
      </div> */}
      <div className="w-1/5">
        <div className="bg-white h-[100%] p-4 hidden lg:flex flex-col gap-4">
        Content for the left section
        <h2 className="text-xl font-bold">Left Section</h2>
        <p>This is the left section content.</p>
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-gray-200 px-3 rounded-full flex justify-center items-center">
            abcd
          </div>
          <div className="bg-gray-200 px-3 rounded-full flex justify-center items-center">
            abcd
          </div>
          <div className="bg-gray-200 px-3 rounded-full flex justify-center items-center">
            abcd
          </div>
          <div className="bg-gray-200 px-3 rounded-full flex justify-center items-center">
            abcd
          </div>
          <div className="bg-gray-200 px-3 rounded-full flex justify-center items-center">
            abcd
          </div>
          <div className="bg-gray-200 px-3 rounded-full flex justify-center items-center">
            abcd
          </div>
          <div className="bg-gray-200 px-3 rounded-full flex justify-center items-center">
            abcd
          </div>
        </div>
      </div>
      </div>

      {/* Right Section (4/5 width) */}
      {/* <div className=""> */}
      {/* <div className="h-80 overflow-y-auto sticky top-0">
          {cardsData.map((card, index) => (
            <div key={index} className="p-4 border-b border-gray-300">
              Individual card content
              <h3 className="text-xl font-bold">{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div> */}
      <div className="grid grid-cols-4 w-4/5 relative ml-2 gap-3">
        <div className=" h-40% w-50%">
          {" "}
          <a href="#" className="group relative block bg-black">
            <img
              alt="Developer"
              src="https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                Developer
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">
                Aryan
              </p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Omnis perferendis hic asperiores quibusdam quidem voluptates
                    doloremque reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>
          
          
        </div>
        <div className=" h-40% w-50%">
          {" "}
          <a href="#" className="group relative block bg-black">
            <img
              alt="Developer"
              src="https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                Developer
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">
                Aryan
              </p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Omnis perferendis hic asperiores quibusdam quidem voluptates
                    doloremque reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>
          
          
        </div>
        <div className=" h-40% w-50%">
          {" "}
          <a href="#" className="group relative block bg-black">
            <img
              alt="Developer"
              src="https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                Developer
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">
                Aryan
              </p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Omnis perferendis hic asperiores quibusdam quidem voluptates
                    doloremque reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>
          
          
        </div>
        <div className=" h-40% w-50%">
          {" "}
          <a href="#" className="group relative block bg-black">
            <img
              alt="Developer"
              src="https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                Developer
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">
                Aryan
              </p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Omnis perferendis hic asperiores quibusdam quidem voluptates
                    doloremque reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>
          
          
        </div>
        <div className=" h-40% w-50%">
          {" "}
          <a href="#" className="group relative block bg-black">
            <img
              alt="Developer"
              src="https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                Developer
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">
                Aryan
              </p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Omnis perferendis hic asperiores quibusdam quidem voluptates
                    doloremque reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>
          
          
        </div>
        
        
      </div>
      {/* </div> */}
    </div>
  );
};

export default Cards;
