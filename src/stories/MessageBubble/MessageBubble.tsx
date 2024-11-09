import {Input} from "postcss";
import Icon from "../Icon/Icon.tsx";

interface MessageBubbleProps {
    message: string,
    time: string,
    status: 'sent' | 'read'
}
export const MessageBubble = ({ message, time, status }: MessageBubbleProps) => {
    return (
        <div className="w-[333px] h-[312px] justify-end items-start inline-flex">
            <div
                className="pl-4 pr-3 py-3 bg-primary-100 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl border border-neutral-100 flex-col justify-start items-start gap-2 inline-flex">
                <div
                    className="self-stretch text-primary-700 text-base font-normal font-body leading-normal tracking-tight">
                    {message}
                </div>
                <div className="w-[305px] justify-end items-center gap-1 inline-flex">
                    <div className="text-primary-700 text-xs font-normal font-body">{time}</div>{/*fixme: use text-primary-700 because there is no 800 lol*/}
                    <div className="w-4 h-4 relative"></div>
                    <Icon variant={status} color="primary-700"/>
                </div>
            </div>
        </div>
    );
};
