const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('/Develop/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/index.html"));
});


app.get("/productivity", (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/productivity.html"));
});



app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
})