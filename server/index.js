require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Systems OK!')
});

app.get('/users', (req, res) => {
    res.status(200).json({ "users": ["userOne", "userTwo", "userThree", "jeremy"] });
});

app.listen(process.env.PORT, () => {
    console.log(`[INFO] Server is online!`);
})