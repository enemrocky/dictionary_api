import { useEffect, useState } from "react";

const WordOfTheDay = () => {
	const [randomWord, setRandomWord] = useState("");
	useEffect(() => {
		fetch("https://random-word-api.herokuapp.com/word")
			.then((res) => res.json())
			.then((data) => setRandomWord(data));
	}, []);

	return <div>{randomWord}</div>;
};

export default WordOfTheDay;
