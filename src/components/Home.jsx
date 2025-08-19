import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "../redux/restaurentsSlice";

function Home() {
    const dispatch = useDispatch();
    const { list, loading, error } = useSelector((state) => state.restaurants);

    useEffect(() => {
        if (list.data.length === 0) {
            dispatch(fetchRestaurants());
        }
    }, [dispatch, list.data]);

    return (
        <div className="p-4 mt-3">
            <h1 className="text-5xl font-robotoslabbold mb-8">Restaurants List</h1>

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}

            <div className="grid grid-cols-6 gap-4 mx-10">
                {list.data.map((r) => (
                    <div key={r.restaurantId} className="border py-2 px-3">
                        <img src={r.squareImgUrl} alt={r.name} className="mt-2" />
                        <h3 className="font-robotoslab font-semibold">{r.name.length > 20 ? r.name.slice(0, 20) + " ..." : r.name}</h3>
                        <div className="flex justify-between mt-1">
                            <p className="flex gap-1 items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="#FCC61D"
                                    stroke="#FCC61D"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-star-icon lucide-star w-[20px] h-[20px]"
                                >
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                                </svg>
                                {r.averageRating}
                            </p>
                            <p className="flex gap-1 items-center text-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-clock-icon lucide-clock w-[18px] h-[18px]"
                                >
                                    <path d="M12 6v6l4 2" />
                                    <circle cx="12" cy="12" r="10" />
                                </svg>
                                {r.currentOpenStatusText ? r.currentOpenStatusText : 'Closed now'}
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                            {r.establishmentTypeAndCuisineTags.slice(0, 2).map((tag, i) => (
                                <p
                                    key={i}
                                    className="bg-[#FF9B00] text-xs text-center py-1 px-2 rounded-xl"
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
