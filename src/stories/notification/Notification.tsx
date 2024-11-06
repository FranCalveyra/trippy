import Icon, { IconProps } from "../Icon/Icon.tsx";
import { cva } from "class-variance-authority";

const notificationVariant = cva(
    "w-[393px] h-[78px] rounded-[20px] border flex items-center px-4 gap-3",
    {
        variants: {
            variant: {
                default: "border-primary-300",
                extended: "h-[307px] border-primary-300 rounded-[25px]",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

interface NotificationProps {
    variant: "default" | "extended";
    iconVariant: IconProps["variant"];
    title: string;
    description: string;
}

export const Notification = ({ variant, iconVariant, title, description }: NotificationProps) => {
    return (
        <div className={notificationVariant({ variant })}>
            <Icon variant={iconVariant} />
            <div className="flex flex-col">
                {variant !== "extended" && (
                    <div className="text-neutral-black text-base font-bold font-['Albert Sans'] leading-normal tracking-tight">
                        {title}
                    </div>
                )}
                <div className="text-neutral-black text-base font-normal font-['Albert Sans'] leading-normal tracking-tight">
                    {description}
                </div>
            </div>
        </div>
    );
};
export default Notification;