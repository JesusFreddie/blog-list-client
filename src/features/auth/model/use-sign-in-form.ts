import { authControllerSignIn } from "@/shared/api/generated";
import { ROUTE } from "@/shared/constants/routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export function useSignInForm() {
  const router = useRouter();

  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const signInMutation = useMutation({
    mutationFn: authControllerSignIn,
    onSuccess() {
      router.push(ROUTE.HOME)
    }
  });

  const errorMassage = signInMutation.error ? "Sign in faled" : undefined;

  return {
    register,
    handleSubmit: handleSubmit(data => signInMutation.mutate(data)),
    isPending: signInMutation.isPending,
    errorMassage
  }
}