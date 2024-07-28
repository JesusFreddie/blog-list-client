import { useSessionQuery } from "@/entities/session";
import { SignOutButton } from "@/features/auth";
import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { UiButton } from "@/shared/ui/ui-button";
import { UiHeader } from "@/shared/ui/ui-header";
import { UiLink } from "@/shared/ui/ui-link";
import { UiSelectField } from "@/shared/ui/ui-select-field";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { useQuery } from "@tanstack/react-query";

export function HomePage() {

  const { data } = useSessionQuery();

  return (
    <main
      className={`min-h-screen`}
    >
      <UiHeader right={ 
        <div className="flex items-center gap-4">
          <p>{data?.name}</p>
          <SignOutButton/>
        </div> 
        }/>

      <UiButton variant="primary">Hey</UiButton>
      <UiButton disabled variant="primary">Hey</UiButton>
      <UiButton variant="secondary">Hey</UiButton>
      <UiButton variant="outlined">Sign Out</UiButton>
      <UiButton disabled variant="outlined">Sign In</UiButton>
      <UiTextField label="Email" inputProps={{ placeholder: "Email" }}/>
      <UiSelectField options={[ {label: "Hello", value: "1"},{label: "Hello", value: "hello"},{label: "Hello", value: "hello"},{label: "Hello", value: "hello"} ]}/>
      <UiLink href={'/'}>Home</UiLink>
      <UiSpinner className="text-teal-600 w-10 h-10"/>
    </main>
  );
}
