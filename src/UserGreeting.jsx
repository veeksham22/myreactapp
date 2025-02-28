 function UserGreeting(props){
    if(props.isLogged){
        return <h1>Welcome back {props.username}</h1>;
    }
    else{
        return <h1>Please login to access this page</h1>;
    }
 }
 export default UserGreeting