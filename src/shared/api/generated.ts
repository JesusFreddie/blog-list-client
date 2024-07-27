/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * Api Blog-List
 * OpenAPI spec version: 1.0
 */
import { createInstance } from "./api-instance";
import type { BodyType } from "./api-instance";
export type BlockListControllerGetListParams = {
  q?: string;
};

export type AddBlockItemDtoType =
  (typeof AddBlockItemDtoType)[keyof typeof AddBlockItemDtoType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AddBlockItemDtoType = {
  KeyWord: "KeyWord",
  Website: "Website",
} as const;

export interface AddBlockItemDto {
  data: string;
  type: AddBlockItemDtoType;
}

export type BlockItemDtoType =
  (typeof BlockItemDtoType)[keyof typeof BlockItemDtoType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BlockItemDtoType = {
  KeyWord: "KeyWord",
  Website: "Website",
} as const;

export interface BlockItemDto {
  blockListId: number;
  craetedAt: string;
  data: string;
  id: number;
  type: BlockItemDtoType;
}

export interface BlockListDto {
  id: number;
  items: BlockItemDto[];
  ownerId: number;
}

export interface PatchAccountDto {
  isBlockingEnabled?: boolean;
}

export interface AccountDto {
  id: number;
  isBlockingEnabled: boolean;
  ownerId: number;
}

export interface GetSessionInfoDto {
  email: string;
  id: number;
}

export interface SignInBodyDto {
  email: string;
  password: string;
}

export interface SignUpBodyDto {
  email: string;
  name: string;
  password: string;
}

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

export const appControllerGetHello = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>({ url: `/`, method: "GET" }, options);
};

export const authControllerSignUp = (
  signUpBodyDto: BodyType<SignUpBodyDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    {
      url: `/auth/sign-up`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: signUpBodyDto,
    },
    options,
  );
};

export const authControllerSignIn = (
  signInBodyDto: BodyType<SignInBodyDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    {
      url: `/auth/sign-in`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: signInBodyDto,
    },
    options,
  );
};

export const authControllerSingOut = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    { url: `/auth/sign-out`, method: "POST" },
    options,
  );
};

export const authControllerGetSessionInfo = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<GetSessionInfoDto>(
    { url: `/auth/session`, method: "GET" },
    options,
  );
};

export const accountControllerGetAccount = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<AccountDto>(
    { url: `/account`, method: "GET" },
    options,
  );
};

export const accountControllerPatchAccount = (
  patchAccountDto: BodyType<PatchAccountDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<PatchAccountDto>(
    {
      url: `/account`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: patchAccountDto,
    },
    options,
  );
};

export const blockListControllerGetList = (
  params?: BlockListControllerGetListParams,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<BlockListDto>(
    { url: `/block-list`, method: "GET", params },
    options,
  );
};

export const blockListControllerAddBlockListItem = (
  addBlockItemDto: BodyType<AddBlockItemDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<BlockItemDto>(
    {
      url: `/block-list/item`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: addBlockItemDto,
    },
    options,
  );
};

export const blockListControllerRemoveBlockItem = (
  id: number,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<BlockItemDto>(
    { url: `/block-list/item/${id}`, method: "DELETE" },
    options,
  );
};

export type AppControllerGetHelloResult = NonNullable<
  Awaited<ReturnType<typeof appControllerGetHello>>
>;
export type AuthControllerSignUpResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSignUp>>
>;
export type AuthControllerSignInResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSignIn>>
>;
export type AuthControllerSingOutResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSingOut>>
>;
export type AuthControllerGetSessionInfoResult = NonNullable<
  Awaited<ReturnType<typeof authControllerGetSessionInfo>>
>;
export type AccountControllerGetAccountResult = NonNullable<
  Awaited<ReturnType<typeof accountControllerGetAccount>>
>;
export type AccountControllerPatchAccountResult = NonNullable<
  Awaited<ReturnType<typeof accountControllerPatchAccount>>
>;
export type BlockListControllerGetListResult = NonNullable<
  Awaited<ReturnType<typeof blockListControllerGetList>>
>;
export type BlockListControllerAddBlockListItemResult = NonNullable<
  Awaited<ReturnType<typeof blockListControllerAddBlockListItem>>
>;
export type BlockListControllerRemoveBlockItemResult = NonNullable<
  Awaited<ReturnType<typeof blockListControllerRemoveBlockItem>>
>;
