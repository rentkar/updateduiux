import React, {Component, useState, useEffect } from 'react'
import { fetchProductDetail, fetchUserDetail} from '../config'


export default function Test ()
{
  const [ p, setP ] = useState( [] )
  const [u, setU] = useState([])
  console.log(p)
   useEffect(() => {
    const fetchAPI = async () => {
      setP( await fetchProductDetail() );
      setU(await fetchUserDetail())
    };
     fetchAPI();
   }, [] );
  
  
  
  const products = p.map( ( item, i ) =>
  {
  return(
    <div key={ i }>
      <h3 style={ { textAlign: 'center', } }>{ i }</h3>
      <p>{ item.productId }</p>
      <p>{ item.productName }</p>
      <p>{ item.description }</p>
      <h5>Box Content</h5>
        {item.box.map( ( item, i ) =>
      {
        return(
          <div key={ i }>{ item.content }</div>
        )
        } ) }
      <h5>Pricing</h5>
      {item.pricing.map( ( item, i ) =>
      {
        return(
          <div key={ i }>
            <p>{ item.duration }</p>
            <p>{ item.price }</p></div>
        )
      }) }
    </div>
    )
    
    
  } )

  const users = u.map( ( item, i ) =>
  {
    return(
      <div key={ i }>
      <p>{ item.name }</p>
      <p>{ item.gender }</p>
      <p>{ item.phone }</p>
      </div>)
  })
  
  
  return (
    <div>
      <h2 style={ { textAlign : 'center', marginTop:'50px' }}>Products</h2>
      <div>{ products }</div>
      <h2 style={ { textAlign : 'center', marginTop:'50px'}}>Users</h2>
      <div>{ users }</div>
      </div>
    )
}