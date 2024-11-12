import Icon, { IconProps } from "../Icon/Icon.tsx";
import { cva } from "class-variance-authority";

const notificationVariant = cva(
    "flex items-start px-4 py-3",
    {
        variants: {
            variant: {
                warning: "h-[150px] px-2 py-6 bg-neutral-white rounded-[13px] justify-start items-start gap-2 inline-flex",
            },
        },
        defaultVariants: {
            variant: "warning",
        },
    }
);

interface NotificationWarningProps {
    iconVariant: IconProps["variant"];
    title: string;
    description: string;
}

export const NotificationWarning = ({ iconVariant, title, description }: NotificationWarningProps) => {
    return (
        <div className={notificationVariant({ variant: "warning" })}>
            <div className="flex justify-start items-start gap-2 inline-flex w-full">
                <div className="w-[38.77px] h-[41.23px] rounded-full flex items-center justify-center">
                    <Icon variant={iconVariant} color="" />
                </div>
                <div className="flex flex-col justify-start items-start w-64 gap-2">
                    <div className="self-stretch h-[22px] text-primary-700 text-base font-bold leading-normal tracking-tight"
                         style={{
                             whiteSpace: "nowrap",
                             overflow: "hidden",
                             textOverflow: "ellipsis",
                             width: "100%",
                         }}>
                        {title}
                    </div>
                    <div className="self-stretch text-primary-700 text-base font-normal leading-normal tracking-tight overflow-hidden"
                         style={{
                             display: "block",
                             WebkitLineClamp: 3,
                             overflow: "hidden",
                             textOverflow: "ellipsis",
                             whiteSpace: "unset",
                             width: "100%",
                         }}>
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotificationWarning;
