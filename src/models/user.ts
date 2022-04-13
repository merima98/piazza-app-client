export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type UserSlice = {
  user: User[];
};
