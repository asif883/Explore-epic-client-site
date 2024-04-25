import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError()
    return (
        <div className="text-center mt-10" id="error-page">
            <h1 className="text-4xl">404</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to='/'><button className="btn btn-secondary">Go back</button></Link>
    </div>
    );
};

export default ErrorPage;