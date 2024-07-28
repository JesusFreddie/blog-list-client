import { useSessionQuery } from "@/entities/session";
import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { ROUTE } from "@/shared/constants/routes";
import { UiPageSpinner } from "@/shared/ui/ui-page-spinner";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { PropsWithChildren, ReactElement } from "react";

export function ProtectedPage<P>(Component: (props: P) => ReactElement) {
  return function ProtectedPage(props: PropsWithChildren<P>) {

    const router = useRouter();

    const { isError, isLoading } = useSessionQuery();

    if (isLoading) {
      return <UiPageSpinner/>
    }

    if (isError) {
      router.replace(ROUTE.SIGN_IN);
    }

    return <Component {...props}/>
  }
}