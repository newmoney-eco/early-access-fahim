import * as Yup from 'yup';

export const signupSchema = (usePhone) =>
  Yup.object({
    userInput: usePhone
      ? Yup.string()
          .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
          .required('Phone number is required')
      : Yup.string()
          .email('Invalid email address')
          .required('Email is required'),
  });

export const codeSchema = Yup.object({
  userInput: Yup.string()
    .matches(/^\d{4}$/, 'Code must be exactly 4 digits -only numbers')
    .required('Code is required'),
});

export const infoNameSchema = Yup.object({
  name: Yup.string()
    .matches(/^[A-Za-z\s]+$/, 'Invalid name')
    .required('Please Enter your name'),
});
