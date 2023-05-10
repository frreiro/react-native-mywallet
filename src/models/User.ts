import {InferType} from 'yup';
import {loginSchema} from '../app/schemas/singinInputSchema';
import {signupSchema} from '../app/schemas/signupInputSchema';
import {User as UserSchema} from '../realm/schemas/User';

export type User = Pick<UserSchema, '_id' | 'name' | 'email'>;

export interface ILogin extends InferType<typeof loginSchema> {}

export interface ISignup extends InferType<typeof signupSchema> {}
