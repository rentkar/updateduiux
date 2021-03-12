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
      description: item[ 'description' ],

      box: item['box'].map( ( i) =>
      ({
        content : i['content']
      } ) ),
      p: item[ 'pricing' ],
      box: item['box'].map( ( i) =>
      ({
        content : i['content']
      } ) ),
      p: item[ 'pricing' ],
      pricing: item[ 'pricing' ].map( ( i ) => ( {
        price: i[ 'price' ],
        duration: i[ 'duration' ],
      }))
    } ),
    )
    console.log(modifiedData)

    return modifiedData
	}
	catch ( error ){
    throw error;
  }
  

}

export const fetchUserDetail = async () => {
	try{
		const API_URL = `http://localhost:5000`
		const userUrl = `${API_URL}/users/`;
		const response = await Axios.get(userUrl);
		const { data } = response;
	const modifiedData = data.map(( item ) => ( {
      name: item[ 'username' ],
      gender: item[ 'gender' ],
      dob: item[ 'dob' ],
      phone: item['phoneNumber']
      
    } ),
    )
    console.log(modifiedData)

    return modifiedData
	}
	catch ( error ){
    throw error;
  }
  

}