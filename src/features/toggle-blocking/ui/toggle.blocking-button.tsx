import { UiButton } from "@/shared/ui/ui-button";
import { useToggleBlocking } from "../model/use-toggle-blocking";

export function ToggleBlockingButton({}) {

  const { isReady, isBlockingEnabled, isLoading, toggleBlocking } = useToggleBlocking();

  if (!isReady) {
    return null;
  }

  return <UiButton onClick={toggleBlocking} disabled={isLoading} variant={isBlockingEnabled ? "secondary" : "primary"}>
      {isBlockingEnabled ? "Disable Blocking" : "Enabled Blocking"}
    </UiButton>

}