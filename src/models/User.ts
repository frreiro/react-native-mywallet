import {InferType} from 'yup';
import {loginSchema} from '../app/schemas/singinInputSchema';
import {signupSchema} from '../app/schemas/signupInputSchema';
import {User as UserSchema} from '../realm/schemas/User';

export interface User extends Pick<UserSchema, '_id' | 'name' | 'email'> {
  amount?: number;
}

export interface ILogin extends InferType<typeof loginSchema> {}

export interface ISignup extends InferType<typeof signupSchema> {}
