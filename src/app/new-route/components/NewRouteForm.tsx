"use client";

import { PropsWithChildren, useActionState } from "react";
import { createRouteAction } from "../create-route.action";

export function NewRouteForm(props: PropsWithChildren) {
  // useActionState receives the function that will communicate with server (createRouteAction in this case)
  //its first argument (state) is the return of the server function, and the second param (formAction) is the function itself
  const [state, formAction] = useActionState<
    { error?: string; success?: boolean } | null,
    FormData
  >(createRouteAction, null);
  return (
    <form action={formAction}>
      {state?.error && (
        <div className="p-4 border rounded text-contrast bg-error">
          {state.error}
        </div>
      )}
      {state?.success && (
        <div className="p-4 border rounded text-contrast bg-success">
          Rota criada com sucesso!
        </div>
      )}
      {props.children}
    </form>
  );
}
