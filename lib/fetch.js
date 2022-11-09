const parser = require('./parser');

module.exports.validate = (dataLinks) => {
    const promises = dataLinks.map((url) => {
        return fetch(url.href)
            .then((response) => {
                //console.log("response: " + response);
                if(response.statusText == 'OK'){
                    //console.log('The Link is OK!');
                    //console.log(response.statusText);
                            
                            const okLink = {
                                href: url.href,
                                text: url.text,
                                file: url.file,
                                status: response.status,
                                ok: 'Ok'
                            }
                            return okLink;
                            //console.log(okArray);
                            //validatedLinks.push(okArray);
                            //return okArray;
                }else{
                    //console.log('The link failed!');
                            const failedLink = {
                                href: url.href,
                                text: url.text,
                                file: url.file,
                                status: response.status,
                                ok: 'Fail'
                            }
                            //console.log(failedArray);
                            return failedLink;
                }
            })
            .catch(function(err) {
                console.log(err.message);
                const object = {
                    status: err.message,
                    message: err.statusText,
                }
                return object
            });

   });
   //console.log(promises);
    return Promise.all(promises);
}
//validate(parser.parser('./dirExample/README.md')).then((result)=>{console.log(result);});