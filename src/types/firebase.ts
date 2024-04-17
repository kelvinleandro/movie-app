export interface User {
  uid: string;
  firstName: string;
  lastName: string;
}

export interface UserDocData {
  firstName: string;
  lastName: string;
  moviesId: number[];
}