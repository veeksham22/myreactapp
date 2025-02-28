import React,{ useState } from 'react';
function MyArray(){

    const [foods, setFoods] = useState(["Apple","orange","banana"]);

    function handleAddfood(){
        const newfood = document.getElementById("foodinput").value;
        document.getElementById("foodinput").value = "";
        setFoods(f => [...f,newfood])
    }
    function handleRemovefood(index){
        setFoods(foods.filter((_ , i) => i !== index))
    }
    return (
        <div>
        <h2>List of food: </h2>
            <ul>
                {foods.map((food, index) => <li key={index} onClick={() => handleRemovefood(index)}>{food}</li>)}
            </ul>
            <input type="text" id="foodinput" placeholder='enter food' />
            <button onClick={handleAddfood}> Add food</button>
        </div>   

    );
}
export default MyArray