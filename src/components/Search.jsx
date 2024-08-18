import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import Result from "./Result";
import History from "./history";

const Search = () => {
	const [word, setWord] = useState("");
	const [meaning, setMeaning] = useState("");
	const [validWord, setValidWord] = useState("");
	const [enterWord, setEnterWord] = useState(""); //Error message

	const nameChangeHandler = (e) => {
		setWord(e.target.value);
	};

	// use state to set if the word entered is valid(error) inside the seacrh handler on click if word is empty give error

	const searchHandler = (e) => {
		e.preventDefault();
		fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
			.then((response) => response.json())
			.then((data) => {
				if (data) setValidWord(word);
				setMeaning(data[0].meanings[0].definitions[0].definition);
			});
		setEnterWord("enter a word");
		// else .... give error to user
	};

	// to see history add every valid word to an array and loop through the array for history
	return (
		<div className="flex justify-center w-2/5">
			<div className="mt-20 w-full">
				<form className="flex bg-white flex-col rounded-xl pb-12 p-6 gap-8">
					<h1 className="text-4xl">Search word</h1>
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
				<Result meaning={meaning} enterWord={enterWord} word={word} />
				<History validWord={validWord} />
			</div>
		</div>
	);
};

export default Search;
