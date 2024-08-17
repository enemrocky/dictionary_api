import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import "./App.css";
import WordOfTheDay from "./components/wordOfTheDay";

function App() {
	const [word, setWord] = useState("");
	const [meaning, setMeaning] = useState("");
	const [partOfSpeech, setPartOfSpeech] = useState("");
	const [enterWord, setEnterWord] = useState("");

	const nameChangeHandler = (e) => {
		setWord(e.target.value);
	};

	// use state to set if the word entered is valid(error) inside the seacrh handler on click if word is empty give error

	const searchHandler = (e) => {
		e.preventDefault();
		fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
			.then((response) => response.json())
			.then((data) => {
				setPartOfSpeech(data[0].meanings[1].partOfSpeech);
				setMeaning(data[0].meanings[0].definitions[0].definition);
			})
			.catch((error) => console.log(error));
		setEnterWord("Enter A Word");

		// else .... give error to user
	};

	// to see history add every valid word to an array and loop through the array for history

	return (
		<div className=" bg-slate-500 w-screen h-screen flex  justify-center">
			<div className="w-1/3 mt-20">
				<form className="flex bg-white flex-col rounded-xl pb-12 p-6 gap-8">
					<h1 className="text-3xl">Search word</h1>
					<div className="flex w-full bg-white rounded-lg border-2">
						<input
							className="rounded-s-lg p-3 w-full outline-none"
							type="text"
							placeholder="enter word"
							onChange={nameChangeHandler}
						/>
						<button
							type="submit"
							className="pe-4"
							onClick={searchHandler}>
							<IoIosSearch />
						</button>
						{/* button on click sets the word variable */}
					</div>
				</form>
				{word.length > 0 ? (
					<div className="flex flex-col gap-4 px-6 pb-12 -mt-4 bg-white rounded-b-xl">
						<div className="flex gap-2 capitalize">
							{word}:{" "}
							<p className="text-slate-400 lowercase">
								{partOfSpeech}
							</p>
						</div>

						<div>
							<p className="text-slate-400">Meaning:</p>
							<div>{meaning}</div>
						</div>
					</div>
				) : (
					<p className="text-red-600 px-6 pb-8 -mt-4  bg-white rounded-b-xl">
						{enterWord}
					</p>
				)}
			</div>
			<WordOfTheDay />
		</div>
	);
}

export default App;
