import { Controller } from "react-hook-form";

export const AuthFormField = ({
  name,
  control,
  placeholder,
  type,
  errors,
  classNameContainer = "",
  classNameInput = "",
  rules = {},
}) => {

  return (
    <div className={classNameContainer}>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <input
            {...field}
            className={classNameInput}
            type={type}
            placeholder={placeholder}
          />
        )}
        rules={rules}
      />

      {errors[name] && (
        <span className="text-red-500 text-sm absolute bottom-0">
          {errors[name].message}
        </span>
      )}
    </div>
  );
};
