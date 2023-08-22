import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './Utils/ScrollToTop';
import Nav from './components/nav/Nav';
import Home from './pages/Home';
import Market from './pages/Market';
import Bundles from './pages/Bundles';
import Choice from './pages/Choice';
import Wallet from './pages/Wallet';
import Settings from './pages/Settings';
import Support from './pages/Support';
import Footer from './components/footer/Footer';

import './styles/style.scss';


function App() {
	return (
		<div className="App">
			<div className="wrapper">
				Alpha-test 0.01
				<Router>
					<ScrollToTop />
					<Nav />

					<Routes>
						<Route path='/GameGrab/home' element={<Home />} />
						<Route path='/GameGrab/market' element={<Market />} />
						<Route path='/GameGrab/bundles' element={<Bundles />} />
						<Route path='/GameGrab/choice' element={<Choice />} />
						<Route path='/GameGrab/wallet' element={<Wallet />} />
						<Route path='/GameGrab/settings' element={<Settings />} />
						<Route path='/GameGrab/support' element={<Support />} />
					</Routes>

					<Footer />

				</Router>
			</div>
		</div>
	);
}

export default App;
