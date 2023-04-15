import React from "react";
import errorIcon from "../../../images/icon-error.svg";

import { ErrorMessage } from "@hookform/error-message";
import {
  FieldErrors,
  UseFormRegisterReturn,
  UseFormWatch,
} from "react-hook-form";

import "./styles.css";

interface FormControlProps {
  type: string;
  label: string;
  errors: FieldErrors;
  registerHandler: UseFormRegisterReturn<string>;
  // watch: UseFormWatch<any>
  value: string
}

const FormControl: React.FC<FormControlProps> = React.memo( ({
  type,
  label,
  errors,
  registerHandler,
  value
}) => {
  const inputFocus = (e: any) => {
    e.target.previousSibling.focus();
  };

  const inputValue = value;

  const { name } = registerHandler;

  return (
    <div className="form-control">
      <input
        className={
          errors[name] ? "form-control__input--error" : "form-control__input"
        }
        type={type}
        {...registerHandler}
      />
      <label onClick={inputFocus} className={inputValue.length !== 0 ? "form-control__label--float" : "form-control__label"}>
        {label}
      </label>
      {errors[name] && (
        <>
          <img
            className="form-control__icon-error"
            src={errorIcon}
            alt="error-icon"
          />
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="form-control-error-description">{message}</p>
            )}
          />
        </>
      )}
    </div>
  );
} );

export default FormControl;
