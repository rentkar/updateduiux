import React, {Component } from 'react'
import Axios from 'axios'

const API_URL = `https://backendrentkar.herokuapp.com`
const productUrl = `${ API_URL }/products/`;
const userUrl = `${ API_URL }/users/`;
const id = '6030aadff281c722b8cb2a8c'

export class Testt extends Component{
    

  async productHandler ()
  {
    const response = await Axios.get( productUrl );
    const { data } = response;
    console.log( "App -> products", data )
    console.log( "App -> product name", data[ 0 ].name )
    console.log( "App -> price", data[ 0 ].pricing[ 0 ].price )
    console.log( "App -> duration", data[ 0 ].pricing[ 0 ].duration )
    console.log( "App -> price", data[ 0 ].pricing[ 1 ].price )
    console.log( "App -> duration", data[ 0 ].pricing[ 1 ].duration )
    console.log( "App -> price", data[ 0 ].pricing[ 2 ].price )
    console.log( "App -> duration", data[ 0 ].pricing[ 2 ].duration )
    console.log( "App -> price", data[ 0 ].pricing[ 3 ].price )
    console.log( "App -> duration", data[ 0 ].pricing[ 3 ].duration )
    console.log( "App -> product's box content", data[ 0 ].box[ 0 ].content )
    console.log( "App -> product's box content", data[ 0 ].box[ 1 ].content )
    console.log( "App -> product name", data[ 1 ].name )
    console.log( "App -> price", data[ 1 ].pricing[ 0 ].price )
    console.log( "App -> duration", data[ 1 ].pricing[ 0 ].duration )
    console.log( "App -> desc", data[ 1 ].description )
    console.log( "App -> desc", data[ 0].description )
    console.log( "App -> product's box content", data[ 1 ].box[ 0 ].content )
    console.log( "App -> product's box content", data[ 0 ].adOns[ 0 ].name )

    const modifiedData = data.map( ( item ) => ( {
      productName: item[ 'name' ],
      _id : item['_id'],
      id: item[ 'id' ],
      b: item[ 'box' ],
      description: item['description'],

      box: item[ 'box' ].map( ( i ) =>
      ( {
        content: i[ 'content' ]
        
      } ) ),
      
      p: item[ 'pricing' ],
      pricing: item[ 'pricing' ].map( ( i ) => ( {
        price: i[ 'price' ],
        duration: i[ 'duration' ],
        
      } ) )
    } ),
    )
    console.log( modifiedData )
    console.log( modifiedData[ 0 ] )
  
  }
    
  async userHandler ()
  {
    const response = await Axios.get( userUrl );
    const { data } = response;
    console.log( "App -> users", data )
    console.log( "App -> user name", data[ 0 ].username )
    console.log( "App -> email", data[ 0 ].email )
    console.log( "App -> dob", data[ 0 ].dob )
    console.log( "App -> lender", data[ 0 ].lender )
    console.log( "App -> gender", data[ 0 ].gender )
    console.log( "App -> Phone Number", data[ 0 ].phoneNumber )
    console.log( "App -> Addresses", data[ 0 ].addresses )
    console.log( "App -> Address Type  ", data[ 0 ].addresses[0].type )
    console.log( "App -> Address ", data[ 0 ].addresses[0].address )

  }

  async productdetailhandler ()
  {
    const url = `${ productUrl }/${id}`
    const { data } = await Axios.get( url )
    console.log("App -> product", data.name)
  }

	render ()
	{
		return (
			<div>
				<button className='btn btn-primary'
          onClick={ this.productHandler }> product</button>
        <button className='btn btn-primary'
          onClick={ this.userHandler }> user</button>
        <button className='btn btn-primary'
          onClick={ this.productdetailhandler }> product detail</button>
        <div>
        </div>
			</div>
		)
	}
}

export default Testt



