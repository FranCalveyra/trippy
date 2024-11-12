import Button from "../Button/Button.tsx";

interface ModalProps {
    title: string,
    message: string,
    primaryValue: string,
    secondaryValue: string
}

export const Modal = ({title, message, primaryValue, secondaryValue}: ModalProps) => {
    return (
        <div className="w-96 h-56 px-8 py-12 bg-neutral-white rounded-modal flex-col justify-center items-center gap-4 inline-flex">
            <div className="text-h3 font-bold justify-start items-center w-full">
                {title}
            </div>
            <div className="text-body w-full">
                {message}
            </div>
            <div className="mix-blend-multiply justify-end w-full items-center gap-4 inline-flex">
                <Button>{primaryValue}</Button>
                <Button variant={"outlined"}>{secondaryValue}</Button>
            </div>
        </div>
    )
}