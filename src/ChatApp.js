
// import React, { useState } from 'react';
// import './ChatApp.css'; // Import the CSS file for styling

// function ChatApp() {
//     const [userPrompt, setUserPrompt] = useState('');
//     const [response, setResponse] = useState('');
//     const [loading, setLoading] = useState(false); // State to manage loading spinner

//     const handlePromptChange = (e) => {
//         setUserPrompt(e.target.value);
//     };

//     const sendPrompt = async () => {
//         const body = {
//             userPrompt: userPrompt
//         };

//         setLoading(true); // Set loading to true when request starts

//         const response = await fetch('http://localhost:8080/api/chat/send-chat', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(body),
//         });

//         const data = await response.json();

//         // Assuming your response has a 'message' field and it's an object
//         if (data && data.message) {
//             // If the response message is an object with 'role' and 'content' fields
//             setResponse(data.message.content);
//         } else {
//             // If the response message is a plain string or needs different handling
//             setResponse('No valid message content');
//         }

//         setLoading(false); // Set loading to false once response is received
//     };

//     return (
//         <div>
//             <h1>Chat Application</h1>
//             <div>
//                 <h2>Response:</h2>
//                 {loading ? (
//                     <div className="loader"></div> // Show the loader while loading
//                 ) : (
//                     <p>{response}</p> // Show the response once it is available
//                 )}
//             </div>

//             <footer>
//                 <textarea 
//                     value={userPrompt} 
//                     onChange={handlePromptChange} 
//                     placeholder="Enter your prompt here"
//                 />
//                 <button onClick={sendPrompt}>Send</button>
//             </footer>
//         </div>
//     );
// }

// export default ChatApp;








// import React, { useState } from 'react';
// import './ChatApp.css'; // Import the CSS file for styling

// function ChatApp() {
//     const [userPrompt, setUserPrompt] = useState('');
//     const [response, setResponse] = useState('');
//     const [loading, setLoading] = useState(false); // State to manage loading spinner

//     const handlePromptChange = (e) => {
//         setUserPrompt(e.target.value);
//     };

//     const sendPrompt = async () => {
//         const body = {
//             userPrompt: userPrompt
//         };

//         setLoading(true); // Set loading to true when request starts

//         const response = await fetch('http://localhost:8080/api/chat/send-chat', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(body),
//         });

//         const data = await response.json();

//         // Assuming your response has a 'message' field and it's an object
//         if (data && data.message) {
//             // If the response message is an object with 'role' and 'content' fields
//             setResponse(data.message.content);
//         } else {
//             // If the response message is a plain string or needs different handling
//             setResponse('No valid message content');
//         }

//         setLoading(false); // Set loading to false once response is received
//     };

//     return (
//         <div id="chat-application">
//             <h1>ChatApplication</h1>
//             <div id="response-section">
//                 <h2>Response:</h2>
//                 {loading ? (
//                     <div className="loader"></div> // Show the loader while loading
//                 ) : (
//                     <p>{response}</p> // Show the response once it is available
//                 )}
//             </div>

//             <footer>
//                 <textarea 
//                     value={userPrompt} 
//                     onChange={handlePromptChange} 
//                     placeholder="Enter your prompt here"
//                 />
//                 <button onClick={sendPrompt}>Send</button>
//             </footer>
//         </div>
//     );
// }

// export default ChatApp;



import React, { useState } from 'react';
import './ChatApp.css'; // Import the CSS file for styling


function ChatApp() {
    const [userPrompt, setUserPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false); // State to manage loading spinner

    const handlePromptChange = (e) => {
        setUserPrompt(e.target.value);
    };

    const sendPrompt = async () => {
        const body = { userPrompt: userPrompt };

        setLoading(true); // Set loading to true when request starts

        const response = await fetch('http://localhost:8080/api/chat/send-chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        const data = await response.json();

        // Assuming your response has a 'message' field and it's an object
        if (data && data.message) {
            setResponse(data.message.content);
        } else {
            setResponse('No valid message content');
        }

        setLoading(false); // Set loading to false once response is received
    };

    return (
        <div className="container-fluid mt-2">
            <h1>ChatApplication</h1>
            <div className="d-flex justify-content-center mt-3 a">
                <div className="search">
                    <input
                        className="search_input"
                        type="text"
                        value={userPrompt}
                        onChange={handlePromptChange}
                        placeholder="Enter your prompt here"
                    />
                    <button className="search_icon" onClick={sendPrompt}>
                        <i className="fa fa-paper-plane"></i>
                    </button>
                </div>
            </div>
            <div id="response-section">
                {loading ? (
                    <div className="loader"></div> // Show the loader while loading
                ) : (
                    <p>{response}</p> // Show the response once it is available
                )}
            </div>
        </div>
    );
}

export default ChatApp;
