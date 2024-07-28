import { useResetSession } from "@/entities/session";
import { authControllerSingOut } from "@/shared/api/generated"
import { ROUTE } from "@/shared/constants/routes";
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/router"

export function useSignOut() {

  const resetSession = useResetSession();
  const router = useRouter();

  const signOutMutation = useMutation({
    mutationFn: authControllerSingOut,
    async onSuccess() {
      router.push(ROUTE.SIGN_IN);
      resetSession();
    },
  })

  const errorMassage = signOutMutation.error ? "Sign out faled" : undefined

  return {
    isPending: signOutMutation.isPending,
    errorMassage,
    signOut: signOutMutation.mutate
  }
}