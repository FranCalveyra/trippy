import React from 'react';

interface SearchBarProps {
    onArrowClick: () => void;
    onImageClick: () => void;
    placeholder?: string;
    imageUrl?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onArrowClick, onImageClick, placeholder = "Type something...", imageUrl    }) => {
    return (
        <div className="flex items-center bg-primary-100 p-2 rounded-lg">
            <button onClick={onArrowClick} className="mr-2 text-gray-600">
                {/* Left arrow icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <input
                type="text"
                placeholder={placeholder}
                className="flex-grow bg-primary-100 outline-none text-black placeholder-black"
            />
            <button onClick={onImageClick} className="ml-2">
                {/* Profile image */}
                <img
                    src={imageUrl}
                    alt="Profile"
                    className="w-8 h-8 rounded-full object-cover"
                />
            </button>
        </div>
    );
};
