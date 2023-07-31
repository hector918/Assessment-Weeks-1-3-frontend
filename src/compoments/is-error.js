import React from "react";
import './is-error.css';
/////////////////////////////////////////
export default function IsError({message}){
  return <div className="is-error-div">
    <div>
      <h1>There is an error.</h1>
      <p>{message}...</p>
    </div>
  </div>
}