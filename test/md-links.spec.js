const mdLinks = require('../');
const { checkingExistentPath } = require('../checkingExistentPath.js');
const { resolvePath } = require('../resolvePath.js');
const { answerFileOrDirectory } = require('../answerFileOrDirectory');
const { gettingFileExtention } = require('../gettingFileExtention.js');
const { gettingLinks } = require('../gettingLinks.js');
const { getMdLinks } = require('../index.js')
const { validate } = require('../validate.js');
const { stadistics } = require('../stadistics.js')
const array1 = [
  {
    href: 'https://nodejs.org/',
    text: 'Node.js',
    file: 'C:\\Users\\ylera\\Desktop\\Labo2\\CDMX013-md-links\\holis.md',
  },
  {
    href: 'https://medium.com/laboratoria-developers/recursi%C3%B3n-o-recursividad-ec8f1a359727',
    text: 'Recursión o Recursividad - Laboratoria Developers',
    file: 'C:\\Users\\ylera\\Desktop\\Labo2\\CDMX013-md-links\\README.md',
  },
  {
    href: 'https://www.youtube.com/fulanitodetal/20202',
    text: 'How to Write a JavaScript Promise - freecodecamp ',
    file: 'C:\\Users\\ylera\\Desktop\\Labo2\\CDMX013-md-links\\README.md',
  }
];

const validatedArray = [
  {
    href: 'https://nodejs.org/',
    text: 'Node.js',
    file: 'C:\\Users\\ylera\\Desktop\\Labo2\\CDMX013-md-links\\holis.md',
    status: 200,
    ok: 'ok'
  },
  {
    href: 'https://medium.com/laboratoria-developers/recursi%C3%B3n-o-recursividad-ec8f1a359727',
    text: 'Recursión o Recursividad - Laboratoria Developers',
    file: 'C:\\Users\\ylera\\Desktop\\Labo2\\CDMX013-md-links\\README.md',
    status: 200,
    ok: 'ok'
  },
  {
    href: 'https://www.youtube.com/fulanitodetal/20202',
    text: 'How to Write a JavaScript Promise - freecodecamp ',
    file: 'C:\\Users\\ylera\\Desktop\\Labo2\\CDMX013-md-links\\README.md',
    status: 404,
    ok: 'fail'
  }
];
///////
describe('checkingExistentPath', () => {
  test('checkingExistentPath is a function', () => {
    expect(typeof checkingExistentPath).toBe('boolean')
  })
  test('checkingExistentPath is true', () => {
    expect(checkingExistentPath('./holis.md')).toBe('true')
  })
  test('checkingExistentPath is false', () => {
    expect(checkingExistentPath('./hol.md')).toBe('false')
  })
});

describe('resolvePath', () => {
  test('resolvePath is a function', () => {
    expect(typeof checkingExistentPath).toBe('boolean')
  })
  test('resolvePath of relative path', () => {
    expect(checkingExistentPath('./holis.md')).toBe('C:\Users\ylera\Desktop\Labo2\CDMX013-md-links\holis.md')
  })
  test('resolvePath of absolute path', () => {
    expect(checkingExistentPath('C:\Users\ylera\Desktop\Labo2\CDMX013-md-links\holis.md')).toBe('C:\Users\ylera\Desktop\Labo2\CDMX013-md-links\holis.md')
  })
});

describe('answerFileOrDirectory', () => {
  test('answerFileOrDirectory is a function', () => {
    expect(typeof checkingExistentPath).toBe('boolean')
  })
  test('answerFileOrDirectory is a file', () => {
    expect(checkingExistentPath('./holis.md')).toBe('C:\Users\ylera\Desktop\Labo2\CDMX013-md-links\holis.md')
  })
  test('answerFileOrDirectory is a directory', () => {
    expect(checkingExistentPath('./CDMX013-md-links')).toBe(pathE + '  este es un directorio, intentalo con un archivo')
  })

});

describe('gettingFileExtention', () => {
  test('gettingFileExtention is a function', () => {
    expect(typeof gettingFileExtention).toBe('boolean')
  })
  test('gettingFileExtention is .md', () => {
    expect(gettingFileExtention('./holis.md')).toBe('C:\Users\ylera\Desktop\Labo2\CDMX013-md-links\holis.md')
  })
  test('gettingFileExtention is not .md', () => {
    expect(gettingFileExtention('./thumb.png')).toBe('Tu archivo es ' + path.extname(testPath) + ' intenta con alguno que sea .md')
  })
});

describe('gettingLinks', () => {
  test('gettingLinks is a function', () => {
    expect(typeof gettingLinks).toBe('function')
  })
  test('gettingLinks of a .md file', () => {
    expect(gettingFileExtention('./holis.md')).toBe([
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: 'C:\\Users\\ylera\\Desktop\\Labo2\\CDMX013-md-links\\holis.md'
      },
      {
        href: 'https://nodejs.org/',
        text: 'Node.js',
        file: 'C:\\Users\\ylera\\Desktop\\Labo2\\CDMX013-md-links\\holis.md'
      },
      {
        href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
        text: 'md-links',
        file: 'C:\\Users\\ylera\\Desktop\\Labo2\\CDMX013-md-links\\holis.md'
      },
      {
        href: 'https://www.youtube.com/fulanitodetal/20202',
        text: 'How to Write a JavaScript Promise - 404 freecodecamp',
        file: 'C:\\Users\\ylera\\Desktop\\Labo2\\CDMX013-md-links\\holis.md'
      },
      {
        href: 'https://medium.com/laboratoria-developers/recursi%C3%B3n-o-recursividad-ec8f1a359727',
        text: 'Recursión o Recursividad - 503 Laboratoria Developers',
        file: 'C:\\Users\\ylera\\Desktop\\Labo2\\CDMX013-md-links\\holis.md'
      }
    ])
  })

});

// describe('mdLinks', () => {

//   it('should show an array as result', (done) => {
//     const promise = mdLinks();
//     promise.then((arr) => {
//       expect(arr.length).toBe(1)
//       expect(arr).toHaveLength(1)
//       done();
//     })
//   });
// });

describe('validation', () => {

  it('validation should be a function', () => {
    test(typeof validate).toBe('function')
  });
  it('the result of validation should be as expected ', () => {
    test(validate(array1)).toBe(
      [
        {
          href: 'https://nodejs.org/',
          text: 'Node.js',
          file: 'C:\\Users\\ylera\\Desktop\\Labo2\\CDMX013-md-links\\holis.md',
          status: 200,
          ok: 'ok'
        },
        {
          href: 'https://medium.com/laboratoria-developers/recursi%C3%B3n-o-recursividad-ec8f1a359727',
          text: 'Recursión o Recursividad - Laboratoria Developers',
          file: 'C:\\Users\\ylera\\Desktop\\Labo2\\CDMX013-md-links\\README.md',
          status: 200,
          ok: 'ok'
        },
        {
          href: 'https://www.youtube.com/fulanitodetal/20202',
          text: 'How to Write a JavaScript Promise - freecodecamp ',
          file: 'C:\\Users\\ylera\\Desktop\\Labo2\\CDMX013-md-links\\README.md',
          status: 404,
          ok: 'fail'
        }
      ]
    )
  });
    it('the result of validation should be as expected length of 3 elements ', () => {
    test(validate(array1)).toHaveLength(3)
  });
});

describe('stadistics', () => {

  it('stadistics should be a function', () => {
    expect(typeof stadistics).toBe('function')
  });
  it('the result of stadistics with validation false should be as expected ', () => {
    expect(stadistics(array1, { validation: false })).toBe({ total: 3, unique: 3 })
  });
  it('the result should be as expected ', () => {
    expect(stadistics(validatedArray, { validation: true })).toBe({ total: 3, unique: 3, broken: 1 })
  });
  it('the result of stadistics should be as expected length of 3 elements ', () => {
    test(stadistics(array1)).toHaveLength(3)
  });
  it('the result of stadistics should be as expected length of 3 elements ', () => {
    test(stadistics(array1)).toHaveLength(3)
  });
});
