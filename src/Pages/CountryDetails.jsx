import Swal from "sweetalert2";

const handleSubmit =event=>{
    event.preventDefault()
    const form= event.target;
    const image = form.image.value;
    const country_name=form.country_name.value;
    const tourists_spot_name = form.tourists_spot_name.value;
    const short_description = form.short_description.value;
    const seasonality = form.seasonality.value;
    const average_cost = form.average_cost.value;
    const location = form.location.value;
    
 
    const countryDetails = {image, country_name,tourists_spot_name ,short_description,seasonality,average_cost,location}
    console.log(countryDetails);
    fetch('http://localhost:5000/addCountryDetails',{
        method: 'POST',
        headers:{
            'content-type': 'application/json'
    
        },
        body:JSON.stringify(countryDetails)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Country Added Successfully',
                icon: 'success',
                confirmButtonText: 'Ok'
              });
            }
    })

}

const CountryDetails = () => {
    return (
        <div>
         <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit}>
                <label className="font-medium">Image URL:</label><br />
                <input className="input input-primary  w-full" type="text" id="image" name="image"  required />
                <label className="font-medium">Country Name:</label><br />
                <input className="input input-primary w-full" type="text" id="country_name" name="country_name"  required />
                <label className="font-medium">Tourists_spot_name:</label><br />
                <input className="input input-primary w-full" type="text" id="place" name="tourists_spot_name"  required />
                <label className="font-medium">Location:</label><br />
                 <input className="input input-primary w-full" type="text" id="location" name="location"  required />
                 <label className="font-medium">Average Cost:</label><br />
                <input className="input input-primary  w-full" type="text" id="average_cost" name="average_cost" required />
                <label className="font-medium">Seasonality:</label><br />
                <input className="input input-primary w-full" type="text" id="seasonality" name="seasonality"  required />
                <label className="font-medium">Short Description:</label><br />
                <textarea className="w-full input-primary border" id="short_description" name="short_description"  rows="4" required></textarea><br /><br />
            <input type="submit" value="Add" className="btn btn-block mt-4" />
            </form>
        </div>

        </div>
    );
};

export default CountryDetails;