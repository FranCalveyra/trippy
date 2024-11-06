
interface SearchBarProps {
    placeholder: string;
    imageUrl: string;
}

export const SearchBar = ({ placeholder, imageUrl}: SearchBarProps) => {
    return (
        <div className="w-[365px] h-[78px] bg-primary-200 rounded-modal flex items-center px-4 gap-3">

            <input
                type="text"
                placeholder={placeholder}
                className="text-neutral-black font-normal text-body bg-transparent focus:outline-none flex-grow bg-primary-200"
            />

            <img className="w-[52px] h-[52px] rounded-full ml-auto" src={imageUrl} alt="User avatar"/>
        </div>
    );
};
