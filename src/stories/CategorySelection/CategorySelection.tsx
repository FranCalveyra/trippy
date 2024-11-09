import { useState } from 'react';

export const CategorySelection = () => {
    const options = ['Parent', 'Child', 'Other'];
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
    };

    return (
        <div className="w-full h-full flex flex-col justify-start items-center gap-6">
            <div className="text-lg font-bold text-primary-700 tracking-wide">CATEGORY SELECTION</div>
            <div className="flex flex-col items-center gap-4">
                <div className="w-72 text-center text-primary-700 text-base font-roboto font-normal leading-6 tracking-wide">
                    Which category describes you best?
                </div>
                <div className="w-96 h-12 flex items-center justify-between rounded-full overflow-hidden gap-2">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className={`flex items-center justify-center w-full h-full cursor-pointer px-6 transition-colors duration-200 
                                ${selectedOption === option ? 'bg-primary-100 text-primary-700' : 'bg-neutral-200 text-primary-700'}
                                ${index === 0 ? 'rounded-l-full' : ''} 
                                ${index === options.length - 1 ? 'rounded-r-full' : ''}`}
                            onClick={() => handleOptionClick(option)}
                        >
                            <span className="text-center text-base font-roboto font-normal leading-6 tracking-wide">
                                {option}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
