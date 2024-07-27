import { authControllerSignUp } from "@/shared/api/generated";
import { ROUTE } from "@/shared/constants/routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export function useSignUpForm() {
  const router = useRouter();

  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
    name: string;
  }>();

  const signUpMutation = useMutation({
    mutationFn: authControllerSignUp,
    onSuccess() {
      router.push(ROUTE.HOME)
    }
  });

  const errorMassage = signUpMutation.error ? "Sign up faled" : undefined;

  return {
    register,
    handleSubmit: handleSubmit(data => signUpMutation.mutate(data)),
    isPending: signUpMutation.isPending,
    errorMassage
  }
}