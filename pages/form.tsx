import { useForm } from "react-hook-form";

export default function Forms() {
  const { register, handleSubmit } = useForm();
  const onVaild = () => {
    console.log("하이 베이비");
  };
  return (
    <form onSubmit={handleSubmit(onVaild)}>
      <input
        {...register("username", {
          required: true,
        })}
        type="text"
        placeholder="ID"
      />
      <input
        {...register("email", {
          required: true,
        })}
        placeholder="Email"
      />
      <input
        {...register("password", {
          required: true,
        })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}
