import { useState } from "react";
import WordOfTheDay from "./components/wordOfTheDay";
import Search from "./components/Search";
import History from "./components/history";

function App() {
	const [validWord, setValidWord] = useState();
	//Retrieving data from the search component
	const dataRetrieve = (data) => {
		setValidWord(data.data);
	};

	return (
		<div className="bg-slate-300 flex h-screen text-xl">
			<WordOfTheDay />
			<Search onPullData={dataRetrieve} />
			<History validWord={validWord} />
		</div>
	);
}

export default App;
