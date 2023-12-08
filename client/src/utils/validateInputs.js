export function validateInputs(values) {
  const errors = {};

  if (
    (values.username && values.username.length < 3) ||
    !/^[a-zA-Z\s]+$/.test(values.username)
  ) {
    errors.username =
      "Username should be at least 3 characters and contain only letters.";
  }

  if (
    (values.location && values.location.length < 3) ||
    !/^[a-zA-Z0-9\s]+$/.test(values.location)
  ) {
    errors.location =
      "Location should be at least 3 characters and contain only letters and numbers.";
  }

  if (values.date && !/^\d{2}\.\d{2}\.\d{4}$/.test(values.date)) {
    errors.date = "Date should be in the format dd.mm.yyyy.";
  }

  if (values.time && !/^\d{1,2}:\d{2}$/.test(values.time)) {
    errors.time = "Time should be in the format h:mm.";
  }

  if (values.locationUrl && !/^https?:\/\//.test(values.locationUrl)) {
    errors.locationUrl = "Location URL should start with http:// or https://.";
  }

  if (values.description && values.description.length < 20) {
    errors.description = "Description should be at least 20 characters.";
  }

  if (values.password && values.password !== values.repeatPassword) {
    errors.passwordMatch = "Passwords don't match";
  }

  return errors;
}
