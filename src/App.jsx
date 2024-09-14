import { useState } from "react";
import WordOfTheDay from "./components/wordOfTheDay";
import Search from "./components/Search";
import History from "./components/History";
import "./App.css";

function App() {
	const [validWord, setValidWord] = useState();
	//Retrieving data from the search component
	const dataRetrieve = (data) => {
		setValidWord(data.data);
	};

	return (
		<div className="flex flex-col lg:flex-row flex-wrap gap-3 text-xl w-5/6 mx-auto">
			<WordOfTheDay />
			<Search onPullData={dataRetrieve} />
			<History validWord={validWord} />
		</div>
	);
}

export default App;
