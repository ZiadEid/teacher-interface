import * as yup from 'yup';

// first name, middle name, and last name
const fullNameRegex = /^[\u0621-\u064A\u0660-\u0669]+\s[\u0621-\u064A\u0660-\u0669]+\s[\u0621-\u064A\u0660-\u0669]+$/;


const phoneNumberRegex = /^01[0125][0-9]{8}$/;

// min 5 characters, 1 upper letter, 1 lower letter, 1 numeric digit
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];
const FILE_SIZE = 10 * 1024 * 1024; // 10MB

export const registerSchema = yup.object().shape({
  user_img: yup
    .mixed()
    .test(
      'fileSize',
      'File too large',
      value => value && value.size <= FILE_SIZE
    )
    .test(
      'fileFormat',
      'Unsupported Format',
      value => value && SUPPORTED_FORMATS.includes(value.type)
    ),
  user_email: yup
    .string()
    .email('محتاج تكتب بريد الكتروني بطريقة صح')
    .required('محتاجين منك بريد الكتروني'),
  user_name: yup
    .string()
    .required('برجاء ادخال الاسم ثلاثي')
    .matches(fullNameRegex, { message: 'اكتب الاسم ثلاثي' }),
  user_phone: yup
    .string()
    .matches(phoneNumberRegex, 'رقم الهاتف يبداء ب (01) ويتكون من 11 خانة')
    .required('برجاء ادخال رقم الهاتف'),
  user_subject: yup
    .string()
    .required('برجاء اختيار المادة العلمية'),
  user_password: yup
    .string()
    .min(5).required('محتاج تكت رقم سري اكبر من 4 خانات')
    .matches(passwordRegex, { message: 'لو كتبت رقم سري فيه حروف وارقام وعلامة هيكون كله تمام' })
    .required('محتاجين منك رقم سري'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('user_password')], 'لازم تكتب الرقم السري زي ما كتبته بالظبط')
    .required('محتاجينك تاكد الرقم السري')
})
