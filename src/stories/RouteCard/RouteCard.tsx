import Icon, {IconProps} from "../Icon/Icon.tsx";
import RoadItem, {RoadItemProps} from "../RoadItem/RoadItem.tsx";

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
        <div className={"h-24 w-96 p-8 bg-primary-200 rounded-route flex flex-col items-stretch justify-center gap-2"}>
            <div className={"flex flex-row gap-1"}>
                {roadItemPropsArray.map((props, idx) => (
                    <>
                        <RoadItem key={`Road Item ${crypto.randomUUID()}`} {...props}/>
                        {notLastOne(idx) && <Icon variant={'arrow'}/>}
                    </>
                ))}
            </div>
            <div className={"text-body font-bold"}>{time} - {money}</div>
        </div>
    )
}

export default RouteCard
