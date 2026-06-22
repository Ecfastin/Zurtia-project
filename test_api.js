const http = require('http');

const data = JSON.stringify({
    picker_id: 1,
    productos: [
        { producto_id: 1, cantidad_solicitada: 2 },
        { producto_id: 2, cantidad_solicitada: 5 }
    ]
});

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/pedidos',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

const req = http.request(options, (res) => {
    let body = '';
    res.on('data', (chunk) => body += chunk);
    res.on('end', () => {
        console.log('Status Code:', res.statusCode);
        console.log('Response:', body);
    });
});

req.on('error', (e) => console.error(e));
req.write(data);
req.end();
