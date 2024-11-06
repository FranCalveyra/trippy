
interface SearchBarProps {
    placeholder: string;
    imageUrl: string;
    onClick: () => void;
}

export const SearchBar = ({ placeholder, imageUrl, onClick }: SearchBarProps) => {
    return (
        <div className="w-[365px] h-[78px] bg-primary-200 rounded-modal flex items-center px-4 gap-3">
            <button onClick={onClick}
                    className="flex items-center justify-center w-[20px] h-[20px] text-neutral-black">
                <div className="flex flex-col space-y-1">
                    <div className="w-[16px] h-[2px] bg-neutral-black"></div>
                    <div className="w-[16px] h-[2px] bg-neutral-black"></div>
                    <div className="w-[16px] h-[2px] bg-neutral-black"></div>
                </div>
            </button>

            <input
                type="text"
                placeholder={placeholder}
                className="text-neutral-black font-normal text-body bg-transparent focus:outline-none flex-grow bg-primary-200"
            />

            <img className="w-[52px] h-[52px] rounded-full ml-auto" src={imageUrl} alt="User avatar"/>
        </div>
    );
};
