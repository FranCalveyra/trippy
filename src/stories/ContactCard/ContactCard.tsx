
interface ContactCardProps {
    name: string;
    message: string;
    imageUrl: string;
}

export const ContactCard = ({ name, message, imageUrl }: ContactCardProps) => {
    return (
        <div className="w-[365px] h-[77.69px] relative">
            <div className="w-[365px] h-[78px] px-[3px] left-0 top-0 absolute bg-blue-100 rounded-[20px] flex items-center gap-2.5">
                <img className="w-[51.68px] h-[51.69px] rounded-full" src={imageUrl} alt={`${name}'s avatar`} />
                <div className="flex flex-col">
                    <div className="text-gray-900 text-base font-bold">{name}</div>
                    <div className="text-gray-700 text-base font-normal">{message}</div>
                </div>
            </div>
        </div>
    );
};
