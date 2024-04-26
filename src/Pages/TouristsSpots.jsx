import { useEffect, useState } from "react";



const TouristsSpots = () => {
    const [tourData , setData] =useState();

    useEffect(()=>{
        fetch('http://localhost:5000/addSpots')
        .then(res => res.json())
        .then (data=> setData(data))
    },[])
    console.log(tourData);
   

    return (
        <div className="mt-10">
            <h1 className="text-4xl font-bold">Raise Wings For Journey</h1>
            <div>
                {
                    tourData.map((data,idx)=><div key={idx}>
                        <div>
                            <img src={data.image} alt="" />
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TouristsSpots;