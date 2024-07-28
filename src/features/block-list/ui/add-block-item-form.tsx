import { UiSelectField } from "@/shared/ui/ui-select-field";
import { useAddBlockItemForm } from "../model/use-add-block-item-form";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { UiButton } from "@/shared/ui/ui-button";
import { AddBlockItemDtoType } from "@/shared/api/generated";

const typeOptions = [
  { label: "Website", value: AddBlockItemDtoType.Website },
  { label: "KeyWord", value: AddBlockItemDtoType.KeyWord },
];

export function AddBlockItemForm() {
  const { register, handleSubmit, isLoading, type } = useAddBlockItemForm();

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <UiSelectField
        className="grow min-w-[200px]"
        options={typeOptions}
        selectProps={{ ...register("type") }}
      />
      <UiTextField
        className="grow"
        inputProps={{
          placeholder:
            type === "KeyWord" ? "Enter Key World..." : "Enter WebSite...",
          ...register("data"),
        }}
      />
      <UiButton type="submit" disabled={isLoading} variant="primary">
        Add Block Item
      </UiButton>
    </form>
  );
}
