import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurants } from '../redux/restaurentsSlice';
import { fetchMenuRestaurant } from '../redux/menuSlice';
import { useParams } from 'react-router-dom';

function RestaurentMenu() {
    const dispatch = useDispatch();
    const { list, loading, error } = useSelector((state) => state.restaurants);
    const { menu, loading: menuloading, error: menuerror } = useSelector((state) => state.menurestaurant)
    const [restaurent, setRestaurent] = useState({})
    const { restaurantsId } = useParams()

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
    },[dispatch,restaurantsId,menu.length]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;    

    return (
        <>
            <div className='flex flex-col lg:flex-row mt-5 '>
                <img
                    src={restaurent.thumbnail?.photo?.photoSizeDynamic?.urlTemplate
                        ?.replace("{width}", "600")
                        ?.replace("{height}", "400")}
                    alt="Restaurant"
                    className="w-full md:w-[300px] h-[200px] object-cover rounded-lg"
                />
                <div className='lg:ml-5'>
                    <h1 className='text-3xl lg:text-4xl font-robotoslabbold mb-5 mt-5'>{`Restaurant ${restaurent.name}` || "Hello from RestaurentMenu"}</h1>
                    <div className='flex flex-row space-x-5 lg:space-x-10'>
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
                            <span className='text-gray-500 text-xs lg:text-base'>({restaurent.userReviewCount} reviews)</span>
                        </p>
                        <p className={`flex gap-2 lg:gap-3 items-center text-base lg:text-xl font-semibold text-center ${restaurent.currentOpenStatusText?.toLowerCase().includes("open") ? "text-green-600" : "text-red-600"}`}>
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
                            {restaurent.currentOpenStatusText ? restaurent.currentOpenStatusText : 'CLOSED'}
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
                <h2 className='text-3xl lg:text-5xl font-robotoslabbold mb-5 mt-10'>Restaurant Menu</h2>
                <div>
                    {menu.map((m,i)=>(
                        <img src={m.Photo} alt={m.FoodName} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default RestaurentMenu
