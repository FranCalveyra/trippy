import React from "react";
import profile from '../../assets/profile.jfif';
import Icon from "../Icon/Icon.tsx";
import ProfilePicture from "../ProfilePicture/ProfilePicture.tsx";
import { MessageBubble } from "../MessageBubble/MessageBubble.tsx";
import { QuickMessage } from "../QuickMessage/QuickMessage.tsx";
import tailwindConfig from "../../../tailwind.config.js";
import IconButton from "../IconButton/IconButton.tsx";
import {ChatInput} from "../ChatInput/ChatInput.tsx";

export const ChatPage: React.FC = () => {
    /*onSend = {}*/
    return (
        <div className="flex flex-col h-screen w-screen bg-white pt-4 px-4 overflow-hidden">

            <div className="flex items-center mb-4">
                <Icon variant="arrowBack" color={tailwindConfig.theme.colors.primary["700"]} />
                <ProfilePicture imageUrl={profile}  />
                <span className="text-primary-700 text-lg text-h3">Dad</span>
            </div>

            <div className="flex flex-col flex-grow space-y-2 overflow-y-auto mb-4">
                <MessageBubble message="When are you coming home?" time="2:00pm" status="read" variant={"incoming"} />
                <MessageBubble message="In a minute. Why?" time="2:02pm" status="read"  variant={"outgoing"}/>
                <MessageBubble message="Mom's asking. Call me ASAP" time="2:03pm" status="read" variant={"incoming"}/>
                <MessageBubble message="Ok, got it. I'm around the corner" time="2:05pm" status="read" variant={"outgoing"} />
            </div>


            <div className="flex justify-end">
                <IconButton variant="secondary" iconVariant={"groups"} value="Widget"/>
            </div>

            <div className="flex justify-around mb-4">
                <QuickMessage value="Arriving" />
                <QuickMessage value="Ok" />
                <QuickMessage value="Call you back" />
            </div>

            <div className="flex items-center">
                <ChatInput placeholder="Write a message" />
            </div>
        </div>
    );
};

export default ChatPage;
