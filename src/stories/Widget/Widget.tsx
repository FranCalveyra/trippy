interface WidgetProps {
    imagePath: string,
    widgetTitle: string
}

export const Widget = ({ imagePath, widgetTitle = "Current Location" }: WidgetProps) => {
    return (
        <div className="w-full h-full bg-neutral-white">
            <div className="w-[261px] h-[165px] absolute top-0 left-0 bg-primary-100 rounded-lg"/>
            <div className="w-[211.07px] h-[33px] absolute top-[15.23px] left-[24.97px] text-primary-700
             text-base font-sans font-bold leading-6 tracking-wide">
                {widgetTitle}
            </div>
            <img className="w-[211.07px] h-[95px] absolute top-[52.10px] left-[24.97px] rounded-md"
                 src={!imagePath ? "https://via.placeholder.com/211x95" : imagePath}/>
        </div>
    )
}