import * as yup from 'yup';

export const transactionSchema = yup.object({
  amount: yup
    .string()
    //(?!^[0.,]+$) => valor diferente de zero, "." e ",""
    //[^-\+\s]*$ => classe de carascteres negadas: "-", "+" e "\s"
    .matches(/^(?!^[0.,]+$)[^-\+\s]*$/, {
      message: 'Valor precisa ser acima de zero',
    })
    .required('Valor obrigratório'),
  description: yup.string().required('Descrição obrigatório'),
});
