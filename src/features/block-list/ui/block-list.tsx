import { UiTextField } from "@/shared/ui/ui-text-field";
import { useBlockItems } from "../model/use-block-items";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import { BlockItem } from "./block-item";
import clsx from "clsx";

export function BlockList({ className } : { className?: string }) {

  const { isLoading, items, setQ, q } = useBlockItems();

  return (
    <div>
      <UiTextField
        className={clsx("mb-2", className)}
        label="search" 
        inputProps={{ value: q, onChange: e => setQ(e.target.value) }}
        />

        <div className="rounded-xl bg-slate-100/50 px-10 py-6">
          {
            isLoading ? <UiSpinner className="text-teal-600 w-10 h-10 mx-auto"/>
            : items.map(item => <BlockItem key={item.id} {...item}/>)
          }
        </div>
    </div>
  )

}