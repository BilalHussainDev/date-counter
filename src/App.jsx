import { useEffect, useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	const date = new Date();
	date.setDate(date.getDate() + count);

	const handleChange = (e) => {
		let val = e.target.value;
		if (isFinite(val)) setCount(+val);
	};

	return (
		<>
			<div>
				<h1>Date Counter</h1>
				<p>Enter days to jump</p>
				<button onClick={() => setCount((c) => c - 1)}>-</button>
				<input type="text" value={count} onChange={handleChange} />
				<button onClick={() => setCount((c) => c + 1)}>+</button>
			</div>

			<p>
				<span>
					{count == 0 && `Today is `}
					{count > 0 && `${count} days from today is `}
					{count < 0 && `${Math.abs(count)} days ago was `}
				</span>
				<span>{date.toDateString()}</span>
			</p>

			{count !== 0 && (
				<div>
					<button onClick={() => setCount(0)}>Reset</button>
				</div>
			)}
		</>
	);
}

export default App;
