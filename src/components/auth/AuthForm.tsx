import React from "react";

interface FormField {
  label: string;
  type: string;
  placeholder: string;
}

function Field({ field, index }: { field: FormField; index: number }) {
  const id = `field-${index}`;
  return (
    <div className="2xl:mb-5 mb-2.5">
      <label
        htmlFor={id}
        className="block 2xl:text-lg text-base mb-2.5 font-semibold text-gray-600"
      >
        {field.label}
      </label>
      <input
        id={id}
        type={field.type}
        placeholder={field.placeholder}
        autoComplete={
          field.type === "password" ? "current-password" : "on"
        }
        className="py-2.5 px-6 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
    </div>
  );
}

const AuthForm = React.memo(function AuthForm({ fields }: { fields: FormField[] }) {
  return (
    <>
      {fields.map((field, index) => (
        <Field key={field.label} field={field} index={index} />
      ))}
    </>
  );
});

export default AuthForm;
