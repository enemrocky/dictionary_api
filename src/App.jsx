import { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [word, setWord] = useState("");
	const [meaning, setMeaning] = useState("");

	useEffect(() => {
		fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(
			(response) =>
				response
					.json()
					.then(
						(data) =>
							setMeaning(
								data[0].meanings[0].definitions[0].definition
							),
						setWord(data[0].word)
					)
		);
	}, [word, meaning]);

	const nameChangeHandler = (e) => {
		setWord(e.target.value);
	};

	return (
		<div className="w-1/2">
			<form className="flex bg-red-500 flex-col">
				<label htmlFor="#">search word</label>
				<input
					className="p-3"
					type="text"
					placeholder="enter word"
					onChange={nameChangeHandler}
				/>
			</form>
			<div className="w-100 p-4 bg-green-600">
				<div>{word}</div>
				<div>{meaning}</div>
			</div>
		</div>
	);
}

export default App;
