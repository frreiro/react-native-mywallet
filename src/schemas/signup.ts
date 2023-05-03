import * as yup from 'yup';

export const signupSchema = yup.object({
  name: yup.string().required('Nome obrigatório'),
  email: yup
    .string()
    .email('Insira um email válido')
    .required('Email obrigratório'),
  password: yup
    .string()
    .min(8, ({min}) => `Senha deverá ter pelo menos ${min} caracteres`)
    .required('Senha obrigatório'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Senhas devem ser iguais')
    .required('Senha obrigatório'),
});
