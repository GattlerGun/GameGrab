import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import pathnames from './helpers/offsetEnum';
import ScrollToTop from './Utils/ScrollToTop';
import Nav from './components/nav/Nav';
import Home from './pages/Home';
import Market from './pages/Market';
import Bundles from './pages/Bundles';
import Choice from './pages/Choice';
import Wallet from './pages/Wallet';
import Settings from './pages/Settings';
import Footer from './components/footer/Footer';

import './styles/style.scss';

function App() {
	const { pathname } = useLocation();

	useEffect(() => {
		switch (pathname) {
			case pathnames.HOME:
				return <Route path='/' element={<Home />} />
			case pathnames.MARKET:
				return <Route path='/market' element={<Market />} />
			case pathnames.BUNDLES:
				return <Route path='/bundles' element={<Bundles />} />
			case pathnames.CHOICE:
				return <Route path='/choice' element={<Choice />} />
			case pathnames.WALLET:
				return <Route path='/wallet' element={<Wallet />} />
			case pathnames.SETTINGS:
				return <Route path='/settings' element={<Settings />} />
			default: ;
		}
	})
	return (
		<div className="App">
			<div className="wrapper">
				Alpha-test 0.01
				<Router basename="/GameGrab">
					<ScrollToTop />
					<Nav />

					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/market' element={<Market />} />
						<Route path='/bundles' element={<Bundles />} />
						<Route path='/choice' element={<Choice />} />
						<Route path='/wallet' element={<Wallet />} />
						<Route path='/settings' element={<Settings />} />
					</Routes>

					<Footer />

				</Router>
			</div>
		</div>
	);
}

export default App;
