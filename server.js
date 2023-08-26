import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import path from 'path';

const app = express();

app.use(cors());
const __dirname = path.resolve();


const PORT = process.env.PORT || 8080;


app.get('/', (req,res) =>{
    res.send("Welcome to my knowledge check")
});

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, 'index.html'));
    
});



app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));

})


app.get('/contactme', (req, res) => {
    res.sendFile(path.join(__dirname, 'contactme.html'));

})


app.use('*', (req, res) => {
    res.status(404)
    res.sendFile(path.join(__dirname, '404.html'));
})



app.listen(PORT, () => {
    console.log(`SQ Server is running on port ${PORT}`)
});