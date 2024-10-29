
interface ModalProps {
    title: string,
    message: string,
}

export const Modal = ({title, message}: ModalProps) => {
    return (
        <div
            className="w-[366px] h-[197px] px-[153.86px] pt-[83.53px] pb-[78.25px] bg-[#daddfc] rounded-[17.58px] flex-col justify-center items-center gap-2 inline-flex">
            <div className="w-[309.49px] justify-start items-center gap-[8.79px] inline-flex">
                <div className="text-[#212529] text-[26.38px] font-bold font-['Albert Sans'] leading-[29.01px]">
                    {title}
                </div>
            </div>
            <div
                className="w-[310px] h-[51px] text-[#212529] text-sm font-normal font-['Roboto'] leading-[21.10px] tracking-tight">
                {message}
            </div>
            <div className="w-[311.25px] mix-blend-multiply justify-end items-center gap-[13.19px] inline-flex">
                <div
                    className="w-[84.41px] h-[43.08px] px-[17.58px] py-[11.43px] justify-start items-center gap-[8.79px] flex">
                    <div className="w-[84.41px] h-[43.08px] bg-[#4db3b6] rounded-[26.38px]"/>
                    <div
                        className="w-[49.24px] h-[20.22px] text-center text-white text-base font-normal font-['Roboto'] leading-normal tracking-tight">Yes
                    </div>
                </div>
                <div className="w-[84.41px] h-[43.08px] relative">
                    <div
                        className="w-[84.41px] h-[43.08px] left-0 top-0 absolute rounded-[26.38px] border border-[#4db3b6]"/>
                    <div
                        className="w-[57.15px] h-[20.22px] left-[17.58px] top-[11.43px] absolute text-center text-[#4db3b6] text-base font-normal font-['Roboto'] leading-normal tracking-tight">No
                    </div>
                </div>
            </div>
        </div>
    )
}