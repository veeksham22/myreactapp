
import Card from './Card.jsx'
import Buttons from './Buttons.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import MyComponent from './MyComponent.jsx'
import MyArray from './MyArray.jsx'
function Apps() {
  const fruits=[{id:1,name:"apple", calories: 95},
                {id:2,name: "orange", calories: 45},
                {nid:3,name:"banana", calories:25},
                {id:4,name:"coconut", calories:100}];
  const veg=[{}]

  return(
    <>
      <MyComponent/>
      <Card/>
      <Buttons/>
      <Student name="Spongebob" age={30} Student={true}/>
      <Student name="patric" age={45} Student={false}/>
      <Student />
      <UserGreeting isLogged={true} username="veeksha"/>
      <UserGreeting isLogged={false} username="lala"/>
      <List items={fruits} catogary="fruit"/> 
      <MyArray/>
    </>
  );
}

export default Apps
