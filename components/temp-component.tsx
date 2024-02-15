import { useState } from 'react';

const TempComponent = () => {
	const [message, setMessage] = useState('');

	const onSendMessage = async () => {
		const response = await browser.runtime.sendMessage('ping');
		setMessage(response);
	};

	return (
		<>
			<button className="rounded bg-slate-800 px-4 py-2 text-white" onClick={onSendMessage}>
				Sending Ping to the Background
			</button>
			<p>Sent back from Background: {message}</p>
		</>
	);
};

export default TempComponent;
