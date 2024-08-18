import WordOfTheDay from "./components/wordOfTheDay";
import Search from "./components/Search";

function App() {
	return (
		<div className="bg-slate-500 flex h-screen text-xl">
			<WordOfTheDay />
			<Search />
		</div>
	);
}

export default App;
