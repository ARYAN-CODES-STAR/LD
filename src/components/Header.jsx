// import React from "react";

// function Header() {
//   return (
//     <div>
//       <header className="bg-green-50">
//         <div className="mx-auto max-w-screen-lg px-4 py-0 sm:px-6 sm:py-0 lg:px-8">
//           <div className="sm:flex sm:items-center sm:justify-between py-0"> {/* Adjust padding */}

//             <div className="text-center sm:text-left mx-auto sm:mx-0"><img src="h" width={100} height={100} /></div>

//             <div className="text-center sm:text-left mx-auto sm:mx-0 bg-yellow-500 w-64 h-30">
//             <div className="text-5xl font-bold mx-8 text-black">Carpool</div> {/* Add your first emoji */}

//             </div>

//             <div className="text-center sm:text-left mx-auto sm:mx-0">
//             <div className="text-5xl text-black">Rido </div>
//             </div>

//           </div>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default Header;

import React from "react";
import img from "../assets/reading_articles2 (1).svg";

const Header = () => {

  return (
    <>
    <div className="flex items-center justify-between p-4 border rounded bg-teal-100 px-8 mx-4 my-8 md:mx-24">
      <div className="flex-1 pr-4 md:mt-0">
        <h1 className="text-7xl font-bold py-4 ">Stay curious.</h1>
        <p className="text-gray-500 text-lg mt-4">
          Discover stories, thinking, and expertise <pre></pre> from writers on
          any topic.
        </p>
        <div className="mt-4">
          {/* <button className="bg-white-500 text-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
            Study Documents
          </button> */}
          <button
                href="#"
                className="transition ease-in-out delay-150 rounded-3xl bg-white px-3.5 py-1.5 text-lg font-semibold leading-7 text-black shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 hover:scale-110 duration-300 mr-2 mt-4"
              >
                Study Documents
              </button>
              <button
                href="#"
                className="transition ease-in-out delay-150 rounded-3xl bg-black px-3.5 py-1.5 text-lg font-semibold leading-7 text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 hover:scale-110 duration-300 mr-2 mt-4"
              >
                Explore Articles
              </button>
              <button
                href="#"
                className="transition ease-in-out delay-150 rounded-3xl bg-white px-3.5 py-1.5 text-lg font-semibold leading-7 text-black shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 hover:scale-110 duration-300 mr-2 mt-4"
              >
                 <span className="underline">A</span> Write
              </button>
          {/* <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
            Button 2
          </button> */}
          {/* <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Button 3
          </button> */}
        </div>
      </div>

      <div className="w-1/4">
        <img src={img} width={20} alt="Your Image" className="w-full h-auto" />
      </div>
    </div>
          
    </>
  );
};

export default Header;
