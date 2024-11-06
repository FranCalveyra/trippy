import Icon, { IconProps } from "../Icon/Icon.tsx";
import { cva } from "class-variance-authority";

const notificationVariant = cva(
    "w-full max-w-[393px] h-auto px-4 py-3 gap-3",
    {
        variants: {
            variant: {
                default: "border-b border-primary-300 flex items-center",
                warning: "w-full max-w-[600px] bg-status-warning rounded-[13px] p-6 flex flex-col gap-4"
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
                <div className="flex items-start gap-4 w-full">
                    <Icon variant={iconVariant} />
                    <div className="flex flex-col">
                        <div className="text-neutral-black font-bold font-['Albert Sans'] leading-normal tracking-tight text-sm md:text-base lg:text-lg">
                            {title}
                        </div>
                        <div className="text-neutral-black font-normal font-['Albert Sans'] leading-normal tracking-tight text-sm md:text-base lg:text-lg break-words">
                            {description}
                        </div>
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
