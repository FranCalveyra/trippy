import tailwindConfig from "../../../tailwind.config.js"
import {cva} from "class-variance-authority";

interface LocationTagProps {
    locationName: string;
    locationAddress: string;
    variant?: "plain" | "floating"
}

const locationTagVariant = cva(["h-24 flex items-center gap-3 p-4 bg-white"],{
    variants:{
        variant:{
            plain:[
                ''
            ],
            floating:[
                'shadow rounded-modal'
            ],
        },
    },
    defaultVariants:{
        variant:'plain',
    }
})

export const LocationTag = ({ locationName = "", locationAddress = "", variant = "plain" }: LocationTagProps) => {
    return (
        <div className={locationTagVariant({variant})}>
            {/* Icon with colored background */}
            <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill={tailwindConfig.theme.colors.primary["700"]} viewBox="0 0 395.71 395.71" className="w-5 h-5">
                    <g>
                        <path
                            d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,
                            72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,
                            0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,
                            129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,
                            0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,
                            0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"
                        />
                    </g>
                </svg>
            </div>
            <div className="flex flex-col justify-center overflow-hidden">
                <div className="text-primary-700 font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                    {locationName}
                </div>
                <div className="text-primary-700 font-normal whitespace-nowrap overflow-hidden text-ellipsis">
                    {locationAddress}
                </div>
            </div>

        </div>
    );
};
