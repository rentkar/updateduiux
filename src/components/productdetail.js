import React, {Component, useState, useEffect } from 'react'
import {fetchProductDetail} from '../config'

export default function ProductDetail ({match})
{
	let params = match.params
	const [ pd, setpd ] = useState( [] )
	console.log(pd)
   useEffect(() => {
    const fetchAPI = async () => {
      setpd(await fetchProductDetail(params._id))
    };
     fetchAPI();
   }, [params._id] );
  
  
  
 
 

  return (
    <div>
	    <h2>Product Detail</h2>
      <div>{ pd}</div>
      </div>
    )
}