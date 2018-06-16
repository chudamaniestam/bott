var express=require('express');
var app=express();
var port = process.env.PORT||3001;

app.post('/endpoint',function(req,res){
	console.log(request.body);
	res.send('endpoint creation');
});


var server=app.listen(port,function(){
	console.log('server started');
});
