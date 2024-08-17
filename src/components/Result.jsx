const Result = ({ word, meaning, enterWord }) => {
	return (
		<div>
			{word.length > 0 ? (
				<div className="flex flex-col gap-4 px-6 pb-12 -mt-4 bg-white rounded-b-xl">
					<div className="flex gap-2 capitalize">{word}</div>

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
	);
};

export default Result;
