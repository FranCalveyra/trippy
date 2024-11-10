import React from "react";

interface CardPaperProps {
    text: string,
    children: React.ReactElement[]
}

const CardPaper = ({text, children}: CardPaperProps) => {
    return (
        <div className={"bg-white py-8 w-[400px] flex flex-col items-center rounded-t-2xl text-primary-700 shadow"}>
            <div className={"text-h3 font-bold mb-8 ml-12 w-full"}>{text}</div>
            <div className={"outline-2 divide-y divide-neutral-600 w-full flex flex-col items-stretch px-2"}>
                {children}
            </div>
        </div>
    )
}

export default CardPaper
