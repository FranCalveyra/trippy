export interface TextInputProps {
  /** The field's descriptor, shown above it (e.g. "Password") */
  label: string;
  /** What to show when no text is input */
  placeholder?: string;
  /** The text being input */
  value?: string;
}

/** Primary UI component for user interaction */
export const TextInput = ({
  label,
  placeholder = "",
  value = ""
}: TextInputProps) => {
  return (
      <div className="w-[371px] h-[57px] pl-[34px] pr-[37px] justify-start items-center inline-flex">
          <div className="w-[371px] h-[57px] bg-[#d7d0fc]/0 rounded-[15px] shadow border border-black"/>
          <div className="self-stretch px-[11px] justify-start items-center gap-2.5 flex">
              <div className="w-[107.04px] h-[19.26px] bg-[#aab2f8] rounded-[25px]"/>
              <div
                  className="text-center text-black text-base font-bold font-['Albert Sans'] leading-normal tracking-tight">Field
                  name
              </div>
          </div>
          <div
              className="w-[310px] text-[#6c757d] text-base font-normal font-['Roboto'] leading-normal tracking-tight">Placeholder
          </div>
      </div>
  );
};
