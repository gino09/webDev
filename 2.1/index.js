const Express = require('express');
const app = Express();

app.use(Express.static(__dirname + '/public'));

app.listen(4000,()=>{
    console.log('listening at por 4000');
});