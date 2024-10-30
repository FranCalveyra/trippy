
interface NotificationProps {
    icon: symbol,
    title: string,
    description: string,
}

export const Notification = ({icon, title, description}: NotificationProps) => {
    return (
        <div className="w-[365px] h-[77.69px] relative">
            <div
                className="w-[365px] h-[78px] px-[3px] left-0 top-0 absolute bg-primary-400 rounded-[20px] justify-center items-center gap-2.5 inline-flex">
                <div className="w-[48.82px] h-[48.82px] relative"></div>
                <div></div>
            </div>
            <div
                className="h-[51.69px] left-[8px] top-[13px] absolute justify-center items-start gap-[9.82px] inline-flex">
                <img className="w-[51.68px] h-[51.69px]" src="https://via.placeholder.com/52x52"
                     {icon}
                />
                <div className="w-[284.82px] h-[49.54px] flex-col justify-center items-start inline-flex">
                    <div
                        className="w-[284.82px] h-[24.77px] text-neutral-black text-base font-bold font-fontFamily leading-normal tracking-tight">
                        {title}
                    </div>
                    <div
                        className="w-[284.82px] h-[24.77px] text-neutral-black text-base font-normal font-['Roboto'] leading-normal tracking-tight">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    )
}