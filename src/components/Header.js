import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import { useOnlineStatus } from "../utils/useOnlineStatus"
export const Header = () =>{
const onlineStatus = useOnlineStatus()
  const [loginFlag, setLoginFlag] = useState(true)
    return (
      <div className="flex justify-between bg-neutral-50 shadow-lg " >
  <div>
    <img className="w-28" src={LOGO_URL} />
  </div>
  <div className='flex items-center'>
    <ul className='flex '>
      <li className='px-4'>Online Status {onlineStatus ?"🟢":"🔴" }</li>
      <li className='px-4'><Link to="/">Home</Link></li>
      <li className='px-4'><Link to="/about">About</Link></li>
      <li className='px-4'><Link to="/contact">Contact Us</Link></li>
      <li className='px-4'><Link to="/grocery">Grocery</Link></li>
      <li className='px-4'>Cart</li>
      <button className="px-4" onClick={()=>setLoginFlag(!loginFlag)}>{loginFlag?"Login" :"Logout"}</button>
  
    </ul>
  </div>
      </div>
    )
  }
  
//   export default Header