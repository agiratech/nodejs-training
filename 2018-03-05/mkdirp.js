var mkdirp = require('mkdirp');
    
mkdirp('/home/rajeshkumarj/Node_js/check', function (err) {
    if (err) console.error(err)
    else console.log('pow!')
});
