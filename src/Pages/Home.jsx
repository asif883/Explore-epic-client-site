import Country from "./Country";
import Slider from "./Slider";
import TourIdeas from "./TourIdeas";
import TouristsSpots from "./TouristsSpots";


const Home = () => {
    return (
        <div>
           
            <Slider></Slider>
            <Country></Country>
            <TouristsSpots></TouristsSpots>
            <TourIdeas></TourIdeas>
        </div>
    );
};

export default Home;