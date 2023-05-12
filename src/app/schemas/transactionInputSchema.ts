import * as yup from 'yup';

export const transactionSchema = yup.object({
  amount: yup
    .string()
    .matches(/^(?!^[0.,]+$)[^-\+\s]*$/, {
      message: 'Valor precisa ser acima de zero',
    })
    .required('Valor obrigratório'),
  description: yup.string().required('Descrição obrigatório'),
});
