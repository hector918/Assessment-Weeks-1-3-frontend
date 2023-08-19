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
  function renderingHelper(){
    if(isError){
      return <div className="menu-panel">
        <IsError message = {isError} />
      </div>;
    }else if(isLoading){
      return <div className="menu-panel"><IsLoading /></div> ;
    }else{
      return <div className="menu-panel">
          <div className="container menu-card-container">
            {menuList.map((el, idx) => <MenuCard 
              key={`menu-card-${idx}`} 
              menuItem = {el} 
            />)}
          </div>
      </div>
    }
  }
  ///////////////////////////////////////
  useEffect(() => {
    setIsLoading(true);
    fetch_.readAllItems((res) => {
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
      {renderingHelper()}
  </div>
}