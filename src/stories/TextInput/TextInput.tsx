import {useState} from "react";


export interface TextInputProps {
  /** The field's descriptor, shown above it (e.g. "Password") */
  label: string;
  /** What to show when no text is input */
  placeholder?: string;
}


export const TextInput = ({
  label,
  placeholder = "",
}: TextInputProps) => { //TODO: use InputHTMLAttributes<TextInputProps> for props
    const [value, setValue] = useState("")

    function onTextChange(event) {
        setValue(event.target.value)
    }

    return (
      <div className={"relative"}>
          <label htmlFor={"text"} className={"absolute rounded-2xl -top-3 left-5 bg-primary-100 px-4 font-bold text-primary-700"}>{label}</label>
          <input
              id={"text"}
              className={"peer rounded-2xl h-16 w-96 bg-neutral-200 text-body pl-8 focus:outline-primary-100"}
              placeholder={placeholder}
              value={value}
              onChange={onTextChange}
          />
      </div>
  );
};
