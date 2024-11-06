
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
}: TextInputProps) => { //TODO: use InputHTMLAttributes<TextInputProps> for props
  return (
      <div className={"relative"}>
          <label htmlFor={"text"} className={"absolute rounded-2xl -top-3 left-5 bg-primary-300 px-4 font-bold"}>{label}</label>
          <input id={"text"} className={"peer rounded-2xl h-16 w-96 border text-body pl-8"} placeholder={placeholder} value={value}/>
      </div>
  );
};
