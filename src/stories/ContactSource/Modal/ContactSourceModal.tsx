import {ContactSource} from "../ContactSource.tsx";

interface ContactSourceModalProps {
    sources: {picturePath: string, sourceName: string}[]
}

export const ContactSourceModal = ({sources = []}: ContactSourceModalProps) => {
    return (
        <div className="w-auto h-auto px-7 py-6 flex flex-col justify-start items-start gap-1.5 bg-[#DADDFC] rounded-t-[17.58px]">
            <div className="grid grid-cols-4 gap-2.5 w-full">
                {sources.length > 0 ? sources.map(s => (
                    <div key={s.sourceName} className="w-14 h-14 flex flex-col justify-center items-center">
                        <ContactSource picturePath={s.picturePath} sourceName={s.sourceName}/>
                    </div>
                )) : null}
            </div>
        </div>
    )
}