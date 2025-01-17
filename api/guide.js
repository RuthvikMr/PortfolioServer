const express = require('express');
const cors = require('cors');
const axios = require("axios");

const app = express();

// Enable CORS
const corsOptions = {
    origin: ['https://mr-portfolio-51874.web.app', 'http://localhost:3000'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

app.use((req, res, next) => {
    res.setHeader('X-Frame-Options', 'ALLOWALL');  // Allow iframe embedding from any source
    next();
});

app.get('/api/guide', async (req, res) => {
    const url = req.query.url;

    if (!url) {
        return res.status(400).json({ error: 'Missing "url" query parameter.' });
    }

    try {
        const response = await axios.get(url, {
            headers: { Accept: "text/html"},
        });

        res.send(response.data);
    } catch (error) {
        res.status(500).json({
            error: 'Failed to fetch url',
            details: error.message,
        });
    }
});

// Export the app for deployment
module.exports = app;
