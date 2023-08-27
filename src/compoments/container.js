import React from 'react';
import './container.css';

export default function Container({children,  className = []}){
  if(!Array.isArray(className)) className = [];
  className.push('container');
  return <div className={className.join(" ")}>
    {children}
  </div>
}