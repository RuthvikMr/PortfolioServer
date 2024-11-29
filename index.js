const app = require('./Controllers/api');
const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})