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
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TermsAndConditions from './components/TermsAndConditions'
import AdminDashboard from './components/admin/admindashboard'

function App() {
	return (
		<Router>
			<Switch>
			<ProductProvider>
				<div className='App'>
					<Switch>
					<div className='PageContent'>
						<Switch>
							<Route
								exact
								path='/'
								render={(props) => (
									<React.Fragment>
										<Floatnav className='floatnav' />
										<Head />
										<Slideshow />
										<Body />
										<Footer />
									</React.Fragment>
								)}
							/>
							
						</Switch>
						<Switch>
							<Route path='/product'>
								<>
								<Floatnav className='floatnav' />
								<Head />
								<ProductPage />
								<Footer />
								</>
							</Route>
						</Switch>
						<Switch>
						<Route path='/terms&conditions'>
							<>
							<Floatnav className='floatnav' />
								<Head />
							<TermsAndConditions />
							<Footer />
							</>
						</Route>
						</Switch>
						
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
						></Route>
						<Route path='/mylisting' render={(props) => <UserDash ind={1} />} />
						<Route
							path='/verification'
							render={(props) => <UserDash ind={2} />}
						/>
						<Route path='/settings' render={(props) => <UserDash ind={4} />} />
						<Route path='/support' render={(props) => <UserDash ind={3} />} />
						<Route path='/rentals' render={(props) => <UserDash ind={5} />} />
						<Route
							exact
							path='/home'
							render={(props) => <UserDash ind={-1} />}
						/>
						<Route
							exact
							path='/about'
							render={(props) => <UserDash ind={0} />}
						/>	
					</div>
				</Switch>		
				</div>
			</ProductProvider>
			</Switch>
			<Switch>
				<Route path='/adminlogin'><AdminLogin /></Route>
				<Route path='/admindashboard'><AdminDashboard /></Route>
			</Switch>
		</Router>
	)
}

export default App
