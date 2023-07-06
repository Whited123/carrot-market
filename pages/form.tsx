import { useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  password: string;
  email: string;
}

export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();
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
          validate: {
            notGmail: (value) =>
              !value.includes("@gmail.com") || "Gmail은 출입불가요",
          },
        })}
        type="text"
        placeholder="ID"
      />
      <input
        {...register("email", {
          required: "Password is required",
        })}
        type="email"
        placeholder="Email"
      />
      {errors.email?.message}
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
