import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import darazImg from "../../assets/daraz.png";
import { FaAnchor, FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp, FaSearch } from "react-icons/fa";
import { FaArrowDown, FaCartShopping, FaDownLong } from "react-icons/fa6";

const Navbar = () => {
  const [angleStatus, setAngleStatus] = useState(false);
  console.log(angleStatus);
  const handleAngleStatus = () => {
    setAngleStatus(!angleStatus);
    console.log(angleStatus);
  };

  return (
    <div>
      <div className="bg-[#f85606] text-white fond-bold">
        <div className="flex gap-x-8 justify-end text-xs pt-2 pr-4">
          <NavLink>SAVE MORE ON APP</NavLink>
          <NavLink>BECOME A SELLER</NavLink>
          <NavLink>HELP & SUPPORT</NavLink>
          <NavLink>LOGIN</NavLink>
        </div>
        <div className="flex pt-4">
          <div className="w-52 h-10">
            <img className="w-32" src={darazImg} alt="" />
          </div>

          <div className="flex">
            <input
              className="w-[720px] h-11 pl-4 border-none"
              type="search"
              id="q"
              name="q"
              placeholder="Search in Daraz"
              tabIndex="1"
            ></input>
            <FaSearch className="-ml-10 text-[#f85606] w-6 h-11 mr-4 "></FaSearch>
            <div className="p-4">
              <svg
                className="ml-4"
                width="30"
                height="30"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.51345 5H1.33325V3H6.15306L7.21972 8.33333H30.5315L27.5012 25H8.51345L4.51345 5ZM7.61972 10.3333L10.1531 23H25.832L28.135 10.3333H7.61972Z"
                  fill="white"
                ></path>
                <path
                  d="M11.9999 28C11.9999 28.7364 11.403 29.3333 10.6666 29.3333C9.93021 29.3333 9.33325 28.7364 9.33325 28C9.33325 27.2636 9.93021 26.6667 10.6666 26.6667C11.403 26.6667 11.9999 27.2636 11.9999 28Z"
                  fill="white"
                ></path>
                <path
                  d="M25.3333 29.3333C26.0696 29.3333 26.6666 28.7364 26.6666 28C26.6666 27.2636 26.0696 26.6667 25.3333 26.6667C24.5969 26.6667 23.9999 27.2636 23.9999 28C23.9999 28.7364 24.5969 29.3333 25.3333 29.3333Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          // onClick={() => handleAngleStatus()}
          onMouseEnter={() => setAngleStatus(true)}
          onMouseLeave={() => setAngleStatus(false)}
          className="flex inline-block hover:text-[#f57224]"
        >
          <h1 className="py-2 pl-4 fond-bold">Categories</h1>
          <div className={angleStatus ? "block" : "hidden"}>
            <FaAngleUp className="text-[20px] ml-4 mt-3"></FaAngleUp>
          </div>
          <div className={angleStatus ? "hidden" : "block"}>
            <FaAngleDown className="text-[20px] ml-4 mt-3"></FaAngleDown>
          </div>
        </div>
        <div className={angleStatus?'block list-none px-4':'hidden list-none px-4 hover:block'} >
          <li className="flex items-center hover:text-[#f57224]">Women's & Girls Fashion <FaAngleRight onMouseEnter={()=>setAngleStatus(true)} onMouseLeave={()=>setAngleStatus(false)} className={!angleStatus?'block':'hidden'}></FaAngleRight> </li>
          <li className="hover:text-[#f57224]">Men's & Boy's Fashion</li>
          <li className="hover:text-[#f57224]">Electronics Accessories</li>
          <li className="hover:text-[#f57224]">TV & Home Appliance</li>
          <li className="hover:text-[#f57224]">Electronics Devices</li>
          <li className="hover:text-[#f57224]">Mother & Baby</li>
          <li className="hover:text-[#f57224]">Automobile & Motorbike</li>
          <li className="hover:text-[#f57224]">Spoots & Outdoors</li>
          <li className="hover:text-[#f57224]">Home & Lifestyle</li>
          <li className="hover:text-[#f57224]">Groceries</li>
          <li className="hover:text-[#f57224]">Health & Beauty</li>
          <li className="hover:text-[#f57224]">Watches,Bags,Gewellery</li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
