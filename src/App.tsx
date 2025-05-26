
import './App.css'
import Footer from './components/landingpage/Footer';
import Header from './components/landingpage/Header';
import Category from './pages/Landingpage/Category';
import Herosection from './pages/Landingpage/Herosection'
import HowItWork from './pages/Landingpage/HowItWork';
import IntroduceMobile from './pages/Landingpage/IntroduceMobile';
import IntroJoinBusiness from './pages/Landingpage/IntroJoinBusiness';
import LandingReviews from './pages/Landingpage/LandingReviews';
import PopularServices from './pages/Landingpage/PopularServices';
import Recommends from './pages/Landingpage/Recommends';

function App() {
	return (
		<>
			<div className='w-dvw h-full overflow-x-hidden  flex justify-center items-center flex-col lg:p-10 overscroll-y-none overflow-hidden'>
				<Header />
				<Herosection />
				<Category />
				<Recommends />
				<HowItWork />
				<PopularServices />
				<IntroJoinBusiness />
				<LandingReviews />
				<IntroduceMobile />
				<Footer />
			</div>
		</>
	)
}

export default App
