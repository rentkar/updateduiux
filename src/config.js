import Axios from 'axios'
	
const API_URL = `https://backendrentkar.herokuapp.com`
const productUrl = `${API_URL}/products`;
const userUrl = `${API_URL}/users`;
const supportUrl = `${API_URL}/support`
const orderreqUrl = `${ API_URL }/orderreq`
const ordersUrl = `${ API_URL }/orders`
const lenderreqUrl = `${API_URL}/lenderreq`

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
    } )
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
      
    } )
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
      phoneNumber: data.phoneNumber,
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


export const fetchSupport = async () =>
{
  try
  {
    const { data } = await Axios.get( supportUrl )
    
    const supports = data.map( ( item ) =>
    ({
      _id: item[ '_id' ],
      resolved: item[ 'resolved' ],
      userId: item[ 'userId' ],
      supporttype: item[ 'supporttype' ],
      statement: item['statement'],
      solution: item[ 'solution' ],
      createdAt: item[ 'createdAt' ],
      updatedAt : item['updatedAt']
    } ) )
    
    console.log( supports )
    return supports
  }
  catch ( error )
  {
    throw error
  }
}

export const fetchOrderReq = async () =>
{
  try
  {
    const {data} =  await Axios.get(orderreqUrl)
    const orderreq = data.map( ( item ) => ( {
      _id: item[ '_id' ],
      status: item[ 'status' ],
      appliedForPOD: item[ 'appliedForPOD' ],
      userId: item[ 'userId' ],
      productId: item[ 'productId' ],
      exp_del: item[ 'exp_del' ],
      exp_pickup: item[ 'exp_pickup' ],
      total_amount: item[ 'total_amount' ],
      payment_received: item[ 'payment_received' ],
      payment_pending: item[ 'payment_pending' ],
      del_address: item['del_address']
    } ) )
    console.log( orderreq )
    return orderreq
   }
  catch ( error )
  {
    throw (error)
  }
}

export const fetchOrderReqById = async ( _id ) =>
{
  try
  {
    
    const { data } = await Axios.get( `${ orderreqUrl }/${ _id }` )

    const orderreq = {
      _id: data._id,
      status: data.status,
      appliedForPOD: data.appliedForPOD,
      userId: data.userId,
      productId: data.productId,
      exp_del: data.exp_del,
      exp_pickup: data.exp_pickup,
      total_amount: data.total_amount,
      payment_received: data.payment_received,
      payment_pending: data.payment_pending,
      del_address: data.del_address,
      houseNumber: data.del_address.houseNumber,
      street: data.del_address.street,
      locality: data.del_address.locality,
      city: data.del_address.city,
      state: data.del_address.state,
      zip: data.del_address.zip,
      requestedOn: data.createdAt,
      updatedOn: data.updatedAt,
      userID: data.userId._id,
      username: data.userId.username,
      phoneNumber: data.userId.phoneNumber,
      product: data.productId.name,
      product_id: data.productId._id,
    }
  
    
    console.log(orderreq)
    return orderreq
  }
  catch ( error )
  {
    throw error;
  }
}

export const fetchOrders = async () =>
{
  try
  {
    const {data} =  await Axios.get(ordersUrl)
    const orders = data.map( ( item ) => ( {
      _id: item[ '_id' ],
      status: item[ 'status' ],
      appliedForPOD: item[ 'appliedForPOD' ],
      userId: item[ 'userId' ],
      productId: item[ 'productId' ],
      exp_del: item[ 'exp_del' ],
      exp_pickup: item[ 'exp_pickup' ],
      total_amount: item[ 'total_amount' ],
      payment_received: item[ 'payment_received' ],
      payment_pending: item[ 'payment_pending' ],
      del_address: item['del_address']
    } ) )
    console.log( orders )
    return orders
   }
  catch ( error )
  {
    throw (error)
  }
}



export const fetchLenderReq = async () =>
{
  try
  {
    const {data} =  await Axios.get(lenderreqUrl)
    const lenderreq = data.map( ( item ) => ( {
      _id: item[ '_id' ],
      productId: item[ 'productId' ],
      status: item[ 'status' ],
      userId: item[ 'userId' ],
      createdAt: item['createdAt']
    } ) )
    console.log( lenderreq )
    return lenderreq
   }
  catch ( error )
  {
    throw (error)
  }
}


// mongodb+srv://rentkar:rentkar890@cluster0.buwsg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority