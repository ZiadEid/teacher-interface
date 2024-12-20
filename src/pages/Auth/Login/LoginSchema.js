import * as yup from 'yup';

// min 5 characters, 1 upper letter, 1 lower letter, 1 numeric digit
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;



export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('محتاج تكتب بريد الكتروني بطريقة صح')
    .required('محتاجين منك بريد الكتروني'),
  password: yup
    .string()
    .min(5).required('محتاج تكت رقم سري اكبر من 4 خانات')
    .matches(passwordRegex, { message: 'برجاء ادخال رقم سري قوي يتكون من حروف وارقام وعلامة خاصة' })
    .required('محتاجين منك رقم سري'),
})