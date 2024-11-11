import Icon from "../Icon/Icon.tsx";
import {cva} from "class-variance-authority";

type MessageBubbleProps = {
    message: string;
    time: string;
    status: 'sent' | 'read';
    variant?: 'outgoing' | 'incoming';
};

const messageBubbleVariant = cva("w-[210px] justify-start items-start inline-flex min-h-[70px]", {
    variants: {
        variant: {
            outgoing: [
                'bg-primary-100',
                'rounded-tl-3xl',
                'rounded-bl-3xl',
                'rounded-br-3xl',
            ],
            incoming: [
                'bg-neutral-100',
                'rounded-tr-3xl',
                'rounded-bl-3xl',
                'rounded-br-3xl',
            ],
        },
    },
    defaultVariants: {
        variant: 'outgoing',
    },
});

export const MessageBubble = ({ message, time, status, variant}: MessageBubbleProps) => {
    return (
        <div className={`${messageBubbleVariant({ variant })} max-w-[333px] min-w-[210px] w-auto p-4 flex flex-col gap-2 border border-neutral-400`}>
            <div className="self-stretch text-primary-700 text-base font-normal font-body leading-normal break-words">
                {message}
            </div>
            <div className="flex justify-end items-center gap-1 mt-auto ml-auto">
                <div className="text-primary-800 font-normal font-body ">
                    {time}
                </div>
                {variant === 'outgoing' && (
                    <Icon variant={status} color="primary-700"/>
                )}
            </div>
        </div>
    );
};
