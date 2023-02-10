import logo from "../assets/image.png"
import logo1 from '../assets/note.png'
function User(){

return <div className="host"> 
   <button  className="btn4">User interface</button>
    <h1 className="pix"> Service Page Website </h1>
    <p className="min">Make a page display about services for websites company with blue and red colors </p>
    <div className="ligne">
      <div>
        <img  className="image"src={logo}  alt="" />
        <img  className="image"src={logo1}  alt="" /> 
        </div>
<div ClassName="ligne1">
  <div>
<span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <button className="btn" >Invite</button>
  </div>
    </div>
  </div>
  
     <div className="secondpart">
      <div ClassName="split"></div>
        <div className="blackcircle"></div>
        <span class="dot1"></span>
        <p> 4 attachment </p>
        <div className="blackcircle"></div>
        <span class="dot1"></span>
        <p> 10 comments
        </p>
    </div>
    
</div>
}
export default User;
