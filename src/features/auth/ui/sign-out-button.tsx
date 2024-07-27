import { UiButton } from "@/shared/ui/ui-button";
import { useSignOut } from "../model/use-sign-out";

export function SignOutButton() {

  const { isPending, signOut } = useSignOut();

  return (
    <UiButton disabled={isPending} variant="secondary" onClick={() => signOut({})}>Sign Out</UiButton>
  )

}