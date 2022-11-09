// // Require the given module 
const fs = require('fs'); // this module enables interacting with the file system in a way modeled on standard POSIX functions.
 const pathE = './holis.md'; //this is a constat of a  test path (ruta prueba)
// const pathE = 'C:/Users/ylera/Desktop/Laboratoria/learnyounodeexercises'; //this is a constat of a  test path (ruta prueba)

function answerFileOrDirectory(pathE){
    
    return new Promise((resolve, reject)=>{
        let stats = fs.statSync(pathE); // Use statSync() method to store the returned    tru or false
        if(stats.isFile()){
             console.log(pathE + '---> IS A FILE '); 
             console.log('3. is it directory? ' + stats.isDirectory()); // false 
            resolve(stats.isDirectory()) // false
        } else if(fs.statSync(pathE)){
            console.log(pathE +'---> IS A DIRECTORY' );  
            console.log('3. is it directory? ' + stats.isDirectory()); // true
            reject(stats.isDirectory())// true
        }
        
        // return stats.isDirectory(); 
    })
  
}

module.exports = { answerFileOrDirectory }
//File test run
answerFileOrDirectory(pathE);






// function answerFileOrDirectory(pathE){

//     let stats = fs.statSync(pathE); // Use statSync() method to store the returned   
//     if(stats.isFile()){
//         console.log(pathE + '---> IS A FILE '); 
//     } else if(fs.statSync(pathE)){
//         console.log(pathE +'---> IS A DIRECTORY' );   
//     }
    
// }

// module.exports = { answerFileOrDirectory }
// //File test run
// answerFileOrDirectory(pathE);