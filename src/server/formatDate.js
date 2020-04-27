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

const formatDate = dateString => dateTimeFormat.format(date(dateString));

module.exports = formatDate;
