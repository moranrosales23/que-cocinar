const messageError = (message) => ({ err: true, message });
const notMessage = () => ({ err: false, message: '' });

const email = (email, custom_message) => {
  const exp = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  if (!exp.test(email)) return messageError(custom_message || `The Email is invalid`);
  return notMessage();
};

const required = (field, name, custom_message) => {
  if (
    field === null ||
    field === '' ||
    field === undefined ||
    (Array.isArray(field) && field.length === 0) ||
    (typeof field === 'string' && field.trim().length === 0)
  )
    return messageError(custom_message || `The field ${name} is required`);
  return notMessage();
};

const minLength = (field, min, name, custom_message) => {
  if (
    (Array.isArray(field) && field.length < min) ||
    (typeof field === 'string' && field.trim().length < min)
  )
    return messageError(
      custom_message || `The field ${name} must contain at least ${min} characters`
    );
  return notMessage();
};

const maxLength = (field, max, name, custom_message) => {
  if (
    (Array.isArray(field) && field.length > max) ||
    (typeof field === 'string' && field.trim().length > max)
  )
    return messageError(
      custom_message || `The field ${name} must contain at least ${max} characters`
    );
  return notMessage();
};

const exactLength = (field, size, name, custom_message) => {
  if (
    (Array.isArray(field) && field.length === size) ||
    (typeof field === 'string' && field.trim().length === size)
  )
    return messageError(custom_message || `The field ${name} must contain ${size} characters`);
  return notMessage();
};

const equals = (field, field_compare, custom_message, alias_field, alias_field_compare) => {
  if (field !== field_compare)
    return messageError(
      custom_message || `The field ${alias_field} and ${alias_field_compare} must be equals`
    );
  return notMessage();
};

const validations = { email, required, minLength, maxLength, exactLength, equals };

const validate = (fields, values) => {
  const errors = { success: true };
  for (const [key, value] of Object.entries(fields)) {
    let { alias, rules, comp, alias_comp, message } = value;
    rules = rules.split('|');
    for (const rule of rules) {
      let error = {};
      const [criterio, number] = rule.split(':');
      if (rule === 'equals') {
        error = validations[rule](values[key], values[comp], message, alias, alias_comp);
      } else if (['minLength', 'maxLength', 'exactLength'].includes(criterio)) {
        error = validations[criterio](values[key], parseInt(number), alias, message);
      } else error = validations[rule](values[key], alias, message);
      if (error.err) {
        errors[key] = error;
        errors.success = false;
        break;
      }
    }
  }

  return errors;
};

export { validate };
