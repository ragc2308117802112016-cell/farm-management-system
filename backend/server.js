const express = require('express');
const client = require('prom-client');
const app = express();

// Prometheus monitoring metrics
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ register: client.register });

app.get('/', (req, res) => {
    res.send('Farm System Backend is Live!');
});

// Metrics endpoint for Prometheus to scrap data
app.get('/metrics', async (req, res) => {
    res.set('Content-Type', client.register.contentType);
    res.end(await client.register.metrics());
});

app.listen(3000, () => console.log('Server running on port 3000'));