function requestLog(req, res, next) {
	console.log('---------------REQUEST--------------------');
	console.log('Resource:', req.url);
	console.log('Method:', req.method);
	console.log('Body:', req.body);
	if(req.file){
		console.log('File:', req.file);
	}
	console.log('---------------RESPONSE--------------------');
	console.log('Status:', res.statusCode);
	next();
}

export { requestLog };
