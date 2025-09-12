export { type ApiError } from "./api.types";

export type Content = {
  title: string;
  description: { text: string }[];
};

export type ContentData = Content[];
