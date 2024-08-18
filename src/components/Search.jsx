import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import Result from "./Result";
import PropTypes from "prop-types";

const Search = ({ onPullData }) => {
	const [word, setWord] = useState("");
	const [returnWord, setReturnWord] = useState("");
	const [meaning, setMeaning] = useState("");
	const [validWord, setValidWord] = useState("");
	const [enterWord, setEnterWord] = useState(""); //Error message

	const nameChangeHandler = (e) => {
		setWord(e.target.value);
	};

	const data = {
		data: validWord,
	};
	onPullData(data); //sending data to App component

	const searchHandler = (e) => {
		e.preventDefault();
		fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
			.then((response) => response.json())
			.then((data) => {
				if (data) setValidWord(word);
				setReturnWord(word);
				setMeaning(data[0].meanings[0].definitions[0].definition);
			});
		setEnterWord("enter a word");
		setWord("");
	};

	return (
		<div className="flex justify-center w-2/5">
			<div className="mt-20 h-fit w-full shadow-xl">
				<form className="flex bg-white flex-col rounded-xl pb-12 p-6 gap-8">
					<h1 className="text-4xl">Search word</h1>
					<div className="flex w-full bg-white rounded-lg border-2">
						<input
							className="rounded-s-lg p-3 w-full outline-none"
							type="text"
							placeholder="enter word"
							onChange={nameChangeHandler}
							value={word}
						/>
						<button
							type="submit"
							className="pe-4"
							onClick={searchHandler}>
							<IoIosSearch />
						</button>
					</div>
				</form>
				<Result
					meaning={meaning}
					enterWord={enterWord}
					returnWord={returnWord}
				/>
			</div>
		</div>
	);
};

Search.propTypes = {
	onPullData: PropTypes.object,
};

export default Search;
