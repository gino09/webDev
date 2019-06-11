const express = require('express');
const Datastore = require('nedb');
const app = express();

app.use(express.static(__dirname + ('/public')));
app.use(express.json({limit:'1mb'}));

const dataBase = new Datastore('database.db');
dataBase.loadDatabase();

app.get('/api',(req,res)=>{
    dataBase.find({},(err,data)=>{
        if(err){
            res.end();
            return;
        }
        res.json(data);    
    });  
});

app.post('/api',(req,res)=>{
    console.log(req.body);
    const timestamp = Date.now();
    req.body.timestamp = timestamp;

    dataBase.insert(req.body);
    res.json({
        status:'succes',
        latitude: req.body.lat,
        timestamp:timestamp,
        longitude: req.body.lon
    })
});
app.listen(4000,()=>{
    console.log('listening at port 4000');
});