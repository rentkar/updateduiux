import React, {useState} from 'react'
import './calculator.css'

function Calculator() {
	var [ val, setval ] = useState( 0 )
	var [product, setproduct] = useState('')
	var i = 13
	var k = 0
	var m, j, a, b, c
	{/*
	if ( i >=30 )
	{
		k = (val * 0.005 * i)
	 
	}
	else if ( i > 14 )
	{
		k = (val * 0.01 * i)
		
	}
	else if ( i >7 )
	{
		k = (val * 0.012 * i)
	}
		else if ( i === 7 ){
		k = Math.ceil(val * 0.00011 * i )*100
	}
	else if(i >3){
		k = (val * 0.015 * i)
	}
		else if ( i === 3 ){
		k = Math.ceil(val * 0.00014 * i )*100
	}	
	else if ( i >=1)
	{
		 k = (val * 0.02 * i)
	}
	
	const list = []

	for ( i = 1; i < 31; i++ )
	{
		if ( i >=30 )
	{
		k = (val * 0.005 * i)
	 
	}
	else if ( i > 13 )
	{
		k = (val * 0.01 * i)
		
	}
	else if ( i >7 )
	{
		k = (val * 0.012 * i)
	}
		else if ( i === 7 ){
		k = Math.ceil(val * 0.00011 * i )*100
	}
	else if(i >3){
		k = (val * 0.015 * i)
	}
		else if ( i === 3 ){
		k = Math.ceil(val * 0.00014 * i )*100
	}	
	else if ( i >=1)
	{
		 k = (val * 0.02 * i)
	}
		list.push( <p>{ i } : { k }</p>)
	}
	
*/}
	
	const list1 = []

	for ( i = 1; i < 190; i++ )
	{
		if ( i >= 180 )
		{
			k = Math.ceil( val * 0.000031 * i ) * 100
		}
		else if ( i >= 90 )
		{
			k = Math.ceil( val * 0.0000365 * i ) * 100
		}
		else if ( i >= 60 )
		{
			k = Math.ceil( val * 0.000043 * i ) * 100
		}
		else if	( i >= 30 )
		{
			k = Math.ceil( val * 0.000046 * i ) * 100
			
		}
		else if ( i > 15 )
		{
			j = i - 14
			for ( a = 1; a <= j; a++ )
			{
				k = c + (val * a * 0.003)
			//	k = m
			}
		
		}
		else if ( i === 14 )
		{
			k = Math.ceil( val * 0.000065 * i ) * 100
			c = k
			}
		else if ( i > 7 )
		{
			j = i - 7
			for ( a = 1; a <= j; a++ )
			{
				k = b + (val * a * 0.004)
			//	k = m
			}
		}
		else if ( i === 7 )
		{
			k = Math.ceil( val * 0.00009 * i ) * 100
			b = k
			
		}
		 else if ( i > 3 )
		{

			j = i - 3
			for ( a = 1; a <= j; a++ )
			{
				k = m + (val * a * 0.0090)
			//	k = m
			}

		}
		else if ( i === 3 )
		{
			k = Math.ceil( val * 0.000167 * ( 2 ) + ( 0.00002 * val ) ) * 100
			m =k
		}
		else if ( i === 2 )
		{
			k = ( val * 0.0167 * i )
		}
		else if ( i === 1 )
		{
			k = ( val * 0.02 * i )
		}
	
		
		list1.push( <p>Rs { k }</p>)
	}


	return (
		<div className='c'>
		<div className = 'calculator'>
			<h3>Rental Calculator</h3>
			<hr />
			<div>
			<div className='entries'>
				
				<p>Enter Product Name </p>
				<input type='text' value={ product }  onChange={ e => setproduct( e.target.value ) } />
			</div>
			<div className='entries'>
				<p>Enter Price of Product </p>
					<input value={ val } onChange={ e => setval( e.target.value ) } />
					</div>
					<hr />
					{/*	<p>
				{list}
		</p> */}
			<div className= 'cal'>
				<p className='duration'>1 Day  </p><p className='price'>{ list1[ 0 ] }</p>
			</div>
			<div className= 'cal'>
			<p className='duration'>3 Days  </p><p className='price'>{ list1[ 2 ] }</p></div>
			<div className= 'cal'><p className='duration'>7 Days  </p><p className='price'> { list1[ 6 ] }</p></div>
			<div className= 'cal'><p className='duration'>1 Month  </p><p className='price'> { list1[ 29 ] }</p></div>
			<div className= 'cal'><p className='duration'>3 Months  </p> <p className='price'> { list1[ 79 ] }</p></div>
			<div className= 'cal'><p className='duration'>6 Months  </p><p className='price'> { list1[ 179 ] }</p></div>
			<div>
				{/*		<p>{ list1 }</p>*/ }
				</div>
			</div>
			</div>
			</div>
		
	)
}

export default Calculator
