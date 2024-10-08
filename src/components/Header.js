import { useState, useContext } from "react";
import LOGO from "../utils/assets/logo-food.png";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { HiOutlineStatusOnline, HiOutlineStatusOffline } from "react-icons/hi";
import { UserContext } from "../utils/UserContext";
export const Header = () => {
  const onlineStatus = useOnlineStatus();
  const [loginFlag, setLoginFlag] = useState(true);

  const data = useContext(UserContext)

  console.log("data context", data)

  return (
    <div className="fixed z-40 w-full flex justify-between bg-slate-50 shadow-lg px-3">
      <div>
        {/* <h4 className="w-50 h-50">🍜</h4> */}
        <Link to="/"><img
          className="w-16 m-2 rounded-full cursor-pointer hover:scale-105 transition duration-300 "
          src={LOGO}
        /></Link>
      </div>
      <div className="flex items-center font-semibold">
        <ul className="flex">
          <li className="px-4 py-1">
            {" "}
            {onlineStatus ? (
              <HiOutlineStatusOnline />
            ) : (
              <HiOutlineStatusOffline />
            )}
          </li>
         
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <h1 className="px-4 cursor-pointer" onClick={() => setLoginFlag(!loginFlag)}>
            {loginFlag ? " Login " : "Logout"}
          </h1>
          <p>{data?.loggedInUser}</p>
        </ul>
      </div>
    </div>
  );
};

//   export default Header
