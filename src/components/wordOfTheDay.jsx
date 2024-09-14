import { useEffect, useState } from "react";
import Result from "./Result";

const WordOfTheDay = () => {
	const [enterWord, setEnterWord] = useState("");
	const [randomWord, setRandomWord] = useState("");
	const [WOTDMMeaning, setWOTDMeaning] = useState("");
	useEffect(() => {
		fetch("https://random-word-api.herokuapp.com/word?length=8")
			.then((res) => res.json())
			.then((data) => setRandomWord(data[0]));
	}, []);

	useEffect(() => {
		fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`)
			.then((response) => response.json())
			.then((data) => {
				setWOTDMeaning(data[0].meanings[0].definitions[0].definition);
			});

		setEnterWord("Failed to Fetch");
		// else .... give error to user
	}, [randomWord]);

	return (
		<div className="w-full lg:w-1/3 flex justify-center order-2 lg:order-1">
			<div className="w-full lg:w-4/5 h-fit p-4 lg:mt-20 bg-white rounded-xl shadow-2xl">
				<h2 className="text-3xl mb-10 p-6">Word of the day</h2>
				<Result
					meaning={WOTDMMeaning}
					returnWord={randomWord}
					enterWord={enterWord}
				/>
			</div>
		</div>
	);
};

export default WordOfTheDay;
