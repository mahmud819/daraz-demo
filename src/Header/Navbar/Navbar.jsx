import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import darazImg from "../../assets/daraz.png";
import {
  FaAnchor,
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
  FaAngleUp,
  FaSearch,
} from "react-icons/fa";
import { FaArrowDown, FaCartShopping, FaDownLong } from "react-icons/fa6";
import "../../App.css";

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
      <div className="categories-main inline-block w-54">
        <div
          onMouseEnter={() => setAngleStatus(true)}
          onMouseLeave={() => setAngleStatus(false)}
          className="categories-div  flex"
        >
          <h1 className="categories pl-4">Categories</h1>
          <FaAngleDown
            className={
              angleStatus
                ? "hidden angle-down"
                : "block angle-down my-auto ml-2"
            }
          ></FaAngleDown>
          <FaAngleUp
            className={
              angleStatus
                ? "block angle-down my-auto ml-2"
                : "hidden angle-down my-auto ml-2"
            }
          ></FaAngleUp>
        </div>
        <div className="w-52 categories-list list-none ml-2 pl-2 py-2">
          <div className="li-div flex justify-between hover:text-[#f57224]">
            <li>Women's & Girls Fashion</li>
            <FaAngleRight className="angle-right my-auto mt-[6px]"></FaAngleRight>
          </div>
          <div className="li-div flex justify-between hover:text-[#f57224]">
            <li>Men's & Boy's Fashion</li>
            <FaAngleRight className="angle-right my-auto mt-[6px]"></FaAngleRight>
          </div>
          <div className="li-div flex justify-between hover:text-[#f57224]">
            <li>Electronics Accessories</li>
            <FaAngleRight className="angle-right my-auto mt-[6px]"></FaAngleRight>
          </div>
          <div className="li-div flex justify-between hover:text-[#f57224]">
            <li>TV & Home Appliance</li>
            <FaAngleRight className="angle-right my-auto mt-[6px]"></FaAngleRight>
          </div>
          <div className="li-div flex justify-between hover:text-[#f57224]">
            <li>Electronics Devices</li>
            <FaAngleRight className="angle-right my-auto mt-[6px]"></FaAngleRight>
          </div>
          <div className="li-div flex justify-between hover:text-[#f57224]">
            <li>Mother & Baby</li>
            <FaAngleRight className="angle-right my-auto mt-[6px]"></FaAngleRight>
          </div>
          <div className="li-div flex justify-between hover:text-[#f57224]">
            <li>Automobile & Motorbike</li>
            <FaAngleRight className="angle-right my-auto mt-[6px]"></FaAngleRight>
          </div>
          <div className="li-div flex justify-between hover:text-[#f57224]">
            <li>Spoots & Outdoors</li>
            <FaAngleRight className="angle-right my-auto mt-[6px]"></FaAngleRight>
          </div>
          <div className="li-div flex justify-between hover:text-[#f57224]">
            <li>Home & Lifestyle</li>
            <FaAngleRight className="angle-right my-auto mt-[6px]"></FaAngleRight>
          </div>
          <div className="li-div flex justify-between hover:text-[#f57224]">
            <li>Groceries</li>
            <FaAngleRight className="angle-right my-auto mt-[6px]"></FaAngleRight>
          </div>
          <div className="li-div flex justify-between hover:text-[#f57224]">
            <li>Health & Beauty</li>
            <FaAngleRight className="angle-right my-auto mt-[6px]"></FaAngleRight>
          </div>
          <div className="li-div flex justify-between hover:text-[#f57224]">
            <li>Watches,Bags,Gewellery</li>
            <FaAngleRight className="angle-right my-auto mt-[6px]"></FaAngleRight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
