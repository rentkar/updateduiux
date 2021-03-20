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
    img: item[ 'images' ][ 0 ][ 'image' ],
    images: item['images'].map( ( i) =>
      ({
        image : i['image']
      } ) ),
      description: item[ 'description' ],
      box: item['box'].map( ( i) =>
      ({
        content: i[ 'content' ],
        image: i['image']
      } ) ),
      pricing: item[ 'pricing' ].map( ( i ) => ( {
        price: i[ 'price' ],
        duration: i[ 'duration' ],
      }))
    } ),
    )
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
    const { data } = await Axios.get( `${ productUrl }/${ _id }` )
    const b = data[ 'box' ].map( ( item ) => ( {
      content: item[ 'content' ],
      image: item['image']
    }))
    const productdetailData = {
      productname: data.name,
      description: data.description,
      _id: data._id,
      id: data.id,
      box: b
    }
    
    console.log(productdetailData)
    return productdetailData
  }
  catch ( error )
  {
    throw error;
  }
}

export const fetchProductBoxDetail = async (_id) =>
{
  try
  {
    const { data } = await Axios.get( `${ productUrl }/${_id}` )
    const box = data[ 'box' ].map( ( item ) => ( {
      content: item[ 'content' ],
      image: item['image']
    }))
     return box
  }
  catch ( error )
  {
    throw error;
  }
}


export const fetchProductImagesDetail = async (_id) =>
{
  try
  {
    const { data } = await Axios.get( `${ productUrl }/${_id}` )
    const Images= data[ 'images' ].map( ( item ) => ( {
      image: item['image']
    }))
     return Images
  }
  catch ( error )
  {
    throw error;
  }
}

export const fetchProductPricingDetail = async (_id) =>
{
  try
  {
    const { data } = await Axios.get( `${ productUrl }/${_id}` )
    const pricing = data[ 'pricing' ].map( ( item ) => ( {
        price: item[ 'price' ],
        duration: item[ 'duration' ],
    }))
    
    return pricing
  }
  catch ( error )
  {
    throw error;
  }
}

export const fetchProductSpecsDetail = async (_id) =>
{
  try
  {
    const { data } = await Axios.get( `${ productUrl }/${_id}` )
    const specs = data[ 'specifications' ].map( ( item ) => ( {
        stype: item[ 'stype' ],
        spec : item[ 'spec' ],
    }))
    
    return specs
  }
  catch ( error )
  {
    throw error;
  }
}