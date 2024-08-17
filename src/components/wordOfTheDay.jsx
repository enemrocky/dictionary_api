import { useEffect, useState } from "react";
import Result from "./Result";

const WordOfTheDay = () => {
	const [enterWord, setEnterWord] = useState("");
	const [randomWord, setRandomWord] = useState("");
	const [WOTDMMeaning, setWOTDMeaning] = useState("");
	useEffect(() => {
		fetch("https://random-word-api.herokuapp.com/word")
			.then((res) => res.json())
			.then((data) => setRandomWord(data));
	}, []);

	useEffect(() => {
		fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`)
			.then((response) => response.json())
			.then((data) => {
				setWOTDMeaning(data[0].meanings[0].definitions[0].definition);
			})
			.catch((error) => console.log(error));

		setEnterWord("Enter A Word");
		// else .... give error to user
	}, [randomWord]);

	return (
		<div className=" bg-white w-screen h-screen flex  justify-center">
			<div className="w-1/3 mt-20">
				<Result
					meaning={WOTDMMeaning}
					word={randomWord}
					enterWord={enterWord}
				/>
			</div>
		</div>
	);
};

export default WordOfTheDay;
