import Axios from 'axios'
	
const API_URL = `http://localhost:5000`
const productUrl = `${API_URL}/products/`;
const userUrl = `${API_URL}/users/`;


export const fetchProducts = async () => {
	try{
		const { data } = await Axios.get(productUrl);
	const productData = data.map(( item ) => ( {
    productName: item[ 'name' ],
      _id: item['_id'],
      id: item[ 'id' ],
      b: item[ 'box' ],
      description: item[ 'description' ],
      box: item['box'].map( ( i) =>
      ({
        content : i['content']
      } ) ),
      pricing: item[ 'pricing' ].map( ( i ) => ( {
        price: i[ 'price' ],
        duration: i[ 'duration' ],
      }))
    } ),
    )
    console.log(productData )
    return productData 
	}
	catch ( error ){
    throw error;
  }
  

}

export const fetchUsers = async () => {
	try{
		const  { data } = await Axios.get(userUrl);
	const userData = data.map(( item ) => ( {
      name: item[ 'username' ],
      gender: item[ 'gender' ],
      dob: item[ 'dob' ],
      phone: item['phoneNumber']
      
    } ),
    )
    console.log(userData)

    return userData
	}
	catch ( error ){
    throw error;
  }
  

}
export const fetchProductDetail = async (_id) =>
{
  try
  {
    const { data } = await Axios.get( `${ productUrl }/${_id}` )
    
    const productdetailData = data
     console.log(productdetailData.box)
     console.log(productdetailData.box[0])
     return productdetailData
  }
  catch ( error )
  {
    throw error;
  }
}


