export interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  id: string;
}

export interface FormButtonProps {
  children: React.ReactNode;
  type: "button" | "submit";
}

export interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface FormButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}