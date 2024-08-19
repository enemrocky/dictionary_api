import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { RiDeleteBin6Line } from "react-icons/ri";

const History = ({ validWord }) => {
	const [myArr, setMyArr] = useState([]);
	useEffect(() => {
		setMyArr([...myArr, validWord]);
	}, [validWord]);

	const clearHistoryHandler = () => {
		setMyArr([]);
	};

	return (
		<div className=" flex flex-col w-1/5  ms-12">
			<div className="flex justify-between align-middle w-full h-fit p-6 mt-20 pb-6 bg-white rounded-xl shadow-2xl">
				<h1>Your search history</h1>
				<button onClick={clearHistoryHandler}>
					<RiDeleteBin6Line className="text-base" />
				</button>
			</div>
			<ul className="px-6 pb-4 bg-white rounded-b-xl shadow-2xl text-lg -mt-2">
				{myArr.map((word) => (
					<li key={Math.random() * 100}>{word}</li>
				))}
			</ul>
		</div>
	);
};

History.propTypes = {
	validWord: PropTypes.string,
};

export default History;
