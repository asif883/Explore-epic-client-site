import PropTypes from 'prop-types';
import { IoLocationSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const TouristSpot = ({data}) => {
    const {_id,spotName,image,location}=data
    return (
        <div>
            <div className="card border border-orange-200">
                <figure><img className='h-[300px] w-full' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{spotName}</h2>
                    <p className='flex items-center text-gray-500'><IoLocationSharp />{location}</p>
                    <div className="card-actions justify-end">
                    <Link to={`details/${_id}`}><button className="border-2 border-orange-200 text-[#FF9933] mr-4  px-4  rounded-lg py-3 hover:bg-[#FF9933] hover:text-white  font-semibold">View Details</button>
                    </Link>
                    </div>
                </div>
           </div>
        </div>
    );
};

TouristSpot.propTypes={
    data : PropTypes.object
}

export default TouristSpot;