interface WidgetProps {
    imagePath: string,
    widgetTitle: string
}
import mapPath from "../assets/Current Location.png"

export const Widget = ({ imagePath = mapPath, widgetTitle = "Current Location" }: WidgetProps) => {
    return (
        <div className="flex justify-center items-center w-full h-full bg-white">
            <div className="w-[261px] h-[165px] relative bg-primary-100 rounded-t-lg rounded-bl-lg">
                <div className="w-[211.07px] h-[33px] absolute top-[15.23px] left-[24.97px] text-primary-700 text-base font-sans font-bold leading-6 tracking-wide">
                    {widgetTitle}
                </div>
                <img className="w-[211.07px] h-[95px] absolute top-[52.10px] left-[24.97px] rounded-md" src={imagePath}/>
            </div>
        </div>
    )
}