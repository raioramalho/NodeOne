import { User } from './user';

export interface AdminProps {
  id?: string;
  name: string;
  last_name: string;
  email: string;
}

export class Admin extends User {}
