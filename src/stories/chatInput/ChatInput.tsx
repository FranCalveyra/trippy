import React, { useState } from 'react';

interface ChatInputProps {
    placeholder?: string;
    onSend: (message: string) => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({ placeholder = "Write a message", onSend }) => {
    const [message, setMessage] = useState("");

    const handleSend = () => {
        if (message.trim()) {
            onSend(message);
            setMessage("");
        }
    };

    return (
        <div className="flex items-center px-4 py-2 w-full">
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={placeholder}
                className=" flex-grow bg-transparent text-neutral-900 placeholder-neutral-500 focus:outline-none"
            />
            <button onClick={handleSend} className="ml-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="text-neutral-900 hover:text-neutral-700"
                >
                    <path d="M2 21l21-9-21-9v7l15 2-15 2v7z" />
                </svg>
            </button>
        </div>
    );
};
