import { User } from "./user";

export type Post = {
  dateOfModification: string;
  dateOfCreation: string;
  content: string;
  userId: number;
  image: string;
  id: number;
  user: User;
};
