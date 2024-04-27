export interface UserModel {
  id?: number;
  userName: string;
  firstName: string;
  lastName: string;
  email:string;
  password: string;
  role?: string;
}