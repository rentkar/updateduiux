import React from 'react'

export default class Navv extends React.Component {
    render() {
        return (
            <div className='navv'>
                <div>
                    <a href='/terms&conditions'>TERMS & CONDITIONS</a>
                </div>
                <div>
                    <h4>|</h4>
                </div>
                <div>
                    <a href='/shippingpolicy'> SHIPPING POLICY</a>
                </div>
                <div>
                    <h4>|</h4>
                </div>
                <div>
                    <a hreF='/privacypolicy'>PRIVACY POLICY</a>
                </div>
                <div>
                    <h4>|</h4>
                </div>
                <div>
                    <a href='/termsofuse'>TERMS OF USE</a>
                </div>
            </div>
        )
    }
}

