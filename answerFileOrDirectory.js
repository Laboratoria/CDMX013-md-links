
const fs = require('fs'); // this module enables interacting with the file system in a way modeled on standard POSIX functions.


function answerFileOrDirectory(pathE){
    
        let stats = fs.statSync(pathE); // Use statSync() method to store the returned    tru or false
        if(stats.isFile()){
             //console.log(pathE + '---> IS A FILE '); 
             console.log('3. is it directory? ' + stats.isDirectory()); // false 
            return (pathE) // false
        } else if(fs.statSync(pathE)){
            //console.log(pathE +'---> IS A DIRECTORY' );  
            console.log('3. is it directory? ' + stats.isDirectory()); // true
            return (pathE + '  este es un directorio, intentalo con un archivo')  // true
        }
        
}

module.exports = { answerFileOrDirectory }

//File test run
 //console.log(answerFileOrDirectory(pathE));

