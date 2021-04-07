import React, {Component, useState, useEffect } from 'react'
import { fetchProducts, fetchUsers, fetchProductDetail} from '../config'
import {Link} from 'react-router-dom'
import loadingscreen from '../images/loadingscreen.gif'
import '../App.css'
export default function Test ()
{
  const [ p, setP ] = useState( [] )
  const [ u, setU ] = useState( [] )
  const [loading , setloading] = useState(false)
   useEffect(() => {
    const fetchAPI = async () => {
      setP( await fetchProducts() );
      setU( await fetchUsers() )
      setloading( true )
      setTimeout( () =>
      {
        setloading(false)
      }, 1000)
    };
     fetchAPI();
   }, [] );
  
  
  
  const products = p.map( ( item, i ) =>
  {
  return(
    <div key={ i }>
      <h3 style={ { textAlign: 'center', } }>{ i }</h3>
      <Link to={ `/productdetail/${ item._id }` }>  <p>{ item._id }</p></Link>
      <p>{ item.id }</p>
      <p>{ item.productName }</p>
      <p>{ item.description }</p>
      <img src={ `https://backendrentkar.herokuapp.com${ item.img }` } alt='image' />
      <p>{ item.category }</p>
      <p>{ item.subcategory }</p>
      <p>{ item.price }</p>
      <h5>Box Content</h5>
        {item.box.map( ( item, i ) =>
      {
        return(
          <div key={ i }>{ item.content }</div>
        )
        } ) }
      <h5>Pricing</h5>
      <div>{ item.pricing[ 0 ].price }</div>
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
      {
        loading
          ?
          <div className='loading'>
            <img src={ loadingscreen}/>
          </div>
          :
          <div>
            <h2 style={ { textAlign : 'center', marginTop:'50px' }}>Products</h2>
      <div>{ products }</div>
      <h2 style={ { textAlign : 'center', marginTop:'50px'}}>Users</h2>
      <div>{ users }</div>

      <h2 style={ { textAlign : 'center', marginTop:'50px'}}>Filter Products</h2>
      {p.filter( p => p.category === 'PHOTOGRAPHY' ).map( filteredP => (
         <div>
        <li>
          {filteredP.productName}
         </li>
          <li>{ filteredP._id }</li>
          </div>
      ) ) }
        </div>
      }
    
      </div>
    )
}