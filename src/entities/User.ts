import {InferType} from 'yup';
import {loginSchema} from '../schemas/singin';
import {signupSchema} from '../schemas/signup';

export type User = {
  id: number;
  email: string;
  name: string;
};

export interface ILogin extends InferType<typeof loginSchema> {}

export interface ISignup extends InferType<typeof signupSchema> {}
