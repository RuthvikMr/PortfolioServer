const express = require('express');
const news = require('./api/news');
const guide = require('./api/guide');

const app = express();
const PORT = 3000;

// Mount the 'news' API under '/api/news'
app.use('/api/news', news);

// Mount the 'guide' API under '/api/guide'
app.use('/api/guide', guide);

// Start the server
app.listen(PORT, (error) => {
    if (!error) {
        console.log(`Server is running on http://localhost:${PORT}`);
        console.log(`News API: http://localhost:${PORT}/api/news`);
        console.log(`Guide API: http://localhost:${PORT}/api/guide`);
    } else {
        console.log("Error occurred, server can't start", error);
    }
});
