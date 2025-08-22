import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "../redux/restaurentsSlice";
import { fetchMenuRestaurant, clearMenu } from "../redux/menuSlice";
import { addToBasket } from "../redux/basketSlice";
import { useParams } from "react-router-dom";

function RestaurentMenu() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.restaurants);
  const {
    menu,
    loading: menuloading,
    error: menuerror,
  } = useSelector((state) => state.menurestaurant);
  const basket = useSelector((state) => state.basket.items);
  const [restaurent, setRestaurent] = useState({});
  const { restaurantsId } = useParams();

  useEffect(() => {
    if (list.length === 0) {
      dispatch(fetchRestaurants());
    } else {
      const found = list.find((r) => r.restaurantsId === restaurantsId);
      if (found) {
        setRestaurent(found);
      }
    }
  }, [dispatch, list, restaurantsId]);

  useEffect(() => {
    if (menu.length === 0 && restaurantsId) {
      dispatch(fetchMenuRestaurant());
    }
  }, [dispatch, menu.length]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="flex flex-col lg:flex-row mt-5 ">
        <img
          src={restaurent.thumbnail?.photo?.photoSizeDynamic?.urlTemplate
            ?.replace("{width}", "600")
            ?.replace("{height}", "400")}
          alt="Restaurant"
          className="w-full md:w-[300px] h-[200px] object-cover rounded-lg"
        />
        <div className="lg:ml-5">
          <h1 className="text-3xl lg:text-4xl font-robotoslabbold mb-5 mt-5">
            {`Restaurant ${restaurent.name}` || "Hello from RestaurentMenu"}
          </h1>
          <div className="flex flex-row space-x-5 lg:space-x-10">
            <p className="flex gap-1 text-base lg:text-xl font-robotoslabbold items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#FCC61D"
                stroke="#FCC61D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-star-icon lucide-star w-[20px] h-[20px] lg:w-[25px] lg:h-[25px]"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
              </svg>
              {restaurent.averageRating}
              <span className="text-gray-500 text-xs lg:text-base">
                ({restaurent.userReviewCount} reviews)
              </span>
            </p>
            <p
              className={`flex gap-2 lg:gap-3 items-center text-base lg:text-xl font-semibold text-center ${
                restaurent.currentOpenStatusText?.toLowerCase().includes("open")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-clock-icon lucide-clock w-[19px] h-[19px] lg:w-[24px] lg:h-[24px]"
              >
                <path d="M12 6v6l4 2" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              {restaurent.currentOpenStatusText
                ? restaurent.currentOpenStatusText
                : "CLOSED"}
            </p>
            <p></p>
          </div>
          <div className="flex flex-wrap gap-2 mt-5">
            {restaurent.establishmentTypeAndCuisineTags?.map((tag, i) => (
              <span
                key={i}
                className="bg-[#FF9B00] text-white lg:text-xl font-robotoslabbold px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl lg:text-5xl font-robotoslabbold mb-5 mt-10">
          Restaurant Menu
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:mx-5">
          {menu.map((m, i) => {
            const isAdded = basket.some((item) => item.id === i);
            return (
              <div key={i} className="border-2 border-[#FF9B00] p-3 rounded-lg">
                <img
                  src={m.Photo?.replace("60s", "o")}
                  alt={m.FoodName}
                  className="w-full h-[150px] lg:h-[250px] object-cover"
                />
                <h3 className="text-xl font-robotoslabbold mt-2">
                  {m["Food Name"]}
                </h3>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-xs lg:text-lg font-robotoslabsemibold">
                    {m.Price ? m.Price : "$20.00"}
                  </p>
                  <button
                    onClick={() =>
                      !isAdded &&
                      dispatch(
                        addToBasket({
                          id: i,
                          name: m["Food Name"],
                          price: m.Price || "$20.00",
                          photo: m.Photo?.replace("60s", "o"),
                        })
                      )
                    }
                    disabled={isAdded}
                    className={`flex flex-row gap-1 lg:gap-2 border-2 p-2 text-white text-[9px] lg:text-base rounded-xl cursor-pointer ${
                      isAdded
                        ? "bg-gray-400 border-gray-400 cursor-not-allowed"
                        : "bg-[#FF9B00] border-[#FF9B00] hover:bg-white hover:text-[#FF9B00]"
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-circle-check-icon lucide-circle-check w-[13px] h-[13px] lg:w-[24px] lg:h-[24px]"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="m9 12 2 2 4-4" />
                        </svg> Added
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-circle-plus-icon lucide-circle-plus w-[13px] h-[13px] lg:w-[24px] lg:h-[24px]"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M8 12h8" />
                          <path d="M12 8v8" />
                        </svg>
                        Add Basket
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default RestaurentMenu;
