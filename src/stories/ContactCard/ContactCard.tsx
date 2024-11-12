import { useState } from 'react';
import SelectedProfile from "../SelectedProfile/SelectedProfile.tsx";

interface ContactCardProps {
    name: string;
    message: string;
    imageUrl: string;
}

export const ContactCard = ({ name, message, imageUrl }: ContactCardProps) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleImageClick = () => {
        setIsSelected(true);
    };

    return (
        <div className="w-[365px] h-[78px] bg-neutral-white rounded flex items-center gap-3 p-3 shadow-sm relative">
            {isSelected ? (
                <div>
                    <SelectedProfile />
                </div>
            ) : (
                <img
                    className="w-[60px] h-[60px] rounded-full cursor-pointer"
                    src={imageUrl}
                    alt={`${name}'s avatar`}
                    onClick={handleImageClick}
                />
            )}

            <div className="flex flex-col">
                <div className="text-[#075e54] font-bold text-base">{name}</div>
                <div className="text-[#4a4a4a] font-normal text-sm">{message}</div>
            </div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] border-b border-black-800" />
        </div>
    );
};
