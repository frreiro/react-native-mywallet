import {User} from '../../entities/User';

export interface UserDatabase extends User {
  password: string;
}

export const users: UserDatabase[] = [
  {
    id: 0,
    name: 'Lucas',
    email: 'lucas@lucas.com',
    password: '12345678',
  },
];
