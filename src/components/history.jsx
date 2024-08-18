import PropTypes from "prop-types";

const History = ({ validWord }) => {
	const myArr = [];
	myArr.push(validWord);
	return (
		<div className=" flex justify-center">
			<div className="w-full h-fit p-4 mt-20 bg-white rounded-xl shadow-2xl ms-12">
				Your search history {myArr[0]}
			</div>
		</div>
	);
};

History.propTypes = {
	validWord: PropTypes.string,
};

export default History;
