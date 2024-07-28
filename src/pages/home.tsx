import { useSessionQuery } from "@/entities/session";
import { ToggleBlockingButton } from "@/features/toggle-blocking/ui/toggle.blocking-button";
import { UiHeader } from "@/shared/ui/ui-header";
import { Profile } from "@/widgets/profile";

export function HomePage() {

  const { data } = useSessionQuery();

  return (
    <div
      className={`min-h-screen flex-col`}
    >
      <UiHeader right={
          [
            <Profile/>,
          ]
        }/>
      
      <div className="grid grid-cols-[200px_1fr]">
        <aside className="px-5 pt-4">
          <ToggleBlockingButton/>
        </aside>
        
        <main>
          Block List
        </main>

      </div>

    </div>
  );
}
