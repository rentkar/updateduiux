import Axios from 'axios'
import Address from './components/Address/Address';
	
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
    price: item['price'],
    img: item[ 'images' ][ 0 ][ 'image' ],
    images: item['images'].map( ( i) =>
      ({
        image : i['image']
      } ) ),
    description: item[ 'description' ],
    category: item[ 'category' ],
    subcategory: item[ 'subcategory' ],
    limitedStock: item[ 'limitedStock' ],
    quantity: item[ 'quantity' ],
    featured: item[ 'featured' ],
    
    box: item[ 'box' ].map( ( i ) =>
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
      phone: item[ 'phoneNumber' ], 
      lender: item[ 'lender' ],
      verified: item[ 'verified' ],
      _id: item[ '_id' ],
      email: item[ 'email' ],
      image: item[ 'image' ],
      doctype: item[ 'document' ][ 'doctype' ],
      doccopy: item['document']['doccopy']
      
    } ),
    )
    console.log(data)
    console.log(userData)

    return userData
	}
	catch ( error ){
    throw error;
  }
  

}

export const fetchUserDetail = async ( _id ) =>
{
  try {   
    const { data } = await Axios.get( `${ userUrl }/${ _id }` )
    const userdetailData = { 
      name: data.username,
      verified: data.verified,
      _id: data._id,
      dob: data.dob,
      email: data.email,
      lender: data.lender,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      image: data.image,
      gender: data.gender,
      doctype: data.document.doctype,
      doccopy: data.document.doccopy
    }
    
    console.log(userdetailData)
    return userdetailData
  }
  catch ( error )
  {
    throw error;
  }
}


export const fetchUserAddressDetail = async (_id) =>
{
  try
  {
    const { data } = await Axios.get( `${ userUrl }/${ _id }` )
    const addresses = data[ 'addresses' ].map( ( item ) => ( {
      type: item[ 'type' ],
      address : item[ 'address' ],
    }))
    console.log(addresses)
    return addresses
  }
  catch ( error )
  {
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
      price: data.price,
      id: data.id,
      box: b,
      category: data.category,
      subcategory: data.subcategory,
      limitedStock: data.limitedStock,
      featured: data.featured,
      quantity: data.quantity
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