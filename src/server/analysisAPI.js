const dotenv = require('dotenv');
const AYLIENTextAPI = require('aylien_textapi');

dotenv.config();

const analyse = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY,
});

module.exports = analyse;
