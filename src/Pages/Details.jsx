import { useLoaderData } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";


const Details = () => {

    const loadedData = useLoaderData()
    const{spotName,country_name,image,location,average_cost,seasonality, travel_time,total_visitors_per_year,short_description} = loadedData;
    return (
        <div className="flex gap-6 mt-10">
            <div className="flex-1">
                <img className="rounded-xl" src={image} alt="" />
            </div>
            <div className="flex-1">
                <h1 className="text-3xl font-bold">{spotName}</h1>
                <p className='flex items-center text-gray-500 mt-2'><IoLocationSharp />{location},        {country_name}</p>
                <p className="mt-3">{short_description}</p>
                <div className="mt-8 border-t-2 pt-4 space-y-3">
                    <p><span className="text-lg font-semibold">Perfect time for travel: 
                        </span>  {seasonality}
                    </p>
                    <p><span className="text-lg font-semibold">Total Visitor: 
                        </span>  {total_visitors_per_year}/Year
                    </p>
                    <p><span className="text-lg font-semibold">Travel-time: 
                        </span>  {travel_time}
                    </p>
                    <p><span className="text-lg font-semibold">Average-Cost: 
                        </span>  {average_cost}
                    </p>
                </div>


            </div>
            
        </div>
    );
};

export default Details;