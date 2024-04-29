import { Link, useLoaderData } from "react-router-dom";


const AllSpots = () => {
    const loadedData = useLoaderData()
    console.log(loadedData);
  
    return (
        <div>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                loadedData?.map((data,idx) => <div key={idx}>

                 <div className="card  bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={data.image} alt="Shoes" className="w-full h-[200px] rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{data.spotName}</h2>
                            <p>{data.location} , {data.country_name}</p>
                            <div className="card-actions">
                            <Link to={`details/${data._id}`}><button className="border-2 mt-4  px-4  rounded-lg py-3 bg-[#FF9933] text-white  font-semibold">View Details</button>
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