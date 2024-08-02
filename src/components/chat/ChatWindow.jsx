import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import ReactMarkdown from 'react-markdown';
import nucleus from '../../assets/nucleus.jpg';

const ChatWindow = ({ messages, onOptionClick }) => {
    const endOfMessagesRef = useRef(null);

    useEffect(() => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="flex-1 overflow-auto p-4 bg-gray-100 h-96 w-full max-w-2xl">
            <div className="flex flex-col">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex mb-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        {message.sender === 'system' && (
                            <Avatar className="mr-2">
                                <AvatarImage src={nucleus} alt="System Avatar" />
                                <AvatarFallback>SA</AvatarFallback>
                            </Avatar>
                        )}
                        <div className={`flex flex-col ${message.sender === 'user' ? 'items-end text-right' : 'items-start text-left'}`}>
                            <div className={`relative max-w-xs ${message.sender === 'system' ? 'bg-blue-100' : 'bg-green-100'} p-2 rounded-lg`}>
                                <ReactMarkdown className="whitespace-pre-wrap">{message.text}</ReactMarkdown>
                                <span className={`absolute bottom-0 ${message.sender === 'system' ? '-left-1 bg-blue-100' : '-right-1 bg-green-100'} w-3 h-3 transform rotate-45`}></span>
                            </div>
                            {message.options && (
                                <div className="flex flex-row gap-2 mt-2">
                                    {message.options.map((option, index) => (
                                        <Button
                                            key={index}
                                            onClick={() => onOptionClick(option)}
                                            className="px-4 py-2 text-white rounded"
                                        >
                                            {option}
                                        </Button>
                                    ))}
                                </div>
                            )}
                        </div>
                        {message.sender === 'user' && (
                            <Avatar className="ml-2">
                                <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
                                <AvatarFallback>UA</AvatarFallback>
                            </Avatar>
                        )}
                    </div>
                ))}
                <div ref={endOfMessagesRef} />
            </div>
        </div>
    );
};

export default ChatWindow;
