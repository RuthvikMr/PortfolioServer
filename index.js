const app = require('./api/news');
const PORT = 3000;

app.listen(PORT,(error)=>{
    if(!error){
        console.log(`Server is running on http://localhost:${PORT}`);
        console.log(`URL: http://localhost:${PORT}/api/news`);
    } else {
        console.log("Error occurred, server can't start", error);
    }
})