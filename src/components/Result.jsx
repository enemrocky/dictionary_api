import PropTypes from "prop-types";

const Result = ({ returnWord, meaning, enterWord }) => {
	return (
		<div>
			{returnWord.length > 0 ? (
				<div className="flex flex-col gap-4 px-6 pb-12 -mt-4 bg-white rounded-b-xl">
					<div className="flex gap-2 capitalize text-2xl">
						{returnWord}
					</div>
					<div>
						<p className="text-slate-400 mb-2">Meaning:</p>
						<div>{meaning}</div>
					</div>
				</div>
			) : (
				<p className="text-red-600 px-6 pb-8 -mt-4  bg-white rounded-b-xl">
					{enterWord}
				</p>
			)}
		</div>
	);
};

Result.propTypes = {
	returnWord: PropTypes.string,
	meaning: PropTypes.string,
	enterWord: PropTypes.string,
};

export default Result;
