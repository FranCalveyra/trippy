import  { useState } from 'react';

export const CategorySelection = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const options = ['Parent', 'Child', 'Other'];

    const handleOptionClick = (option: string) => {
        setSelectedOption(selectedOption === option ? "" : option);
    };

    return (
        <div className="w-full h-full flex flex-col justify-start items-center gap-6">
            <div className="w-72 text-center text-black text-base font-roboto font-normal leading-6 tracking-wide">
                Which category describes you best?
            </div>
            <div className="w-84 h-10 relative rounded-full border border-black flex items-center overflow-hidden">
                {options.map((option, index) => (
                    <div
                        key={index}
                        className={`flex items-center justify-center w-1/3 h-full cursor-pointer px-4 ${selectedOption === option ? 'bg-secondary-500 text-white' : 'bg-white text-black'} ${index < options.length - 1 ? 'border-r border-black' : ''}`}
                        onClick={() => handleOptionClick(option)}
                    >
                        {selectedOption === option && (
                            <span className="mr-2 text-white">✔</span>
                        )}
                        <span className="text-center text-base font-roboto font-normal leading-6 tracking-wide">
                            {option}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};
