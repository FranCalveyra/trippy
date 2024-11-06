import Icon, { IconProps } from "../Icon/Icon.tsx";
import { cva } from "class-variance-authority";

const notificationVariant = cva(
    "flex items-start px-4 py-3",
    {
        variants: {
            variant: {
                default: "w-full max-w-[393px] h-auto border-b border-primary-300 items-center",
                warning: "w-[319px] h-[134px] bg-status-warning rounded-[13px] flex flex-col justify-center px-6 gap-1"
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
            {variant === "warning" ? (
                <div className="flex flex-col items-start w-full">
                    <div className="flex items-center gap-2 mb-1">
                        <Icon variant={iconVariant} />
                        <div className="text-neutral-black font-bold font-['Albert Sans'] leading-tight tracking-tight text-sm">
                            {title}
                        </div>
                    </div>
                    <div className="text-neutral-black font-normal font-['Albert Sans'] text-xs leading-normal tracking-tight">
                        {description}
                    </div>
                </div>
            ) : (
                <>
                    <Icon variant={iconVariant} />
                    <div className="flex flex-col w-full">
                        <div className="text-neutral-black font-bold font-['Albert Sans'] leading-normal tracking-tight text-sm md:text-base lg:text-lg">
                            {title}
                        </div>
                        <div className="text-neutral-black font-normal font-['Albert Sans'] leading-normal tracking-tight text-sm md:text-base lg:text-lg break-words">
                            {description}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Notification;
