import { fieldRegex } from "./fieldRegex";
import { fieldValidationMessage } from "./fieldValidationMessage";
const fieldsValidation = (field, value) => {
  const output = {};
  switch (field) {
    case "email":
      output.test = fieldRegex.email.test(String(value).toLowerCase());
      output.error = !output.test ? fieldValidationMessage.email : "";
      break;
    case "password":
      output.test = fieldRegex.password.test(String(value).toLowerCase());
      output.error = !output.test ? fieldValidationMessage.password : "";
      break;
    default:
  }
  return output;
};

const checkInvalidForm = (fieldsValidation) => {
  let output = false;
  Object.keys(fieldsValidation).forEach((key) => {
    if (
      fieldsValidation[key].test === false ||
      fieldsValidation[key].test === undefined
    ) {
      output = true;
    }
  });
  return output;
};

export { fieldsValidation, checkInvalidForm };
