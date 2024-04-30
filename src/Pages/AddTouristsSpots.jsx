import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthProvider } from "../Provide/Provider";


const AddTouristsSpots = () => {
  const {user} =useContext(AuthProvider)

    const handleAdd = event=>{
        event.preventDefault();

        const form = event.target;

        const spotName = form.tourists_spot_name.value;
        const country_name = form.country_name.value;
        const image = form.image.value;
        const location = form.location.value;
        const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const total_visitors_per_year = form.total_visitors_per_year.value;
        const user_email = user.email;
        const user_name = user.displayName;
        const short_description = form.short_description.value;

        const touristSpot ={spotName,country_name,image,location,average_cost,seasonality, travel_time,total_visitors_per_year,user_email,user_name,short_description}

        console.log(touristSpot)
       

        fetch('https://travel-server-six.vercel.app/addSpots',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'

            },
            body:JSON.stringify(touristSpot)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Tourist Spot Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  });
                }
        })



    }
    return (
        <div className="max-w-4xl mx-auto mt-10 p-8  rounded-xl">
      <h1 className="text-center text-4xl text-[#FF9933] font-bold">Add Tourists Spot</h1>

      <form onSubmit={handleAdd} className="mt-10" >
        <div className="flex gap-4 mb-4">
          <div className="flex-1">
          <label className="font-medium">Tourists Spot Name:</label><br />
            <input className="input  w-full" type="text" id="tourists_spot_name" name="tourists_spot_name" required />
          </div>

           <div className="flex-1">
            <label className="font-medium">Country Name:</label><br />
            <input className="input  w-full" type="text" id="country_name" name="country_name"  required />
           </div>
        </div>
        <div className="flex gap-4 mb-4">
             <div className="flex-1">
                <label className="font-medium">Image URL:</label><br />
                <input className="input  w-full" type="text" id="image" name="image"  required />

             </div>
                <div className="flex-1">
                    
                    <label className="font-medium">Location:</label><br />
                    <input className="input  w-full" type="text" id="location" name="location"  required />
                </div>
         </div>
     
         <div className="flex gap-4 mb-4">
             <div className="flex-1">
                <label className="font-medium">Average Cost:</label><br />
                <input className="input  w-full" type="text" id="average_cost" name="average_cost" required />
             </div>

             <div className="flex-1">
             <label className="font-medium">Seasonality:</label><br />
            <input className="input  w-full" type="text" id="seasonality" name="seasonality"  required />
            </div>
         </div>
         <div className="flex gap-4 mb-4">
               <div className="flex-1">
                    <label className="font-medium">Travel Time:</label><br />
                    <input className="input  w-full" type="text" id="travel_time" name="travel_time"  required />
                </div>

             <div className="flex-1">
                <label className="font-medium">Total Visitors Per Year:</label><br />
                <input className="input  w-full" type="text" id="total_visitors_per_year" name="total_visitors_per_year"  />
             </div>
         </div>

         <div className="flex gap-4 mb-4">
                
               <div className="flex-1">
                 <label className="font-medium" >User Email:</label><br />
                 <input defaultValue={user.email} className="input  w-full" type="email" id="user_email" name="user_email"  required />
              </div>
              <div className="flex-1">
                 
                <label className="font-medium">User Name:</label><br />
                <input defaultValue={user.displayName} className="input  w-full" type="text" id="user_name" name="user_name"  required />
                </div>
         </div>
        <div>
            <label className="font-medium">Short Description:</label><br />
            <textarea className="w-full border" id="short_description" name="short_description"  rows="4" required></textarea><br /><br />

            <input className="w-full border  p-3 btn bg-[#FF9933] text-lg font-medium text-white" type="submit" value="Add" />
        </div>
      </form>
    </div>
    );
};

export default AddTouristsSpots;