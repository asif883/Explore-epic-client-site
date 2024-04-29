import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Guide = () => {
    return (
        <div className="mt-16">
            <div className="text-center">
                <h1 className="text-3xl lg:text-5xl text-[#FF9933] font-bold">Meet our best professional <br /> travel guide</h1>
                <p className="mt-2">
                    A tour guide enhances travel experiences, offering insights into 
                    history, culture, and local attractions. <br /> They navigate, inform, and entertain, transforming journeys into memorable <br />adventures filled with knowledge and discovery.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row justify-between mt-6">
                {/*  */}
                <div className="card w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/j6mPp2q/team-image-4.webp" alt="Shoes" className="rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl">Alex Rodriguez</h2>
                        <p className="font-medium text-gray-600">4 Years Experience </p>
                        <div className="flex gap-4 text-3xl mt-3">
                          <p><FaFacebook /></p>
                          <p><FaXTwitter /></p>
                          <p><FaInstagram></FaInstagram></p>
                        </div>
                    </div>
               </div>
                {/*  */}
                <div className="card w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/HgbMWM5/team-image-3.webp" alt="Shoes" className="rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl">Sofia Martinez</h2>
                        <p className="font-medium text-gray-600">6 Years Experience </p>
                        <div className="flex gap-4 text-3xl mt-3">
                          <p><FaFacebook /></p>
                          <p><FaXTwitter /></p>
                          <p><FaInstagram></FaInstagram></p>
                        </div>
                    </div>
               </div>
                {/*  */}
                <div className="card w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/Bq6RQG0/team-image-5.webp" alt="Shoes" className="rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl">Marco Silva</h2>
                        <p className="font-medium text-gray-600">3 Years Experience </p>
                        <div className="flex gap-4 text-3xl mt-3">
                          <p><FaFacebook /></p>
                          <p><FaXTwitter /></p>
                          <p><FaInstagram></FaInstagram></p>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    );
};

export default Guide;