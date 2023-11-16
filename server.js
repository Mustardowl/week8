const express =require('express');
const port = 3000;
const app = express();
app.get('/', (req, res)=>{
    res.send("Welcome to Arianne's Backend Application")
});

app.get('/ari', (req,res) => {res.send("Hello Arianne")});

app.listen(port, ()=>console.log("Listening"));