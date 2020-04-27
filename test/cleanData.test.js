const cleanData = require('../src/server/cleanData.js');

const mockData = {
  author: 'Bola',
  image: '',
  tags: ['Software', 'Developer', 'Lagos', 'Nigeria'],
  article: '',
  videos: [],
  title: 'NCDC Coronavirus (COVID-19) Information Minisite',
  publishDate: '2020-04-24T23:43:36+00:00',
  feeds: [],
};
const url = 'https://bolabuari.com/';

const newData = cleanData(mockData, url);

test('it returns an object', () => {
  expect(typeof newData).toBe('object');
});

describe('`date` property', () => {
  it('has a `date` property', () => {
    expect(newData).toHaveProperty('date');
  });

  it('`date` property is a string', () => {
    expect(typeof newData.date).toBe('string');
  });

  it('`date` property is an empty string when publishDate is falsy', () => {
    const dataWithNoPublishDate = { ...mockData, publishDate: '' };
    const newDataWithNoDate = cleanData(dataWithNoPublishDate, url);
    expect(newDataWithNoDate).toHaveProperty('date', '');
  });
});

test('`title` property', () => {
  expect(newData).toHaveProperty('title', mockData.title);
});

test('`author` property', () => {
  expect(newData).toHaveProperty('author', mockData.author);
});

test('`status` property', () => {
  expect(newData).toHaveProperty('status', 'URL Analysed');
});

test('`link` property', () => {
  expect(newData).toHaveProperty('link', url);
});
