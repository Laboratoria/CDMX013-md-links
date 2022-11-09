const { getStats } = require('../components/getStats');
const { validateLinks } = require('../components/validateLinks');
const { mdLinks }  = require('../index.js');
//jest.mock('../components/validateLinks')

describe('getStats', () =>{
  it('is a function', () =>{
    expect(typeof getStats).toBe('function')
  });

  it('should return an object', () =>{

    const data = [
      {href: 'a'},
      {href: 'z'},
      {href: 'q'},
      {href: 'a'}
    ]
    expect(getStats(data)).toEqual({total: 4, unique: 3, repeated: 1, repeatedLinks: [{href: 'a'}]})
  })
});

describe('validateLinks', () =>{
  it('returns a promise that resolves in an object', () =>{
    const data = { 
      href: 'https://jestjs.io/docs/manual-mocks',
      text: 'Jest manual-mock',
      file: 'C:\Users\Laboratoria\Proyectos-Marian\CDMX013-md-links-MarianRav',
    }

    return (validateLinks(data)).then((result)=> {
      expect(result).toEqual({ 
        href: 'https://jestjs.io/docs/manual-mocks',
        text: 'Jest manual-mock',
        path: 'C:\Users\Laboratoria\Proyectos-Marian\CDMX013-md-links-MarianRav',
        StatusOfRequest: 200,
        StatusText: 'OK'
      });
    });
  });
});

describe('mdLinks', () => {

  it('throws an error when its not an .md file', () => {

    return expect(mdLinks('.README.js', {validate: false, stats: true})).rejects.toMatch('Hey this is not a Markdown(.md) file!');
  });

});



