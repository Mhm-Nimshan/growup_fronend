import * as React from "react";
import { FormButtonProps } from "./types";

export const FormButton: React.FC<FormButtonProps> = ({
  children,
  type = "button",
  onClick
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="overflow-hidden gap-2.5 self-stretch px-8 py-3.5 w-full text-white capitalize whitespace-nowrap bg-orange-500 rounded-xl max-md:px-5"
    >
      {children}
    </button>
  );
};