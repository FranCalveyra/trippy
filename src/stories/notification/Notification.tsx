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
            <div className="flex items-start gap-3 w-full">
                <div className="flex items-center justify-center w-8 h-8 bg-[#daddfc] rounded-full">
                    <Icon variant={iconVariant} color="s" />
                </div>
                <div className="flex flex-col">
                    <div className="text-[#003a3c] font-bold text-base leading-tight font-['Albert Sans']">
                        {title}
                    </div>
                    <div className="text-[#003a3c] font-normal text-sm leading-tight font-['Roboto']">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notification;
