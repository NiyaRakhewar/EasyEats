import React, { useEffect, useState } from "react";
import { MENU_API } from "./constants";


export const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);


    useEffect(() => {
        fetchMenu();
      }, []);
    
      const fetchMenu = async () => {
        const data = await fetch(
          MENU_API+resId
        );
    
        const menu = await data.json();
        console.log(menu);
        setResInfo(menu?.data);
      };

  return resInfo
}
