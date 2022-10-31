const fs = require('fs'); // this module enables interacting with the file system in a way modeled on standard POSIX functions.
var path = require('path');

 const pathE = 'C:/Users/ylera/Desktop/Labo2/CDMX013-md-links/holis.md';

const textFile = fs.readFileSync(pathE, 'utf-8');

//////// const pathEs = resolvingPath.resolvePath(pathE); 
 //  const x =  /(\[.*\]) \((https?)(:\/\/[^\s\)]+)\)/g
const regex = /(\[.*\])(\(https?(:\/\/[^\s\)]+)\))/g // / (\[.*\]) (\(https? (:\/\/[^\s\)]+) \))/g
const allLinks = textFile.match((regex)); 
//  const allTexts = allLinks.match((regexText)); 
//  console.log(regex.exec(textFile));
const newArray = [];
  
 allLinks.forEach( element => {
    const separate = element.split('](');
    const text = separate[0].replace('[','');
    const url = separate[1].replace(')','');
   
  newArray.push({
      href: url, // URL encontrada.
      text: text, // Texto que aparecía dentro del link (<a>).
      // file: pathE // Ruta del archivo donde se encontró el link.
      } ) 
 })
 console.log(newArray);
// for(let i=0; i<allLins)


//  const textLinkd = allLinks.match((regexText))
//  console.log('all linksd', allLinks); // Array with links and texts alltogether
//  console.log( "hola esto es un string [texto de link](http://youtube.com) otro texto aca [texto otro link](http://facebook.com)".match((regex)))
// console.log(regex.exec(allLinks))
  //console.log(allText)

  //// 
// dataUrls = [
//   {href:url , // URL found
//   text: algo , // Text that appeared inside the link (<a>).
//   file: file // Path file where the link was found
// }
// ]
