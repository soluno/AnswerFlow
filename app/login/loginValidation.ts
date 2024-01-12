import * as yup from "yup";
const passwordRules = /^(?=|.*\d)(7=,*[a-z])(?=.*[A-Z]).{5,}$/;
//I min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

const loginValidation = yup.object().shape({
  userName: yup.string().min(3).max(20).required(),
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, {
      message:
        "min 5 char, 1 uppercase letter, 1 lower case letter, 1 numeric digit",
    })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Match the password")
    .required("Required"),
});
