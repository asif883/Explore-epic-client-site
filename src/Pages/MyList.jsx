import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../Provide/Provider";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { data } from "autoprefixer";


const MyList = () => {
    const [tourSpot, setTourSpot]= useState([])
    const {user} =useContext(AuthProvider)
    
     useEffect (()=>{
            fetch(`http://localhost:5000/myList/${user?.email}`)
            .then(res=> res.json())
            .then(data => setTourSpot(data))
     },[user])

     

    const handleDelete = _id =>{
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
         
            if(result.isConfirmed){
                fetch(`http://localhost:5000/updateSpots/${_id}`,{
                        method: "DELETE"
                })
                .then(res => res.json())
                .then(data => console.log(data))
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
            }
          });
          
            

             
          
        

    }
    

    return (
        <div className="mt-8 mb-16">
            <div className="text-center mb-6">
                <h1 className="text-4xl text-[#FF9933] font-bold">The Spots You Added</h1>
            </div>
            {
                tourSpot?.map((spot,idx)=> <div className=" mb-7" key={idx}>

                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img className="w-[320px] lg:w-[600px] h-full" src={spot.image} alt="Movie"/></figure>
                            <div className="card-body">
                                <h2 className="card-title">{spot.spotName}</h2>
                                <p className='flex items-center text-gray-500'><IoLocationSharp />{spot.location}, {spot.country_name}</p>
                                <p>{spot.short_description}</p>
                                <div className="card-actions">
                                <Link to={`/updateSpot/${spot._id}`}><button className="border-2 mr-4  px-4  rounded-lg py-3 bg-[#FF9933] text-white  font-semibold">Update</button>
                                </Link>
                                <button onClick={()=>handleDelete(spot._id)}className="border-2 mr-4  px-4  rounded-lg py-3 bg-[#FF9933] text-white  font-semibold">Delete</button>
                                </div>
                            </div>
                        </div>
               
                </div>)
            }
        </div>
    );
};

export default MyList;