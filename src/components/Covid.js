import React from 'react';
import sanitise from '../images/covid sefty web-03.png';
import hygienic from '../images/covid sefty web-04.png';
import imgcovid from '../images/covid.png';

function Covid() {
	return (
		<div>
			<div className='covid'>
				<div>
					<img src={imgcovid} />
				</div>
				<div className='covid_text'>
					<h4>Safety precaution during COVID-19</h4>
					<p>
						We are taking additional steps and precautionary measures to protect
						our community from COVID-19
					</p>
					<button id='button_knowmore'>Know more</button>
				</div>
				<div className='card'>
					<div className='card1'>
						<img src={sanitise} />
						<div>
							<h5>Sanitised Products</h5>
							<h7 id='alag'>
								Know more <i class='fas fa-chevron-circle-right'></i>
							</h7>
						</div>
					</div>
					<div className='card2'>
						<img src={hygienic} />
						<div>
							<h5>Hygienic deliveries</h5>
							<h7 id='alag'>
								Know more <i class='fas fa-chevron-circle-right'></i>
							</h7>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Covid;
