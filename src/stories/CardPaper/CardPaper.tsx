import React from "react";

interface CardPaperProps {
    text: string,
    children: React.ReactElement[]
}

const CardPaper = ({text, children}: CardPaperProps) => {
    return (
        <div
            className={"bg-neutral-white pt-4 w-full flex flex-col items-center rounded-t-button text-primary-700 shadow"}>
            <div className="w-12 h-[0px] border-2 border-[#adb5bd] rounded-2xl"></div>
            <div className={"text-h3 font-bold mb-8 my-6 ml-12 w-full"}>{text}</div>
            <div className={"outline-2 divide-y divide-neutral-600 w-full flex flex-col items-stretch px-2"}>
                {children}
            </div>
        </div>
    )
}

export default CardPaper
