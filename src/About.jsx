import UserCard from "./UserCard"
import './Body.css'


function About(){
    return(
        <div>
            <p className="text-3xl font-bold underline">About page</p>
            <p className="hover:text-blue-600">helooo</p>
            <UserCard/>
        </div>
    )
}
export default About