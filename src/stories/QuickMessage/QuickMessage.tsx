export interface QuickMessageProps {
    value: string;
    onClick: ()=>void;
}

export const QuickMessage = ({value, onClick}: QuickMessageProps) => {
    return (
        <div className="w-32 relative bg-primary-100 text-primary-700 flex justify-center items-center rounded-modal p-3 break-words whitespace-normal text-center" onClick={onClick}>
            {value}
        </div>
    )
};
