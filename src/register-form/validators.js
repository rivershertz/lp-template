export function isRequired(value) {
  if (value && value.trim()) {
    return true;
  }
  return "This field is required";
}

export function Checkbox(value) {
  if (value !== "on") {
    return true;
  }

  return "You must agree to the terms and conditions";
}

export function Email(value) {
  isRequired(value);

  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(value)) {
    return "This field must contain a valid email";
  }
  return true;
}

export function Length(value) {
  isRequired(value);

  if (value.length > 30) {
    return "This field must contain 30 characters or less";
  }
  if (value.length < 2) {
    return "This field must contain 2 characters or more";
  }
  if (value.length >= 2 && value.length <= 30) {
    return true;
  }
}

export function Phone(value) {
  if (value.length < 6) {
    return "Invalid phone number";
  }
  return true;
}
