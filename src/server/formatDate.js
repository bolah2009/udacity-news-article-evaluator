const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: true,
  timeZoneName: 'short',
};

const date = dateString => new Date(dateString);

const dateTimeFormat = new Intl.DateTimeFormat('en-NG', options);

const formatDate = dateString => {
  if (Date.parse(dateString)) {
    return dateTimeFormat.format(date(dateString));
  }
  // TODO: Add replaced hour shift back to hour value
  return dateTimeFormat.format(date(dateString.replace(/ (\+|-)\d{4}/, '')));
};

module.exports = formatDate;
