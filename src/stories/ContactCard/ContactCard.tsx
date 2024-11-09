
interface ContactCardProps {
    name: string;
    message: string;
    imageUrl: string;
}

export const ContactCard = ({ name, message, imageUrl }: ContactCardProps) => {
    return (
        <div className="w-[365px] h-[78px] relative bg-primary-200 rounded-modal flex items-center gap-3 p-3">
            <img className="w-[52px] h-[52px] rounded-full" src={imageUrl} alt={`${name}'s avatar`} />
            <div className="flex flex-col">
                <div className="text-neutral-black font-bold text-body">{name}</div>
                <div className="text-neutral-700 font-normal text-body">{message}</div>
            </div>
        </div>
    );
};
