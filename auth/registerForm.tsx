import * as React from "react";
import { InputField } from "./InputField";
import { FormButton } from "./FormButton";

export const RegisterForm: React.FC = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div className="flex overflow-hidden flex-col pb-56 bg-stone-50 max-md:pb-24">
      <div className="overflow-hidden px-16 py-3 w-full text-3xl font-bold text-white bg-orange-500 max-md:px-5 max-md:max-w-full">
        Affiliate Dropshipping Platform
      </div>
      <div className="flex overflow-hidden gap-2.5 items-center self-center px-12 pt-10 pb-8 mt-40 max-w-full bg-white rounded-[30px] shadow-[1px_1px_1px_rgba(0,0,0,0.15)] w-[380px] max-md:px-5 max-md:mt-10">
        <form onSubmit={handleSubmit} className="flex flex-col self-stretch my-auto min-w-[240px] w-[280px]">
          <div className="text-5xl font-bold text-orange-500 max-md:text-4xl">
            Register
          </div>
          <div className="flex flex-col mt-9 w-full">
            <div className="flex flex-col w-full">
              <div className="text-lg font-semibold text-orange-400">
                Join Our Affiliate Network!
              </div>
              <div className="mt-1.5 text-sm font-medium leading-5 opacity-80 text-stone-900">
                Create an account to start earning commissions.
              </div>
            </div>
            <div className="flex flex-col mt-8 w-full">
              <div className="flex flex-col w-full">
                <InputField
                  label="Email Address"
                  type="email"
                  placeholder="Enter Email Address"
                  value={formData.email}
                  onChange={handleChange('email')}
                />
                <div className="mt-5">
                  <InputField
                    label="Password"
                    type="password"
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={handleChange('password')}
                  />
                </div>
                <div className="mt-5">
                  <InputField
                    label="Confirm Password"
                    type="password"
                    placeholder="Re-enter Password"
                    value={formData.confirmPassword}
                    onChange={handleChange('confirmPassword')}
                  />
                </div>
              </div>
              <div className="flex flex-col mt-5 w-full text-sm font-medium">
                <FormButton type="submit">Continue</FormButton>
                <div className="mt-5 text-center text-orange-500 opacity-80">
                  Already have an account?{" "}
                  <a href="/login" className="text-orange-500" tabIndex={0}>Login here</a>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};