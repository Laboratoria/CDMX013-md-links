const getStats = (dataLinks) => {
    const urls = [];
    
    dataLinks.forEach(obj => {
        urls.push(obj.href);
    });

    const uniqueLinks = [...new Set(urls)].length;
    //console.log({total: dataLinks.length, Unique: uniqueLinks});
    return {total: dataLinks.length, Unique: uniqueLinks};

}

const getValidateStats = (dataLinks) => {
    let count = 0;
    let stats = getStats(dataLinks);
    
    dataLinks.forEach(obj => {
        if(obj.ok === 'Fail'){
            count += 1;
        }
    });
    
    stats.broken = count;
   //console.log(stats);
    return stats
};

module.exports = {getStats, getValidateStats}