import * as Yup from 'yup';

export const contactFormValidationSchema = Yup.object({
  name: Yup.string()
    .required('You must enter a name.')
    .min(2, 'Name must be at least two characters.'),
  email: Yup.string()
    .email('You must enter a valid email.')
    .required('You must enter an email.'),
  message: Yup.string()
    .min(5, 'Your message should be at least 5 characters long.')
    .required('You must enter a message.'),
});
