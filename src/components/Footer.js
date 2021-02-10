// import React, { Component } from 'react'
// import logo from '../images/logo.png';
// import './footer.css';
// export class Footer extends Component {
//     render() {
//         return (
//             <div className='feet'>
//                 <div className='foot'>
//                     <div className='line1'>
//                         <div>
//                             <img src={logo}></img>
//                         </div>
//                         <div className='navv'>
//                             <div>
//                                 <a href='#'>POLICIES</a>
//                             </div>
//                             <div>
//                                 <h4>|</h4>
//                             </div>
//                             <div>
//                                 <a href='#'> ABOUT US</a>
//                             </div>
//                             <div>
//                                 <h4>|</h4>
//                             </div>
//                             <div>
//                                 <a href='#'> OUR BENEFITS</a>
//                             </div>
//                             <div>
//                                 <h4>|</h4>
//                             </div>
//                             <div>
//                                 <a href='#'> FAQ</a>
//                             </div>
//                             <div>
//                                 <h4>|</h4>
//                             </div>
//                             <div>
//                                 <a href='#'> BLOG</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='line2'>
//                         <p>
//                             Rentkar - Switch to share serves a trusted peer to peer rental platform where you can sublease your underutilized items aorund the city and earn at an ease. Your favorite musical instrument your father's favorite camera or your brother's beloved gaming console is now just a few clicks away. Our mission is to alleviate the impact of overconsumption and assist our consumers to occupy a brighter lifestyle and explore to the core
//                         </p>
//                     </div>
//                     <div className='line3'>
//                         <div className='physical'>
//                             <div>
//                                 <h4>CONTACT US</h4>
//                             </div>
//                             <div className='phone'>
//                                 <div>
//                                     <h3><i class="far fa-envelope"></i> rentkar.enquiry.com</h3>
//                                 </div>
//                                 <div>
//                                     <h3><i class="fas fa-mobile-alt"></i> 9999988888</h3>
//                                 </div>
//                             </div>

//                         </div>
//                         <div className='social'>
//                             <div>
//                                 <h4>FOLLOW US ON</h4>
//                             </div>
//                             <div className='media'>
//                                 <div>
//                                     <a><i class="fab fa-instagram"></i></a>
//                                 </div>
//                                 <div>
//                                     <a><i class="fab fa-twitter"></i></a>
//                                 </div>
//                                 <div>
//                                     <a><i class="fab fa-youtube"></i></a>
//                                 </div>
//                                 <div>
//                                     <a><i class="fab fa-facebook-f"></i></a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Footer

import React, { Component } from 'react'
import logo from '../images/logo.png';
import './footer.css';
import Navv from './Navv';
import Collapsible from './Collapsible';

export class Footer extends Component {
    render() {
        return (
            <div className='feet'>
                <div className='foot'>
                    <div className='toplines'>
                        <div className='line1'>
                            <div>
                                <img src={logo}></img>
                            </div>
                            <Navv />
                            <Collapsible />
                        </div>
                        <div className='line2'>
                            <p>
                                Rentkar - Switch to share serves a trusted peer to peer rental platform where you can sublease your underutilized items aorund the city and earn at an ease. Your favorite musical instrument your father's favorite camera or your brother's beloved gaming console is now just a few clicks away. Our mission is to alleviate the impact of overconsumption and assist our consumers to occupy a brighter lifestyle and explore to the core
                            </p>
                        </div>
                    </div>
                    <div className='line3'>
                        <div className='physical'>
                            <div>
                                <h4>CONTACT US</h4>
                            </div>
                            <div className='contact'>
                                <div>
                                    <i class="far fa-envelope" ></i><h3>rentkar.enquiry.com</h3>
                                </div>
                                <div>
                                    <i class="fas fa-mobile-alt"></i><h3>9999988888</h3>
                                </div>
                            </div>
                        </div>
                        <div className='social'>
                            <div>
                                <h4>FOLLOW US ON</h4>
                            </div>
                            <div className='media'>
                                <div>
                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                </div>
                                <div>
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                </div>
                                <div>
                                    <a href="#"><i class="fab fa-youtube"></i></a>
                                </div>
                                <div>
                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p>Quantum Rental Solutions Pvt. Ltd.</p>
                </div>
            </div>
        )
    }
}

export default Footer