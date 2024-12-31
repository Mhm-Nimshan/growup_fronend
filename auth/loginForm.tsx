import * as React from "react";
import { InputField } from "./InputField";
import { FormButton } from "./FormButton";

export const LoginForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex overflow-hidden flex-col pb-60 bg-stone-50 max-md:pb-24">
      <div className="overflow-hidden px-16 py-3 w-full text-3xl font-bold text-white bg-orange-500 max-md:px-5 max-md:max-w-full">
        Affiliate Dropshipping Platform
      </div>
      <div className="flex overflow-hidden gap-2.5 items-center self-center px-12 pt-10 pb-8 mt-48 max-w-full bg-white rounded-[30px] shadow-[1px_1px_1px_rgba(0,0,0,0.15)] w-[380px] max-md:px-5 max-md:mt-10">
        <form onSubmit={handleSubmit} className="flex flex-col self-stretch my-auto min-w-[240px] w-[280px]">
          <h1 className="text-5xl font-bold text-orange-500 max-md:text-4xl">Login</h1>
          <div className="flex flex-col mt-9 w-full">
            <div className="flex flex-col w-full">
              <div className="text-lg font-semibold text-orange-400">Welcome Back!</div>
              <div className="mt-1.5 text-sm font-medium leading-5 opacity-80 text-stone-900">
                Log in to access your dashboard and manage your account.
              </div>
            </div>
            <div className="flex flex-col mt-8 w-full">
              <div className="flex flex-col w-full">
                <InputField
                  label="Email Address"
                  type="email"
                  placeholder="Enter Email Address"
                  id="email"
                />
                <div className="flex flex-col mt-5 w-full">
                  <InputField
                    label="Password"
                    type="password"
                    placeholder="Enter Password"
                    id="password"
                  />
                  <button
                    type="button"
                    className="self-end mt-2.5 text-sm italic font-medium text-center text-orange-500 opacity-80"
                  >
                    Forget Password?
                  </button>
                </div>
              </div>
              <div className="flex flex-col mt-5 w-full text-sm font-medium">
                <FormButton type="submit">Login</FormButton>
                <div className="mt-5 text-center text-orange-500 opacity-80">
                  Don't have an account?{" "}
                  <button type="button" className="text-orange-500">
                    Register here
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};