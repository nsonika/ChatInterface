import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const MessageInput = ({ onSend }) => {
    const [input, setInput] = useState('');

    const handleSend = () => {
        // Ensure input is not empty before sending
        if (input.trim()) {
            onSend(input);
            setInput('');// Clear the input field after sending the message
        }
    };

    return (
        <div className="flex items-center p-4 border-t bg-gray-100">
            <Avatar className="mr-4">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 mr-4 "
            />
            <Button onClick={handleSend} className="text-white">Send</Button>
        </div>
    );
};

export default MessageInput;
