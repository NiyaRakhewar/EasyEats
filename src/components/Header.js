import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import { useOnlineStatus } from "../utils/useOnlineStatus"
export const Header = () =>{
const onlineStatus = useOnlineStatus()
  const [loginFlag, setLoginFlag] = useState(true)
    return (
      <div className='header'>
  <div>
    <img className="logo" src={LOGO_URL} />
  </div>
  <div className='nav-items'>
    <ul>
      <li>Online Status {onlineStatus ?"🟢":"🔴" }</li>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
      <li>Cart</li>
      <button className="login-btn" onClick={()=>setLoginFlag(!loginFlag)}>{loginFlag?"Login" :"Logout"}</button>
  
    </ul>
  </div>
      </div>
    )
  }
  
//   export default Header