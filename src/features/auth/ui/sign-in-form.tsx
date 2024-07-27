import { ROUTE } from "@/shared/constants/routes";
import { UiButton } from "@/shared/ui/ui-button";
import { UiLink } from "@/shared/ui/ui-link";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { useSignInForm } from "../model/use-sign-in-form";

export function SignInForm() {
  
  const { handleSubmit, register, isPending, errorMassage } = useSignInForm();

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
        Sign In
      </UiButton>
      <UiLink className="text-center" href={ROUTE.SIGN_UP}>Sign Up</UiLink>
      { errorMassage && <div className="text-rose-500">{errorMassage}</div> }
    </form>
  );
}
