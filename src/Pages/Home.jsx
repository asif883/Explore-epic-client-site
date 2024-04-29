import Country from "./Country";
import Guide from "./Guide";
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
            <Guide></Guide>
        </div>
    );
};

export default Home;