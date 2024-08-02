import React from 'react';
import Navbar from './components/chat/Navbar';
import ChatContainer from './components/chat/ChatContainer';
import './App.css';

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <Navbar />
      <ChatContainer />
    </div>
  );
};

export default App;
