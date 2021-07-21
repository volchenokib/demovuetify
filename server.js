const http = require('http');

const PORT = process.env.PORT || 3000;
////////////////////////////////////////////////////////////////////////////////////

function getReqData(req) {
	return new Promise((resolve, reject) => {
		try {
			let body = '';

			req.on('data', (chunk) => {
				// append the string version to the body
				body += chunk.toString();
			});
			req.on('end', () => {
				resolve(body);
			});
		} catch (error) {
			reject(error);
		}
	});
}

const dataValidation = (data) => {
	if (!data) {
		return false;
	} else if (!data.type || !data.name || !data.properties) {
	} else {
		return true;
	}
};

let proxyOptions = {
	method: 'POST',
	hostname: '127.0.0.1',
	port: 3001
};

const proxy = (dataObject) => {
	// http.request(proxyOptions, function(req) {
	// 	req.pipe(
	// 		proxyOptions,
	// 		{
	// 			end: true
	// 		}
	// 	);
	// 	console.log('proxy', 'proxy');
	// });

	http
		.get(proxyOptions, (res) => {
			let data = dataObject;
			res.on('data', (chunk) => {
				data += chunk;
			});
			res.on('end', () => {
				console.log('data2', data);
			});
		})
		.on('error', (err) => {
			console.log('Error: ' + err.message);
		});
};

const server = http.createServer(async (req, res) => {
	let data = await getReqData(req);
	console.log('data', data);

	let dataObject = JSON.parse(data);
	if (dataValidation(dataObject)) {
		proxy(dataObject);

		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify({ message: '200 OK' }));
	} else {
		res.writeHead(422, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify({ message: 'Invalid Data' }));
	}
});

////////////////////////////////////////////////////////////////////////////////////
server.listen(PORT, () => {
	console.log(`server started on port: ${PORT}`);
});
