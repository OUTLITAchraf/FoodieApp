import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "../redux/restaurentsSlice";

function Home() {
    const dispatch = useDispatch();
    const { list, loading, error } = useSelector((state) => state.restaurants);

    useEffect(() => {
        if (list.length === 0) {
            dispatch(fetchRestaurants());
        }
    }, [dispatch, list]);
    

    return (
        <div className="lg:p-4 mt-3">
            <h1 className="text-2xl lg:text-5xl font-robotoslabbold mb-4 lg:mb-8">Restaurants List</h1>

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}

            <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 lg:mx-10">
                {list.map((r,i) => (
                    <div key={i} className="border-2 border-[#FF9B00] rounded-xl py-2 px-3 hover:-translate-y-3">
                        <a href={`/restaurentmenu/${r.restaurantsId}`}>
                            <img src={r.squareImgUrl} alt={r.name} className="mt-2" />
                        </a>
                        <h3 className="sm:hidden font-robotoslab font-semibold mt-1 hover:text-[#FF9B00]"><a href={`/restaurentmenu/${r.restaurantsId}`}>{r.name.length > 15 ? r.name.slice(0, 15) + " ..." : r.name}</a></h3>
                        <h3 className="hidden sm:block font-robotoslab font-semibold mt-1 hover:text-[#FF9B00]"><a href={`/restaurentmenu/${r.restaurantsId}`}>{r.name.length > 19 ? r.name.slice(0, 19) + " ..." : r.name}</a></h3>
                        <div className="flex justify-between mt-1">
                            <p className="flex gap-1 items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="#FCC61D"
                                    stroke="#FCC61D"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-star-icon lucide-star w-[18px] h-[18px] lg:w-[20px] lg:h-[20px]"
                                >
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                                </svg>
                                {r.averageRating}
                            </p>
                            <p className={`flex gap-1 items-center text-xs lg:text-base text-center ${r.currentOpenStatusCategory?.toLowerCase().includes("open") ? "text-green-600" : "text-red-600"}`}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-clock-icon lucide-clock w-[15px] h-[15px] lg:w-[18px] lg:h-[18px]"
                                >
                                    <path d="M12 6v6l4 2" />
                                    <circle cx="12" cy="12" r="10" />
                                </svg>
                                {r.currentOpenStatusCategory ? r.currentOpenStatusCategory : 'CLOSED'}
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                            {r.establishmentTypeAndCuisineTags.slice(0, 2).map((tag, i) => (
                                <p
                                    key={i}
                                    className="bg-[#FF9B00] text-[6px] lg:text-xs text-center py-1 px-2 rounded-xl"
                                >
                                    {tag.length > 10 ? tag.slice(0, 10) + "..." : tag}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
