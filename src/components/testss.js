import React, {Component, useState, useEffect } from 'react'
import { fetchProductDetail } from '../config'


export default function Test ()
{
  const [ p, setP ] = useState( [] )
  console.log(p)
   useEffect(() => {
    const fetchAPI = async () => {
      setP (await fetchProductDetail());
    };
    fetchAPI();
  },[]);

  const products = p.map(( id, item ) => {
  return(
    <div key={id}>{item.productName}</div>
  )
  } )
  
  return(
    <div>{ products }</div>
    )
}