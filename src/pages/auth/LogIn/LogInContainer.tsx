import { SubmitHandler, useForm } from "react-hook-form";
import Login from "./LogIn";
import { LogInInputs } from "../../../types/auth";

export default function LogInPage() {
  const formLogIn = useForm<LogInInputs>({
    defaultValues: {
      userName: "",
      passWord: "",
    },
  });

  const onSubmit: SubmitHandler<LogInInputs> = (data) => {
    console.log(data);
  };

  return <Login form={formLogIn} onSubmit={onSubmit} />;
}
