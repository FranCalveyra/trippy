import Icon from "../Icon/Icon.tsx";
import {cva} from "class-variance-authority";
import tailwindConfig from "../../../tailwind.config.js"

export interface RoadItemProps {
    variant: 'bus' | 'walk',
    text?: string
}

const roadItemVariant = cva(["flex flex-row justify-center items-center rounded-full px-1.5"],{
    variants:{
        variant:{
            bus:[
                'bg-primary-100', 'text-primary-700', 'fill-primary-700'
            ],
            walk:[
                'bg-secondary-300', 'text-secondary-700', 'fill-secondary-700'
            ],
        },
    },
    defaultVariants:{
        variant:'bus',
    }
})

function getIconColor(variant: RoadItemProps['variant']) {
    switch (variant) {
        case "bus": return tailwindConfig.theme.colors.primary["700"]
        case "walk": return tailwindConfig.theme.colors.secondary["700"]
    }
}

const RoadItem = ({variant, text}: RoadItemProps) => {
    return (
        <div className={roadItemVariant({variant})}>
            <Icon variant={variant} color={getIconColor(variant)}/>
            {text && <div className={"ml-1 text-body font-bold"}>{text}</div>}
        </div>
    )
}

export default RoadItem
