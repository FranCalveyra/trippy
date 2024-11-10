import Icon, { IconProps } from "../Icon/Icon.tsx";
import { cva } from "class-variance-authority";

const notificationVariant = cva(
    "flex items-start px-4 py-3",
    {
        variants: {
            variant: {
                default: "w-full max-w-[393px] h-auto border-b border-neutral-600 items-center",
                warning: "h-[150px] px-2 py-6 bg-white rounded-[13px] justify-start items-start gap-2 inline-flex border",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

interface NotificationProps {
    variant: "default" | "warning";
    iconVariant: IconProps["variant"];
    title: string;
    description: string;
}

export const Notification = ({ variant, iconVariant, title, description }: NotificationProps) => {
    return (
        <div className={notificationVariant({ variant })}>
            <div className={`flex ${variant === "warning" ? "justify-start items-start gap-2 inline-flex w-full" : "items-start gap-3 w-full"}`}>
                <div className={`${variant === "warning" ? "w-[38.77px] h-[41.23px] bg-status-warning/50 rounded-full flex items-center justify-center"
                    : "flex items-center justify-center w-8 h-8 bg-secondary-200 rounded-full"}`}>
                    <Icon variant={iconVariant} color="" />
                </div>

                <div className={`${variant === "warning" ? "flex flex-col justify-start items-start w-64 gap-2" : "flex flex-col"}`}>
                    <div className={`${variant === "warning" ? "self-stretch h-[22px] text-primary-700 text-base font-bold leading-normal tracking-tight"
                        : "max-w-[393px] text-primary-700 font-bold text-base leading-tight truncate overflow-hidden whitespace-nowrap text-ellipsis"}`}>
                        {title}
                    </div>

                    <div className={`${variant === "warning" ? "self-stretch text-primary-700 text-base font-normal leading-normal tracking-tight"
                        : "max-w-[393px] text-primary-700 font-normal text-sm leading-tight truncate overflow-hidden whitespace-nowrap text-ellipsis"}`}>
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notification;
