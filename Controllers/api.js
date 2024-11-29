const express = require('express');
const newsApi = require('newsapi');
require('dotenv').config();

const app = express();
const NEWSAPI = new newsApi(process.env.NEWS_API_KEY);


// Route to fetch top headlines
app.get('/api/news',async (req,resp)=>{
    try {
        const {category = "general",country = "us"} = req.query;
        const response = await NEWSAPI.v2.topHeadlines({
            country,
            category
        });
        resp.json(response);
    } catch (error) {
        resp.status(500).send({
            error:"Failed to fetch news..!",
            details:error.message
        });
    }
});

module.exports = app;