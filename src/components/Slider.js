import React, { Component, ReactDOM } from 'react';
import { Fade, Slide } from 'react-slideshow-image';
import logo1 from '../images/slide1.jpg';
import logo2 from '../images/slide2.jpg';
import logo3 from '../images/slide3.jpg';
// import logo4 from '../images/slide3.jpg';
import 'react-slideshow-image/dist/styles.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import Carousel from 'react-bootstrap/Carousel';
// import { Slide } from 'react-slideshow-image';
import './slide/slide.css';
import ProductCard from './ProductCard';
import { Button } from 'semantic-ui-react';

const fadeImages = [logo1, logo2, logo3];

export class Slideshow extends Component {
	render() {
		const Button = (props) => {
			return (
				<Button>
					<i class='fas fa-chevron-left'></i>
				</Button>
			);
		};

		return (
			<div className='slide-container'>
				<Carousel autoPlay infiniteLoop>
					<Carousel.Item>
						<div className='each-fade'>
							<div className='image-container'>
								<img src={fadeImages[0]} />
							</div>
						</div>
					</Carousel.Item>
					<Carousel.Item>
						<div className='each-fade'>
							<div className='image-container'>
								<img src={fadeImages[2]} />
							</div>
						</div>
					</Carousel.Item>
					<Carousel.Item>
						<div className='each-fade'>
							<div className='image-container'>
								<img src={fadeImages[2]} />
							</div>
						</div>
					</Carousel.Item>
				</Carousel>
			</div>
		);
	}
}

export default Slideshow;
