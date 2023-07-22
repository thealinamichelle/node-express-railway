import express from 'express';

const app = express();

app.get('/', function(request, response) {
	response.send('hello again');
});


app.listen(1982, function(){
	console.log('hi');
})