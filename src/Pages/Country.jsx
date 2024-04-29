import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Country = () => {
    const [countries , setCountry] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/addCountry')
        .then(res =>res.json())
        .then(data =>setCountry(data))
    },[])
    return (
        <div>
            <div className="text-center mt-16">
                <h4 className="text-2xl font-semibold text-[#FF9933]">Place to travel</h4>
                <h1 className="text-4xl font-bold">Dream. Explore. Discover.</h1>
            </div>

            <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    countries?.map((country, idx) => <div key={idx}>

                        <div  style={{backgroundImage: `url(${country.image})`,backgroundSize:'cover',}} className="w-[400px] h-[350px] border rounded-lg relative">
                             <div className="text-center absolute top-1/3 left-1/3">

                             <h1 className="text-3xl text-white font-semibold">{country.country_name}</h1>
                             <Link to={`/all-tourist-spots/${country.country_name}`}><p className="px-4  rounded-lg py-3 bg-[#FF9933] text-white  font-semibold">{country.place}</p>
                             </Link>
                            </div>       
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Country;