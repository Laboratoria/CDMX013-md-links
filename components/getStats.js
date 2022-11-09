const getStats = (link) => {
    let unique = [];
    let repeated = [];
    let order = link.sort((a,b) => {
        if(a.href < b.href){
            return -1;
        } else if(a.href > b.href){
            return 1;
        } else{
            return 0;
        }
    });

    for(let i = 0; i <= order.length-1; i++){
      if(JSON.stringify(order[i]) != JSON.stringify(order[i+1])){
      unique.push(order[i]);
      }else{
      repeated.push(order[i]);
      }
    }    
    return { total: link.length, unique: unique.length, repeated: repeated.length, repeatedLinks: repeated};
    
  }

  module.exports = { getStats }
