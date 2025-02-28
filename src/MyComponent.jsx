import React,{useState} from 'react'
function MyComponent(){
    const [name,setname] = useState();
    const updatename = () => {
        setname("yooooooo i am veeksha");
    }
    const [hesaru,sethesaru] = useState("");
    function handlename(event){
        sethesaru(event.target.value);
    }
    return (
        <div>
            <input value={hesaru} onChange={handlename}></input>
            <p>hesaru: {hesaru}</p>
            <p>Name: {name} </p>
            <button onClick={updatename}>Set Name</button>
        </div>
    );

}
export default MyComponent