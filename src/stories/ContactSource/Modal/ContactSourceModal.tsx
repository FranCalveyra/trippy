import { ContactSource } from "../ContactSource.tsx";

interface ContactSourceModalProps {
    sources: { picturePath: string, sourceName: string }[]
}

export const ContactSourceModal = ({ sources = [] }: ContactSourceModalProps) => {
    return (
        <div className="w-[376px] h-auto px-7 py-6 flex flex-col justify-start items-center gap-4 bg-[#FFFFFF] rounded-t-[17.58px] shadow-lg">
            <div className="text-xl font-bold text-primary-700 tracking-wide text-center mb-4">
                Select contact source
            </div>
            <div className="grid grid-cols-4 gap-4 w-full">
                {sources.length > 0 ? sources.map(source => (
                    <div key={source.sourceName} className="flex flex-col items-center">
                        <ContactSource picturePath={source.picturePath} sourceName={source.sourceName} />
                    </div>
                )) : null}
            </div>
        </div>
    );
};
