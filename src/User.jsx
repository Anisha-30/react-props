function User({user}){
    return(
        <div>
           { /*
            <h3>props sample--{props.name}</h3>
             <h3>{props.age}</h3>
            */
           } 
           <hr />
              <h3>Name: {user.name}, Age: {user.age}</h3>
        </div>
    )
}
export default User;