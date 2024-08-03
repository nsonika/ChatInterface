import React from 'react';
import ChatContainer from './components/chat/ChatContainer';
import './App.css';

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100">
      <ChatContainer />
    </div>
  );
};

export default App;
