import { Circles } from "react-loader-spinner";

const Loader = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <Circles
                height="80"
                width="80"
                color="#FF9933"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                />
        </div>
    );
};

export default Loader;