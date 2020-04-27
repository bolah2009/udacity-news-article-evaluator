const analysis = require('../src/server/analysisAPI.js');

test('it returns an object', () => {
  expect(typeof analysis).toBe('object');
});

describe('`_options` property', () => {
  const { _options: options } = analysis;

  it('it is an object', () => {
    expect(typeof options).toBe('object');
  });

  it('it is an `application_id` property', () => {
    expect(options).toHaveProperty('application_id');
  });

  it('the `application_id` property is a string', () => {
    expect(typeof options.application_id).toBe('string');
  });

  it('it is an `application_key` property', () => {
    expect(options).toHaveProperty('application_key');
  });

  it('the `application_key` property is a string', () => {
    expect(typeof options.application_key).toBe('string');
  });
});

describe('`extract` property', () => {
  it('it is an `extract` property', () => {
    expect(analysis).toHaveProperty('extract');
  });

  it('the `extract` property is a function', () => {
    expect(typeof analysis.extract).toBe('function');
  });
});
