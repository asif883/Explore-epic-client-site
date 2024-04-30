import { Link, useLoaderData } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";




const AllSpots = () => {


    const loadedData = useLoaderData()
    console.log(loadedData);


    // spotName,country_name,image,location,average_cost,seasonality, travel_time,total_visitors_per_year,short_description
  
    return (
        <div>
          <div className="text-center mt-6 mb-10">
          <div className="dropdown">
              <div tabIndex={0} role="button" className="border-2 px-4  rounded-lg py-3 bg-[#FF9933] text-white text-lg font-semibold"><span className="flex gap-3 items-center">Sort <IoIosArrowDown /></span></div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 text-[#FF9933] font-semibold rounded-box w-52">
                <li><a>All</a></li>
                <li><a>Cost low to high</a></li>
                <li><a>Cost high to low</a></li>
              </ul>
          </div>
          </div>
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

               
                </div>)
            }
          </div>
        </div>
    );
};

export default AllSpots;