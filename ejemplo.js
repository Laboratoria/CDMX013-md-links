const newPromise = new Promise((resolve, reject) => {
  const number = 2
  if (number > 5){
    resolve ("sí, es mayor a 5")
  }else{
    reject ("no, no es mayor a 5")
  }
});
console.log(newPromise);
newPromise.then((resultado)=>{
console.log(resultado);
}).catch((TypeError)=>{
  console.log(TypeError)
})

