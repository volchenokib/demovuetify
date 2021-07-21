const http = require('http');
var event = {
	type: ['page', 'track', 'identify'],
	name: 'eventName',
	properties: {
		prop: 'key'
	}
};

const PORT = process.env.PORT || 3000;
////////////////////////////////////////////////////////////////////////////////////

const isValid = (event) => {
	if (!event) {
		return false;
	} else if (!event.type || !event.name || !event.properties) {
		return false;
	} else {
		return true;
	}
};

function getReqData(req) {
	isValid(event);
	return new Promise((resolve, reject) => {
		try {
			let body = '';

			req.on('data', (chunk) => {
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

const server = http.createServer(async (req, res) => {
	// let data = await getReqData(req);

	// let eventObject = JSON.parse(event);
	if (eventValidation(eventObject)) {
		console.log('true');

		// res.writeHead(200, { 'Content-Type': 'application/json' });
		// res.end(JSON.stringify({ message: '200 OK' }));
	} else {
		console.log('false');
		// res.writeHead(422, { 'Content-Type': 'application/json' });
		// res.end(JSON.stringify({ message: 'Invalid Data' }));
	}
});

////////////////////////////////////////////////////////////////////////////////////
server.listen(PORT, () => {
	console.log(`server started on port: ${PORT}`);
});
