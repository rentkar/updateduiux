import React, {Component, useState, useEffect } from 'react'
import {fetchProductDetail,  fetchProductBoxDetail, fetchProductPricingDetail, fetchProductImagesDetail, fetchProductSpecsDetail} from '../config'
import { useParams } from "react-router";

export default function ProductDetail ({match})
{
  let {_id} = useParams()
  const [ pd, setpd ] = useState( [] )
  const [ pdb, setpdb ] = useState( [] )
  const [ pdp, setpdp ] = useState( [] )
  const [ pds, setpds ] = useState( [] )
  const [pdi, setpdi] = useState([])
   useEffect(() => {
    const fetchAPI = async () => {
      setpd( await fetchProductDetail( _id ) )
      setpdb( await fetchProductBoxDetail( _id ) )
      setpdp( await fetchProductPricingDetail( _id ) )
      setpds( await fetchProductSpecsDetail( _id ) )
      setpdi(await fetchProductImagesDetail(_id))
    };
     fetchAPI();
   }, [_id] );


  const box = pdb.map( ( item, i ) =>
  {
    return(
      <div key={ i }>
        <p><b>{ item.image }</b></p>
        <p><b>Content : </b>{ item.content }</p>
      </div>
    )
  } )
  
    const pricing = pdp.map( ( item, i ) =>
  {
    return(
    <div key={ i }>
        <p><b>Duration : </b>{ item.duration }</p>
        <p><b>Price : </b>{ item.price }</p>
      </div>
    )
    } )
  
  const specs = pds.map( ( item, i ) =>
  {
    return(
    <div key={ i }>
        <img src={`https://backendrentkar.herokuapp.com${item.stype}`} alt={`image${i}`} />
        <p><b>Spec  : </b>{ item.spec }</p>
    </div>)
  } )
  
  const images = pdi.map( ( item, i) =>
  {
    return (
      <div key={ i }>
        <img src={`https://backendrentkar.herokuapp.com${item.image}`} alt={`image${i}`} />
      </div>
    )
  })

  return (
    <div>
	    <h2 style={{textAlign: 'center'}}>Product Detail</h2>
      <p>{ pd.productname }</p>
      <p>{pd.id}</p>
      <p>{ pd._id }</p>
      <div>{ images }</div>
      <p>{ pd.description }</p>
      <h5>Box Content</h5>
      <p>{ box }</p>
      <h5>Pricing</h5>
      <p>{ pricing }</p>
      <h5>Specifications</h5>
      <p>{ specs }</p>
      <p>
        {pdi.slice(1,5).map( ( item ) => {
          return(
            <p>{ item[ 'image' ] }</p>
          )
    })}
      </p>
      </div>
    )
}