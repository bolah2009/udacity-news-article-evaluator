const formatDate = require('./formatDate.js');

const cleanData = (data, link) => {
  const { publishDate, title, author, tags: keywords } = data;
  const date = publishDate ? formatDate(publishDate) : '';

  const cleanedData = { date, title, author, keywords, status: 'URL Analysed', link };

  return cleanedData;
};

module.exports = cleanData;
