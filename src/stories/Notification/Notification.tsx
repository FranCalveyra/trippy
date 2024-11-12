import Icon, { IconProps } from "../Icon/Icon.tsx";
import { cva } from "class-variance-authority";

const notificationVariant = cva(
    "flex items-start px-4 py-3",
    {
        variants: {
            variant: {
                default: "w-full max-w-[393px] h-auto items-center ml-7 mr-7 mt-18px mb-18px",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

interface NotificationDefaultProps {
    iconVariant: IconProps["variant"];
    title: string;
    description: string;
}

export const Notification = ({ iconVariant, title, description }: NotificationDefaultProps) => {
    return (
        <div className={notificationVariant({ variant: "default" })}>
            <div className="flex items-start gap-[22.5px] w-full">
                <div className="flex items-center justify-center w-8 h-8 bg-secondary-200 rounded-full">
                    <Icon variant={iconVariant} color="" />
                </div>
                <div className="flex flex-col">
                    <div className="max-w-[320px] text-primary-700 font-bold text-base leading-tight"
                         style={{
                             whiteSpace: "nowrap",
                             overflow: "hidden",
                             textOverflow: "ellipsis",
                             width: "100%",
                         }}>
                        {title}
                    </div>
                    <div className="max-w-[320px] text-primary-700 font-normal text-sm leading-tight"
                         style={{
                             display: "webkit-box",
                             WebkitBoxOrient: "vertical",
                             WebkitLineClamp: 1,
                             overflow: "hidden",
                             textOverflow: "ellipsis",
                             whiteSpace: "nowrap",
                             width: "100%",
                         }}>
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notification;
