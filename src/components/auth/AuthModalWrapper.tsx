"use client";

import React, { memo } from "react";
import { MdClose } from "react-icons/md";
import AuthForm from "./AuthForm";
import TermsCheckbox from "./TermsCheckbox";
import SocialLoginButton from "./SocialLoginButton";

interface FormField {
  label: string;
  type: string;
  placeholder: string;
}

interface AuthModalProps {
  title: "Login" | "Sign Up";
  formField: FormField[];
  handelShow: () => void;
  btn1: string;
  btn2: string;
  onSwitchForm: () => void;
}

const AuthModalWrapper = memo(function AuthModalWrapper({
  title,
  formField,
  handelShow,
  btn1,
  btn2,
  onSwitchForm,
}: AuthModalProps) {
  const isLogin = title === "Login";

  return (
    <div
      onClick={(e) => {
    
        if (e.target === e.currentTarget) handelShow();
      }}
      className="fixed inset-0 bg-gray-01/80 flex justify-center items-center z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white 2xl:py-10 2xl:px-[59px] p-5 rounded-3xl max-w-lg w-full relative mx-4 sm:mx-6 md:mx-8"
      >
        <div className="flex justify-between items-center 2xl:mb-6 mb-3">
          <h3 id="auth-modal-title" className="2xl:text-[32px] text-xl text-black font-bold">
            {title}
          </h3>
          <button onClick={handelShow} className="text-gray-600">
            <MdClose size={24} />
          </button>
        </div>

        <form className="space-y-4" key={title}>
          <AuthForm fields={formField} />

          {!isLogin && <TermsCheckbox />}

          {isLogin ? (
            <p className="text-end text-gray-01/60 text-sm mb-6 cursor-pointer">
              Forgot your password?
            </p>
          ) : null}

          <div className="flex flex-col mt-6">
            <button
              type="submit"
              className="bg-orange text-white py-2.5 px-6 2xl:text-lg text-sm rounded-full"
            >
              {btn2}
            </button>

            <span className="text-gray-01/60 text-center my-1.5">or</span>

            <SocialLoginButton label={btn1} icon="/assets/icons/google.svg" onClick={handelShow} />
          </div>

          <p className="text-center 2xl:text-base text-sm text-black mt-4">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span
              onClick={onSwitchForm}
              className="text-orange font-semibold cursor-pointer"
            >
              {isLogin ? "Sign Up" : "Log in"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
});

export default AuthModalWrapper;
