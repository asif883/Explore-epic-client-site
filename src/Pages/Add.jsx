import Swal from "sweetalert2";

const handleSubmit =event=>{
   event.preventDefault()
   const form= event.target;
   const image = form.image.value;
   const country_name=form.country_name.value;
   const place = form.place.value;

   const countrySection = {image, country_name,place}
   console.log(countrySection)



   fetch('http://localhost:5000/addCountry',{
    method: 'POST',
    headers:{
        'content-type': 'application/json'

    },
    body:JSON.stringify(countrySection)
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

const Add = () => {
    return (
        <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit}>
                <label className="font-medium">Image URL:</label><br />
                <input className="input input-primary  w-full" type="text" id="image" name="image"  required />
                <label className="font-medium">Country Name:</label><br />
                <input className="input input-primary w-full" type="text" id="country_name" name="country_name"  required />
                <label className="font-medium">Places to visit:</label><br />
                <input className="input input-primary w-full" type="text" id="place" name="place"  required />
                <input type="submit" value="Add" className="btn btn-block mt-4" />
            </form>
        </div>
    );
};

export default Add;