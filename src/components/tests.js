import React, {Component } from 'react'
import Axios from 'axios'

export class Testt extends Component{
  
  async productHandler(){
		const API_URL = `http://localhost:5000`
		const productUrl = `${API_URL}/products/`;
		const response = await Axios.get(productUrl);
		const { data } = response;
    console.log( "App -> products", data )
    console.log( "App -> product name", data[ 0 ].name )
    console.log( "App -> price", data[ 0 ].pricing[ 0 ].price )
    console.log( "App -> duration", data[ 0 ].pricing[ 0 ].duration )
    console.log( "App -> price", data[ 0 ].pricing[ 1 ].price )
    console.log( "App -> duration", data[ 0 ].pricing[ 1 ].duration )
    console.log( "App -> price", data[ 0 ].pricing[ 2 ].price )
    console.log( "App -> duration", data[ 0 ].pricing[2].duration )
    console.log( "App -> price", data[ 0 ].pricing[ 3 ].price )
    console.log( "App -> duration", data[ 0 ].pricing[3].duration )
    console.log( "App -> product's box content", data[ 0 ].box[ 0 ].content )
    console.log("App -> product's box content", data[0].box[1].content)
    console.log( "App -> product name", data[ 1 ].name )
    console.log( "App -> price", data[ 1 ].pricing[ 0 ].price )
    console.log( "App -> duration", data[ 1 ].pricing[ 0 ].duration )
    console.log( "App -> product's box content", data[ 1 ].box[ 0 ].content )
    console.log( "App -> product's box content", data[ 0 ].adOns[0].name )

    const modifiedData = data.map(( item ) => ( {
      productName: item[ 'name' ],
      productId: item[ 'id' ],
      b: item[ 'box' ], 
      box: item['box'].map( ( i) =>
      ({
        content : i['content']
      } ) ),
      p: item[ 'pricing' ],
      pricing: item[ 'pricing' ].map( ( i ) => ( {
        price: i[ 'price' ],
        duration: i['duration']
      }))
    } ),
    )
    console.log( modifiedData )
		console.log( modifiedData[ 0 ] )
  }
  
	render ()
	{
		return (
			<div>
				<button className='btn btn-primary'
          onClick={ this.productHandler }> d</button>
        <div>
        </div>
			</div>
		)
	}
}

export default Testt



