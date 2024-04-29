import { Zoom } from "react-awesome-reveal";


const TourIdeas = () => {
    return (
        <div className="mt-16">
            <div className="text-center mb-5">
                <h4 className="text-2xl text-[#FF9933] font-bold">Find your best adventure</h4>
                <h1 className="text-6xl font-bold">Adventure Ideas</h1>
            </div>
           
          <Zoom>
          <div className="flex gap-4 flex-col lg:flex-row">
                {/*  */}
                <div className="card ">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/TqKSCGH/forest.webp" alt="Forest" className="rounded-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl">WILDSCAPE</h2>
                    <p>
                        Amidst towering trees,spotted wildlife, and found solace in the forest's timeless embrace.
                    </p>
                    <div className="card-actions">
                    <button className="border-2  px-4  rounded-lg py-3 bg-[#FF9933] text-white  font-semibold">Explore</button>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="card ">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/bdxHr7W/hiking.webp" alt="Forest" className="rounded-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl">CLIMBING</h2>
                    <p>
                        Scaling steep slopes,breaths syncopated,and embraced the exhilarating triumph of ascent.
                        
                    </p>
                    <div className="card-actions">
                    <button className="border-2  px-4  rounded-lg py-3 bg-[#FF9933] text-white  font-semibold">Explore</button>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="card ">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/wBPk85b/mountain.webp" alt="Forest" className="rounded-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl">KAYAKING</h2>
                    <p>Gliding on serene waters,paddles slicing through the silence, and embraced nature's rhythm.</p>
                    <div className="card-actions">
                    <button className="border-2  px-4  rounded-lg py-3 bg-[#FF9933] text-white  font-semibold">Explore</button>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="card ">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/rbf77jT/kayaking.webp" alt="Forest" className="rounded-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl">HIKING</h2>
                    <p>
                        Traversing rugged trails, under open skies,and discovered the beauty of untamed landscapes.
                    </p>
                    <div className="card-actions">
                    <button className="border-2  px-4  rounded-lg py-3 bg-[#FF9933] text-white  font-semibold">Explore</button>
                    </div>
                </div>
            </div>
       </div>
          </Zoom>
        </div>
    );
};

export default TourIdeas;