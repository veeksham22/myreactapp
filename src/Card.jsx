import profilepic from './assets/lala.jfif'

function Card(){
return(
    <div className="card">
        <img className="card-image"src={profilepic} alt="Profile picture"></img>
        <h2 className="card-title">Its Never too late to try it!!! </h2>
        <p className="card-text">I am trying to own google someday. Or now. whichever works.</p>
    </div>
);
}
export default Card