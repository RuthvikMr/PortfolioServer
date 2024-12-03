const express = require('express');
const NewsAPI = require('newsapi');
const cors = require('cors'); 
require('dotenv').config();

const app = express();
app.use(cors());
const corsOptions = {
    origin: ['https://mr-portfolio-51874.web.app','http://localhost:3000'], 
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

// Define your API route
app.get('/api/news', async (req, res) => {
    try {
        const { topic = 'technology', sources = 'bbc-news,the-verge,cnn,techcrunch,wired,financial-times,bloomberg,cnbc', size=20, page=1 } = req.query;
        const response = await newsapi.v2.everything({
            q: topic,
            sources: sources,
            pageSize:size,
            page:page,
        });
        res.json(response);
    } catch (error) {
        res.status(500).json({
            error: 'Failed to fetch news',
            details: error.message,
        });
    }
});

// Export the app directly for Vercel
module.exports = app;
