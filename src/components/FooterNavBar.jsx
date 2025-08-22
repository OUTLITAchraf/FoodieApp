import React from "react";
import FoodieAppLogo from "../assets/FoodieAppLogo.png";

function FooterNavBar() {
    return (
        <div className="lg:mx-10 flex justify-between items-center">
            <div className="flex items-center">
                <img
                    src={FoodieAppLogo}
                    alt="FoodieAppLogo"
                    className="w-[60px] h-[60px] lg:w-[120px] lg:h-[120px]"
                />
                <h2 className="text-xs lg:text-3xl font-robotoslabbold text-white">FoodieApp</h2>
            </div>
            <p className='mt-4 sm:mt-6 md:mt-10 text-xs sm:text-lg text-white'>&copy; 2025 FoodieApp</p>
            <div className="flex flex-col gap-2 sm:gap-4 mt-2">
                <p className="text-xs  sm:text-lg text-white">Privacy Policy</p>
                <p className="text-xs  sm:text-lg text-white">Terms of us</p>
            </div>

        </div>
    );
}

export default FooterNavBar;
