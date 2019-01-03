const Validator = require('validator');
const isEmpty = require('./is-empty');
//import isEmpty from './is-empty';

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.scholl = !isEmpty(data.scholl) ? data.scholl : '';
  data.degree = !isEmpty(data.degree) ? data.degree : '';
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : '';
  data.from = !isEmpty(data.from) ? data.from : '';

  if (Validator.isEmpty(data.school)) {
    errors.school = 'School required';
  }
  if (Validator.isEmpty(data.degree)) {
    errors.degree = 'Degree required';
  }
  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = 'Field of study is required';
  }
  if (Validator.isEmpty(data.from)) {
    errors.from = 'From field is required';
  }

  if (Validator)
    return {
      errors,
      isValid: isEmpty(errors)
    };
};
