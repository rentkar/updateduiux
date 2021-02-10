import React from 'react'
import cust1 from '../images/cust1.png';
import cust2 from '../images/cust2.png';
import { Card } from 'semantic-ui-react';
import './testimonials.css'

export class Testimonials extends React.Component {
    render() {
        return (
            <div>
                <h2>LENDER'S TESTIMONIALS</h2>
                <div className='customer_know'>

                    <Card className='descri'>
                        <div>
                            <img src={cust2}></img>
                        </div>
                        <div className='straight'>

                            <div className='name_rating'>
                                <div >
                                    <h4>Shivam Wadhwa</h4>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>
                                Rentkar is really good!! The quality of the
                                product is brilliant. The service is also
                                spot on. They make sure that the product
                                is delivered as well as picked up on time.
                                Highly recommended..
                            </p>
                        </div>
                    </Card>


                    <Card className='descr'>
                        <div>
                            <img src={cust1}></img>
                        </div>
                        <div className='straight'>

                            <div className='name_rating'>
                                <div >
                                    <h4>Shivam Wadhwa</h4>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>
                                Rentkar is really good!! The quality of the
                                product is brilliant. The service is also
                                spot on. They make sure that the product
                                is delivered as well as picked up on time.
                                Highly recommended..
                            </p>
                        </div>
                    </Card>

                </div>
            </div>)
    }
}
export default Testimonials;