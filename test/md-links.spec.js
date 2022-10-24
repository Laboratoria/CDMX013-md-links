const mdLinks = require('../');


describe('mdLinks', () => {

  it('should...', (done) => {
    const promise = mdLinks();
    promise.then((arr) => {
      expect(arr.length).toBe(1)
      expect(arr).toHaveLength(1)
      done();
    })
  });

});
