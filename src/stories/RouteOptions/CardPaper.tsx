import React from "react";

interface RouteOptionsProps {
    text: string,
    children: React.ReactElement[]
}

const CardPaper = ({text, children}: RouteOptionsProps) => {
    return (
        <div className={"bg-neutral-neutral-white p-8 w-[400px] flex flex-col items-center rounded-t-2xl text-primary-700"}>
            <div className={"text-h3 font-bold mb-8 w-full"}>{text}</div>
            <div className={"outline-2 divide-y"}>
                {children}
            </div>
        </div>
    )
}

export default CardPaper
