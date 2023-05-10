import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup
    .string()
    .email('Insira um email válido')
    .required('Email obrigratório'),
  password: yup
    .string()
    .min(8, ({min}) => `Senha deverá ter pelo menos ${min} caracteres`)
    .required('Senha obrigatório'),
});
