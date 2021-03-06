import React from 'react';
import { ChatEngine } from 'react-chat-engine';

export function App() {
	return (
		<ChatEngine
			height='100vh'
			userName='Washim'
			userSecret='123123'
			projectID='004bc86a-5d2f-41ef-bd5c-d8846df41caa'
		/>
	);
}

export default App;