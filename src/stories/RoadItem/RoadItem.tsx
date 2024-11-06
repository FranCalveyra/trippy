import Icon, {IconProps} from "../Icon/Icon.tsx";

export interface RoadItemProps {
    iconVariant: IconProps['variant'],
    text?: string
}

const RoadItem = ({iconVariant, text}: RoadItemProps) => {
    return (
        <div className={"flex flex-row justify-center items-center"}>
            <Icon variant={iconVariant}/>
            {text && <div className={"ml-1 text-body font-bold"}>{text}</div>}
        </div>
    )
}

export default RoadItem
