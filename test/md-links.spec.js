const mdLinks = require('../');


describe('mdLinks', () => {

  it('should show an array as result', (done) => {
    const promise = mdLinks();
    promise.then((arr) => {
      expect(arr.length).toBe(1)
      expect(arr).toHaveLength(1)
      done();
    })
  });

});

describe('validation', () => {

  it('should be a function', (done) => {
    const promise = mdLinks();
    promise.then((arr) => {
      expect(arr.length).toBe(1)
      expect(arr).toHaveLength(1)
      done();
    })
  });

});
