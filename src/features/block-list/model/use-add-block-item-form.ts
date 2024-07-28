import { useAddBlockItemMutation } from "@/entities/block-list";
import { AddBlockItemDto } from "@/shared/api/generated";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

export function useAddBlockItemForm() {
  
  const { handleSubmit, register, watch } = useForm<AddBlockItemDto>();

  const addBlockItemMutation = useAddBlockItemMutation();

  const type = watch("type");

  return {
    handleSubmit: handleSubmit(data => addBlockItemMutation.mutate(data)),
    isLoading: addBlockItemMutation.isPending,
    register,
    type
  }
}