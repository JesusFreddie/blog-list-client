import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { UiButton } from "@/shared/ui/ui-button";
import { UiHeader } from "@/shared/ui/ui-header";
import { UiLink } from "@/shared/ui/ui-link";
import { UiPageSpinner } from "@/shared/ui/ui-page-spinner";
import { UiSelectField } from "@/shared/ui/ui-select-field";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { useQuery } from "@tanstack/react-query";
import { Inter } from "next/font/google";

export function HomePage() {

  const { data } = useQuery({
    queryKey: ['session'],
    queryFn: () => authControllerGetSessionInfo()
  })

  return (
    <main
      className={`min-h-screen`}
    >
      <UiHeader right={ <div>{data?.email}</div> }/>
      <UiButton variant="primary">Hey</UiButton>
      <UiButton disabled variant="primary">Hey</UiButton>
      <UiButton variant="secondary">Hey</UiButton>
      <UiButton variant="outlined">Sign Out</UiButton>
      <UiButton disabled variant="outlined">Sign In</UiButton>
      <UiTextField label="Email" inputProps={{ placeholder: "Email" }}/>
      <UiSelectField options={[ {label: "Hello", value: "1"},{label: "Hello", value: "hello"},{label: "Hello", value: "hello"},{label: "Hello", value: "hello"} ]}/>
      <UiLink href={'/'}>Home</UiLink>
      <UiSpinner className="text-teal-600 w-10 h-10"/>
      {/* <UiPageSpinner/> */}
    </main>
  );
}
