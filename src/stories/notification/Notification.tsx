import Icon, { IconProps } from "../Icon/Icon.tsx";
import { cva } from "class-variance-authority";

const notificationVariant = cva(
    "w-full max-w-[393px] h-auto flex items-center px-4 gap-3",
    {
        variants: {
            variant: {
                default: "border-b border-primary-300",
                extended: "w-full max-w-[600px] border border-primary-300 rounded-[25px] p-6 flex-col items-start gap-4",
                warning: "w-full max-w-[319px] h-auto bg-status-warning rounded-[13px]"
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
            <Icon variant={iconVariant} />
            <div className="flex flex-col w-full">
                    <div className="text-neutral-black font-bold font-['Albert Sans'] leading-normal tracking-tight text-sm md:text-base lg:text-lg">
                        {title}
                    </div>
                <div className="text-neutral-black font-normal font-['Albert Sans'] leading-normal tracking-tight text-sm md:text-base lg:text-lg break-words">
                    {description}
                </div>
            </div>
        </div>
    );
};

export default Notification;
