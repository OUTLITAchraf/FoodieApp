import React from "react";
import FoodieAppLogo from "../assets/FoodieAppLogo.png";

function NavBar() {
    return (
        <nav className="lg:mx-10 flex justify-between items-center">
            <div className="flex items-center">
                <a href="/">
                    <img
                        src={FoodieAppLogo}
                        alt="FoodieAppLogo"
                        className="w-[60px] h-[60px] lg:w-[90px] lg:h-[90px]"
                    />
                </a>
                <a href="/" className="text-lg lg:text-2xl font-robotoslabbold text-white">FoodieApp</a>
            </div>
            <a href="/basket" className="flex gap-2 bg-white text-[#FF9B00] font-robotoslab p-2 lg:p-3 rounded-lg hover:scale-105 ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FF9B00"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-shopping-basket-icon lucide-shopping-basket"
                >
                    <path d="m15 11-1 9" />
                    <path d="m19 11-4-7" />
                    <path d="M2 11h20" />
                    <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
                    <path d="M4.5 15.5h15" />
                    <path d="m5 11 4-7" />
                    <path d="m9 11 1 9" />
                </svg>
                Basket
            </a>
        </nav>
    );
}

export default NavBar;
