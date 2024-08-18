import PropTypes from "prop-types";
// import { useState } from "react";

const History = ({ validWord }) => {
	const myArr = [];
	myArr.push(validWord);
	return <div>Your search history {myArr[0]}</div>;
};

History.propTypes = {
	validWord: PropTypes.string,
};

export default History;
