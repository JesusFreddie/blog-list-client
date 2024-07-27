import { ROUTE } from "@/shared/constants/routes";
import { UiButton } from "@/shared/ui/ui-button";
import { UiLink } from "@/shared/ui/ui-link";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { useSignUpForm } from "../model/use-sign-up-form";

export function SignUpForm() {
  
  const { handleSubmit, register, isPending, errorMassage } = useSignUpForm();

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={handleSubmit}
    >
      <UiTextField
        label="Email"
        inputProps={{
          placeholder: "Email...",
          type: "email",
          ...register("email", { required: true }),
        }}
      />
      <UiTextField
        label="Name"
        inputProps={{
          placeholder: "User Name...",
          ...register("name", { required: true }),
        }}
      />
      <UiTextField
        label="Password"
        inputProps={{
          placeholder: "Password...",
          type: "password",
          ...register("password", { required: true }),
        }}
      />
      <UiButton
        disabled={isPending}
        type="submit"
        variant="primary"
      >
        Sign Up
      </UiButton>
      <UiLink className="text-center" href={ROUTE.SIGN_IN}>Sign In</UiLink>
      { errorMassage && <div className="text-rose-500">{errorMassage}</div> }
    </form>
  );
}
