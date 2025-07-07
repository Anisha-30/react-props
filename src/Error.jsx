import './Body.css';
import { useRouteError } from 'react-router-dom';
import img from './assets/error.jpg';

function Error(){
    const error = useRouteError();
    return(
        <div className="container">
            <div className="error">
                <h1>Opps !! Something went wrong</h1>
                <h2>{error.status} : {error.statusText}</h2>
                <img src={img} alt="error img" />
            </div>
        </div>
    )
}
export default Error;