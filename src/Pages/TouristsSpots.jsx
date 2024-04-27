import { useEffect, useState } from "react";
import TouristSpot from "./TouristSpot";



const TouristsSpots = () => {
    const [tourData , setData] =useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/addSpots')
        .then(res => res.json())
        .then (data=> setData(data))
    },[])
    console.log(tourData);
     
    const [showAll, setShowAll] = useState(false);

    const handleClick = () => {
        setShowAll(!showAll);
      };

    return (
        <div className="mt-16">
            <div className="text-center">
                <h4 className="text-2xl text-[#FF9933] font-semibold mb-2">Rejuvenate Your Soul</h4>
                <h1 className="text-4xl font-bold">Raise Wings For Journey</h1>
            </div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
                {
                    tourData?.slice(0, showAll ? tourData.length :6)?.map((data,idx)=><TouristSpot key={idx} data={data}></TouristSpot>)
                }
            </div>
            <div className="text-center mt-6">
                {
                    tourData?.length > 6 && (
                        <button onClick={handleClick} className="border-2 mr-4  px-4  rounded-lg py-3 bg-[#FF9933] text-white  font-semibold">{
                            showAll ? 'Show Less' : 'Show All'
                        }</button>
                    )
                }
            </div>
        </div>
    );
};

export default TouristsSpots;