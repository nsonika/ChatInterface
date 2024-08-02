import React, { useState } from 'react';
import ChatWindow from './ChatWindow';
import MessageInput from './MessageInput';

const ChatContainer = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: 'Welcome to Nucleus AI! I can help you with various queries. How can I assist you today?', sender: 'system', options: ['Learn about services', 'Get started'] }
    ]);

    const addMessage = (text) => {
        const newMessage = { id: messages.length + 1, text, sender: 'user' };
        setMessages([...messages, newMessage]);

        setTimeout(() => {
            let responseText;
            let options = [];

            switch (text.toLowerCase()) {
                case 'learn about services':
                    responseText = 'We offer advanced AI solutions for various industries, including **agriculture**, **finance**, and **technology**. Is there something specific you would like to know more about?';
                    options = ['Agriculture solutions', 'Other services'];
                    break;
                case 'get started':
                    responseText = 'To get started with our tools, visit our [**sign-up page**](https://www.withnucleus/sign-up) for a demo or contact our sales team. Would you like to see more information or contact options?';
                    options = ['Sign-up page', 'Contact options'];
                    break;
                case 'agriculture solutions':
                    responseText = 'Our agriculture solutions optimize farming practices with AI to improve productivity and manage resources efficiently. Would you like **more details** or to **set up a demo**?';
                    options = ['More details', 'Set up a demo'];
                    break;
                case 'other services':
                    responseText = 'We offer AI solutions in various areas like **finance** and **technology**. Let me know if you want more details about any specific service.';
                    options = [];
                    break;
                case 'sign-up page':
                    responseText = 'You can sign up for a demo by visiting [**this link**](https://www.withnucleus.ai/sign-up).';
                    options = [];
                    break;
                case 'contact options':
                    responseText = 'You can reach out to our sales team for more information or personalized assistance.';
                    options = [];
                    break;
                case 'more details':
                    responseText = 'For more details, please visit our [**website**](https://www.withnucleus.ai/) or contact our support team.';
                    options = [];
                    break;
                case 'set up a demo':
                    responseText = 'You can schedule a demo by visiting [**our scheduling page**](https://www.withnucleus.ai/schedule).';
                    options = [];
                    break;
                default:
                    responseText = `I’m not sure how to respond to "${text}". Could you please choose one of the options?`;
                    options = ['Learn about services', 'Get started'];
            }

            const response = { id: messages.length + 2, text: responseText, sender: 'system', options };
            setMessages(prevMessages => [...prevMessages, response]);
        }, 1000);
    };

    const handleOptionClick = (option) => {
        addMessage(option);
    };

    return (
        <div className="mt-12 w-full max-w-2xl">
            <ChatWindow messages={messages} onOptionClick={handleOptionClick} />
            <MessageInput onSend={addMessage} />
        </div>
    );
};

export default ChatContainer;
