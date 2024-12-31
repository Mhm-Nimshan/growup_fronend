import * as React from "react";
import { FormButtonProps } from "./types";

export const FormButton: React.FC<FormButtonProps> = ({ children, type }) => {
  return (
    <button
      type={type}
      className="overflow-hidden gap-2.5 self-stretch px-8 py-3.5 w-full text-white capitalize whitespace-nowrap bg-orange-500 rounded-xl max-md:px-5"
    >
      {children}
    </button>
  );
};

import * as React from "react";
import { InputFieldProps } from "./types";

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange
}) => {
  const inputId = `${label.toLowerCase().replace(/\s+/g, '-')}-input`;

  return (
    <div className="flex flex-col w-full">
      <label 
        htmlFor={inputId}
        className="flex gap-1.5 items-center self-start text-sm font-medium text-zinc-600"
      >
        <div className="self-stretch my-auto opacity-70">{label}</div>
      </label>
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="flex overflow-hidden flex-col justify-center items-start px-5 py-3.5 mt-2.5 w-full text-xs bg-white rounded-xl border border-solid border-stone-200 text-stone-900"
        aria-label={label}
      />
    </div>
  );
};