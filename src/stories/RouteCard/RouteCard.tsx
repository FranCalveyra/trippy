import Icon from "../Icon/Icon.tsx";
import RoadItem, {RoadItemProps} from "../RoadItem/RoadItem.tsx";
import tailwindConfig from "../../../tailwind.config.js"

interface RouteCardProps {
    roadItemPropsArray: RoadItemProps[],
    time: string
    money: string
}

const RouteCard = ({roadItemPropsArray, time, money}: RouteCardProps) => {
    function notLastOne(idx: number) {
        return idx < roadItemPropsArray.length - 1;
    }

    return (
        <div className={"h-24 w-96 py-8 px-4 bg-neutral-white flex flex-col items-stretch justify-center gap-4"}>
            <div className={"flex flex-row gap-1 overflow-x-auto overflow-y-hidden shrink-0 no-scrollbar"}>
                {roadItemPropsArray.map((props, idx) => (
                    <>
                        <RoadItem key={`Road Item ${crypto.randomUUID()}`} {...props}/>
                        <div className={"shrink-0"}>
                            {notLastOne(idx) &&
                                <Icon variant={'arrow'} color={tailwindConfig.theme.colors.primary["700"]}/>}
                        </div>
                    </>
                ))}
            </div>
            <div className={"text-body font-bold text-primary-700"}>{time} - {money}</div>
        </div>
    )
}

export default RouteCard
