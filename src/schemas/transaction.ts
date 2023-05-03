import * as yup from 'yup';

export const transactionSchema = yup.object({
  amount: yup.string().required('Valor obrigratório'),
  description: yup.string().required('Descrição obrigatório'),
});
