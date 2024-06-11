function requestLog(req, res, next) {
	console.log('---------------REQUEST--------------------');
	console.log('Resource:', req.url);
	console.log('Method:', req.method);
	console.log('---------------RESPONSE--------------------');
	console.log('Status:', res.statusCode);
	console.log('---------------END--------------------');
	next();
}

export { requestLog };
