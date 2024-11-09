export interface QuickMessageProps {
    value: string;
}

export const QuickMessage = ({value}: QuickMessageProps) => { //TODO: use InputHTMLAttributes<TextInputProps> for props
    return (
        <div className="w-32 h-12 relative bg-primary-100 text-primary-700 flex justify-center items-center rounded-modal">
            {value}
        </div>
    )
};
