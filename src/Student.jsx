import Proptypes from 'prop-types'
function Student(props){
    return(
        <div className="student">
            <p> Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p> isStudent={props.Student ? "yes":"no"}</p>
        </div>

    );
}

Student.defaultProps={
    Name: "guest",
    Age: 0,
    isStudent: false,
}
export default Student