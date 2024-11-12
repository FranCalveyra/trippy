import Icon from "../Icon/Icon.tsx";
import { cva } from "class-variance-authority";

type MessageBubbleProps = {
    message: string;
    time: string;
    status: 'sent' | 'read';
    variant?: 'outgoing' | 'incoming';
    layout?: 'single-line' | 'multi-line';
};

const messageBubbleVariant = cva("justify-start items-start inline-flex min-h-[48px] relative", {
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
        layout: {
            'single-line': 'flex-row items-center',
            'multi-line': 'flex-col',
        },
    },
    defaultVariants: {
        variant: 'outgoing',
        layout: 'single-line',
    },
});

export const MessageBubble = ({ message, time, status, variant, layout }: MessageBubbleProps) => {
    return (
        <div className={`${messageBubbleVariant({
            variant,
            layout
        })} max-w-[333px] min-w-[210px] w-auto pt-4 pb-4 pl-4 pr-4 flex gap-1 border border-neutral-400`}>
            <span className="text-primary-700 font-body break-words">
                {message}
            </span>
                <span
                    className={`text-primary-800 text-xs text-[12px] flex items-center ${layout === 'multi-line' ? 'absolute bottom-2 right-3' : 'ml-auto mt-1' }`}>
                    {time}
                    {variant === 'outgoing' && (
                        <Icon variant={status} color="primary-700"/>
                    )}
                </span>
        </div>
    );
};