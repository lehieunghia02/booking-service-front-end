
import './App.css'
import Header from './components/landingpage/Header';
import Category from './pages/Landingpage/Category';
import Herosection from './pages/Landingpage/Herosection'
import HowItWork from './pages/Landingpage/HowItWork';
import IntroJoinBusiness from './pages/Landingpage/IntroJoinBusiness';
import LandingReviews from './pages/Landingpage/LandingReviews';
import PopularServices from './pages/Landingpage/PopularServices';
import Recommends from './pages/Landingpage/Recommends';

function App() {
	return (
		<>
			<div className='w-dvw h-full overflow-x-hidden bg-white flex justify-center items-center flex-col'>
				<Header />
				<Herosection />
				<Category />
				<Recommends />
				<HowItWork />
				<PopularServices />
				<IntroJoinBusiness />
				<LandingReviews/>
			</div>
		</>
	)
}

export default App
