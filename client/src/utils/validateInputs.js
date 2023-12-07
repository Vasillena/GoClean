export function validateInputs(values) {
  const errors = {};

  if (values.username.length < 3 || !/^[a-zA-Z\s]+$/.test(values.username)) {
    errors.username =
      "Username should be at least 3 characters and contain only letters.";
  }

  if (values.location.length < 3 || !/^[a-zA-Z0-9\s]+$/.test(values.location)) {
    errors.location =
      "Location should be at least 3 characters and contain only letters and numbers.";
  }

  if (!/^\d{2}\.\d{2}\.\d{4}$/.test(values.date)) {
    errors.date = "Date should be in the format dd.mm.yyyy.";
  }

  if (!/^\d{1,2}:\d{2}$/.test(values.time)) {
    errors.time = "Time should be in the format h:mm.";
  }

  if (!/^https?:\/\//.test(values.locationUrl)) {
    errors.locationUrl = "Location URL should start with http:// or https://.";
  }

  if (values.description.length < 20) {
    errors.description = "Description should be at least 20 characters.";
  }

  return errors;
}
