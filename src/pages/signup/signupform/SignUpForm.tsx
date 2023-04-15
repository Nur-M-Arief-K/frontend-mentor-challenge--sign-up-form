import React from "react";
import { useForm, UseFormRegisterReturn } from "react-hook-form";
import Form from "../../../components/form/Form";
import FormControl from "../../../components/form/formcontrol/FormControl";
import Button from "../../../components/button/Button";

import "./styles.css";

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const firstNameRegister: UseFormRegisterReturn<"firstName"> = register(
    "firstName",
    { required: "First Name cannot be empty" }
  );
  const lastNameRegister: UseFormRegisterReturn<"lastName"> = register(
    "lastName",
    { required: "Last Name cannot be empty" }
  );
  const emailRegister: UseFormRegisterReturn<"email"> = register("email", {
    required: "Email cannot be empty",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Looks like this is not an email",
    },
  });
  const passwordRegister: UseFormRegisterReturn<"password"> = register(
    "password",
    { required: "password cannot be empty" }
  );

  const registerSubmitHandler = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Form onSubmit={registerSubmitHandler}>
      <FormControl
        registerHandler={firstNameRegister}
        type="text"
        label="First Name"
        errors={errors}
        value={watch("firstName")}
      />
      <FormControl
        registerHandler={lastNameRegister}
        type="text"
        label="Last Name"
        errors={errors}
        value={watch("lastName")}
      />
      <FormControl
        registerHandler={emailRegister}
        type="text"
        label="Email Address"
        errors={errors}
        value={watch("email")}
      />
      <FormControl
        registerHandler={passwordRegister}
        type="password"
        label="Password"
        errors={errors}
        value={watch("password")}
      />
      <Button text="CLAIM YOUR FREE TRIAL" type="submit" />
      <p className="sign-up-form__terms-and-service">
        By clicking the button, you are agreeing to our{" "}
        <span className="sign-up-form__terms-and-service-link">Terms and Services</span>
      </p>
    </Form>
  );
};

export default SignUpForm;
