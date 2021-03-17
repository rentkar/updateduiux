
import React, {Component, useState, useEffect } from 'react'
import {fetchProductDetail} from '../config'
import { useParams } from "react-router";

export default function ProductDetail ({match})
{
  let {_id} = useParams()
	const [ pd, setpd ] = useState( [] )
  const [b, setB] = useState([])
   useEffect(() => {
    const fetchAPI = async () => {
      setpd(await fetchProductDetail(_id))
    };
     fetchAPI();
   }, [_id] );

  console.log(pd)
  let box = pd.box
  //const b = bx.map( ( item, i ) =>
    //  {
      //  return(
      //    <div key={ i }>{ item.content }</div>
    //    )
    //    } )
  //console.log('Box -> ', b)
  //console.log('Box 0 -> ', b['0'].content  )

  return (
    <div>
	    <h2 style={{textAlign: 'center'}}>Product Detail</h2>
      <p>{pd.name}</p>
      <p>{pd.id}</p>
      <p>{pd._id}</p>
      <p>{pd.description}</p>
      <h5>Box Content</h5>
      <h5>Pricing</h5>
      <p></p>
      </div>
    )
}