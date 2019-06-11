const express = require('express');
const app = express();

app.use(express.static(__dirname + ('/public')));
app.use(express.json({limit:'1mb'}));
app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json({
        status:'succes',
        latitude: req.body.lat,
        longitude: req.body.lon
    })
});
app.listen(4000,()=>{
    console.log('listening at port 4000');
});