import { ReactNode } from "react"

export type UiHeaderProps = {
  header?: ReactNode;
  form?: ReactNode;
  title: string;
}

export function UiFormPageLayout({ title, form, header } : UiHeaderProps) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      {header}
      <main className="grow flex flex-col pt-24">
        <div className="rounded-xl border border-slate-300 px-14 py-8 pb-16 max-w-[400px] w-full bg-white self-center">
          <h1 className="text-2xl mb-6">{title}</h1>
          {form}
        </div>
      </main>
    </div>
  )
}