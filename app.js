var express=require('express');
var app=express();
app.get('/endpoint',function(req,res){
res.send('endpoint creation');});
var server=app.listen(3001,function(){
console.log('server started');
});
