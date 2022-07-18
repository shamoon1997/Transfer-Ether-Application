import './App.css';
import {
	Footer,
	Loader,
	Navbar,
	Services,
	Transaction,
	Welcome,
} from './components';
function App() {
	return (
		<div className="container">
			<div className="first-container">
				<Navbar />
				<Welcome />
			</div>
			<div className="second-container">
				<Transaction />
			</div>
		</div>
	);
}

export default App;
