import Axios from 'axios'

export const fetchProductDetail = async () => {
	try{
		const API_URL = `http://localhost:5000`
		const productUrl = `${API_URL}/products/`;
		const response = await Axios.get(productUrl);
		const { data } = response;
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
		
	}
	catch ( error ){
    throw error;
  }

}