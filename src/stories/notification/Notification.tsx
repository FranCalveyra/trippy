import Icon, { IconProps } from "../Icon/Icon.tsx";
import React from "react";

interface NotificationProps {
    iconVariant: IconProps['notificatoins'];
    title: string;
    description: string;
}

export const Notification = ({ iconVariant, title, description }: NotificationProps) => {
    return (
        <div className="w-[365px] h-[78px]  rounded-[20px] border border-primary-300 flex items-center px-4 gap-3">
            <Icon variant={iconVariant}/>
            <div className="flex flex-col">
                <div className="text-neutral-black text-base font-bold font-['Albert Sans'] leading-normal tracking-tight">
                    {title}
                </div>
                <div className="text-neutral-black text-base font-normal font-['Albert Sans'] leading-normal tracking-tight">
                    {description}
                </div>
            </div>
        </div>
    );
};
