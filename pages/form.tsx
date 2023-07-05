import { useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  password: string;
  email: string;
}

export default function Forms() {
  const { register, handleSubmit } = useForm<LoginForm>();
  const onVaild = (data: LoginForm) => {
    console.log("하이 베이비");
  };
  const onInbvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  return (
    <form onSubmit={handleSubmit(onVaild)}>
      <input
        {...register("username", {
          required: "Username is required",
          minLength: {
            message: "Your username is too short.",
            value: 5,
          },
        })}
        type="text"
        placeholder="ID"
      />
      <input
        {...register("email", {
          required: "Password is required",
        })}
        placeholder="Email"
      />
      <input
        {...register("password", {
          required: "Email is required",
        })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}
