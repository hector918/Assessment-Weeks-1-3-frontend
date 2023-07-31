import React, { useEffect, useState } from "react";
import './menu.css';
import MenuCard from "../compoments/menu-card";
import fetch_ from "../fetch_";
import IsError from "../compoments/is-error";
import IsLoading from "../compoments/is-loading";
///////////////////////////////////////
export default function Menu(){
  const [menuList, setMenuList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  ///////////////////////////////////////
  useEffect(() => {
    setIsLoading(true);
    fetch_.ReadAllItems((res) => {
      if(res.error){
        //error
        setIsError(res.error);
      }else if(res.data){
        //successed
        setMenuList(res.data);

        setTimeout(() => {
          setIsLoading(false);
        }, 200);
      }
    })
  }, []);
  ///////////////////////////////////////
  return <div className="menu-display-div">
    <div className="menu-title"><h1>Our Menu</h1></div>
      {isError !== false ? <IsError message = {isError} />
        :<div className="menu-panel">{isLoading === true ? <IsLoading /> 
          :<div className="menu-card-container">
            {menuList.map((el, idx) => <MenuCard 
              key={`menu-card-${idx}`} 
              menuItem = {el} 
            />)}
          </div>}
        </div>
      }
    
  </div>
}