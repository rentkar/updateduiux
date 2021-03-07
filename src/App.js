import React from 'react'
import { ProductProvider } from './components/ProductContext'
import AdminLogin from './components/admin/adminlogin'
import { Head } from './components/Head'
import './App.css'
import { Slideshow } from './components/Slider'
import { Body } from './components/body'
import { Footer } from './components/Footer'
import { Floatnav } from './components/Floatnav'
import { Know_more } from './components/Know_more'
import { Category } from './components/Category'
import { UserDash } from './components/UserDash'
import ProductPage from './components/ProductPage'
import Product from './components/product'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TermsAndConditions from './components/TermsAndConditions'
import DocumentsRequiredForVerification from './components/DocumentsRequiredForVerification'
import ShippingPolicy from './components/ShippingPolicy'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfUse from './components/TermsOfUse'
import AdminDashboard from './components/admin/admindashboard'
import { Payment } from './components/payment'
import Checkout from './components/Checkout'

function App() {
	return (
		<Router>
			<ProductProvider>
				<div className='App'>
				
					<div className='PageContent'>
						<Switch>
		
							<Route
								exact
								path='/'
								render={(props) => (
									<>
										<Floatnav className='floatnav' />
										<Head />
										<Slideshow />
										<Body />
										<Footer />
									</>
								)}
							/>
							
			
							<Route path='/product'>
								<>
								<Floatnav className='floatnav' />
								<Head />
								<ProductPage />
								<Footer />
								</>
							</Route>

							<Route path='/productt'>
								<>
								<Floatnav className='floatnav' />
								<Head />
								<Product />
								<Footer />
								</>
							</Route>

							<Route path='/checkout'>
								<>
								<Floatnav className='floatnav' />
								<Head />
								<Checkout />
								<Footer />
								</>
							</Route>
							<Route path='/payment'
								render={(props) => (
									<Payment />
								)}
								
						/>
	
	
						<Route path='/terms&conditions'>
							<>
							<Floatnav className='floatnav' />
								<Head />
							<TermsAndConditions />
							<Footer />
							</>
						</Route>
							
						<Route path='/documentsrequiredforverification'>
							<>
							<Floatnav className='floatnav' />
								<Head />
							<DocumentsRequiredForVerification />
							<Footer />
							</>
							</Route>
							
						
						<Route path='/termsofuse'>
							<>
							<Floatnav className='floatnav' />
								<Head />
							<TermsOfUse />
							<Footer />
							</>
						</Route>
							
							
						<Route path='/shippingpolicy'>
							<>
							<Floatnav className='floatnav' />
								<Head />
							<ShippingPolicy />
							<Footer />
							</>
							</Route>
							
						
						<Route path='/privacypolicy'>
							<>
							<Floatnav className='floatnav' />
								<Head />
							<PrivacyPolicy />
							<Footer />
							</>
						</Route>
							
						<Route path='/knowmore' render={(props) => <Know_more />}></Route>
						<Route
							path='/category'
							render={(props) => (
								<>
								<Floatnav className='floatnav' />
								<Head />
								<Category
									index={props.location.index}
									index_product={props.location.index_product}
								/>
								<Footer />
								</>
							)}
						/>
	
							<Route path='/mylisting' render={ ( props ) => <UserDash ind={ 2 } />} />
						<Route
							path='/verification'
							render={(props) => <UserDash ind={3} />}
						/>
						<Route path='/settings' render={(props) => <UserDash ind={5} />} />
						<Route path='/support' render={(props) => <UserDash ind={4} />} />
						<Route path='/rentals' render={(props) => <UserDash ind={1} />} />
						<Route
							exacrt path='/home'
							render={(props) => <UserDash ind={-1} />}
						/>
						<Route
							exact
							path='/about'
							render={(props) => <UserDash ind={0} />}
						/>

							<Route path='/adminlogin'><AdminLogin /></Route>
							<Route path='/allproducts/' ><AdminDashboard ind={2} /></Route>
							<Route
								path='/dash/'>
							<AdminDashboard ind={0} />
							</Route>
							<Route path='/allorders/'> <AdminDashboard ind={1} /></Route>
							<Route path='/allusers/'> <AdminDashboard ind={3}  /></Route>
							<Route path='/adminsupport/'> <AdminDashboard ind={5} /></Route>
							<Route path='/alllenders/'> <AdminDashboard ind={4} /></Route>
						</Switch>
						
					</div>
					
	
				</div>
				
			</ProductProvider>

		
		</Router>
	)
}

export default App