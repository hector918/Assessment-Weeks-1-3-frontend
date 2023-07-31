import React, { useEffect, useState } from "react";
import './item-detail.css';
import { Link, useParams } from "react-router-dom";
import fetch_ from "../fetch_";
import IsError from "../compoments/is-error";
import IsLoading from "../compoments/is-loading";
import { useNavigate } from "react-router-dom";

/////////////////////////////////////////////////
export default function ItemDetail(){
  const [itemData, setItemData] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {id} = useParams();
  const navigation = useNavigate();
  //////////////////////////////////////////////////
  useEffect(() => {
    asyncHelper();
    async function asyncHelper(){
      setIsLoading(true);
      const ret = await fetch_.readItemById(id);
      if(ret.data){
        setItemData(ret.data);
      }else if(ret.error){
        setItemData({});
        setIsError(ret.error);
        setTimeout(() => {
          navigation(`/`);
        }, 2000)
      }
      setIsLoading(false);
    }
  }, [id]);
  //////////////////////////////////////////////////
  return <div className="item-detail-card">
    {isError !== false ? <IsError message = {isError} />
        :<div className="item-detail-panel">{isLoading === true ? <IsLoading /> 
          :<div className="item-card-container">
            <h3>{itemData.name}</h3>
            <img src={itemData.image} alt={itemData.name}/>
            <p>{itemData.longDescription}</p>
            <p>{itemData.price}</p>
          </div>}
          <div className="item-detail-card-footer">
            <Link to={'/'}>Go Home</Link>
          </div>
        </div>
      }

  </div>
}