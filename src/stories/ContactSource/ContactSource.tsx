interface ContactSourceProps {
    picturePath: string;
    sourceName: string;
}

export const ContactSource =({picturePath="https://support.discord.com/hc/user_images/PRywUXcqg0v5DD6s7C3LyQ.jpeg", sourceName="Discord"}: ContactSourceProps)=> {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <img alt={""} className="w-11 h-11 rounded-lg" src={picturePath}/>
            <div
                className="w-20 h-3 text-center text-black text-xs font-roboto font-normal leading-4 tracking-wide break-words">
                {sourceName}
            </div>
        </div>
    )
}