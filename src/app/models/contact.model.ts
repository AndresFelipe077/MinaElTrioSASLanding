export interface ContactModel {
  id?: number;
  full_name: string;
  email: string;
  message: string;
  phone?: string;

  created_at?: Date;
  updated_at?: Date;
}