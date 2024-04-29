import { Link, useLoaderData } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";


const AllSpots = () => {
    const loadedData = useLoaderData()
    console.log(loadedData);

    // spotName,country_name,image,location,average_cost,seasonality, travel_time,total_visitors_per_year,short_description
  
    return (
        <div>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 ">
            {
                loadedData?.map((data,idx) => <div key={idx}>


                  <div className="card lg:card-side border shadow-xl">
                    <figure><img className="w-[300px] h-[250px] rounded-xl" src={data.image} alt="Album"/></figure>
                    <div className="card-body">
                      <h2 className="card-title">{data.spotName}</h2>
                      <p className="flex items-center"><IoLocationSharp></IoLocationSharp>{data.location} , {data.country_name}</p>
                      <div className="flex gap-3 ">
                                    <p><span className="font-semibold">Estimated Cost:</span> 
                                        {data.average_cost}</p>
                                    <p><span className="font-semibold">Total Visitor:</span> 
                                        {data.total_visitors_per_year}/year</p>
                                </div>
                      <div className="card-actions justify-end">
                      <Link to={`details/${data._id}`}>
                        <button className="border-2 mt-4  px-4  rounded-lg py-3 bg-[#FF9933] text-white  font-semibold">
                          View Details
                        </button>
                      </Link>
                      </div>
                    </div>
                  </div>

                 {/* <div className="card  bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={data.image} alt="Shoes" className="w-full h-[200px] rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{data.spotName}</h2>
                            <p>{data.location} , {data.country_name}</p>
                            <div className="flex gap-3">
                            <p>{data.average_cost}</p>
                            <p>{data.total_visitors_per_year}</p>
                            <p>{data.seasonality}</p>
                            </div>
                            <div className="card-actions">
                            <Link to={`details/${data._id}`}><button className="border-2 mt-4  px-4  rounded-lg py-3 bg-[#FF9933] text-white  font-semibold">View Details</button>
                            </Link>
                            </div>
                        </div>
                      </div> */}
                </div>)
            }
          </div>
        </div>
    );
};

export default AllSpots;