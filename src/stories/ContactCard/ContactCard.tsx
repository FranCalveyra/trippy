interface ContactCardProps {
    name: string;
    message: string;
    imageUrl: string;
}

export const ContactCard = ({ name, message, imageUrl }: ContactCardProps) => {
    return (
        <div className="w-[365px] h-[78px] bg-neutral-white rounded flex items-center gap-3 p-3 shadow-sm relative">
            <img className="w-[52px] h-[52px] rounded-full" src={imageUrl} alt={`${name}'s avatar`} />
            <div className="flex flex-col">
                <div className="text-[#075e54] font-bold text-base">{name}</div>
                <div className="text-[#4a4a4a] font-normal text-sm">{message}</div>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%]" />
        </div>
    );
};
