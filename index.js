const express = require("express");
const app = express();
const port = 3002;
const fs = require('fs');
app.use(express.json());
app.get('/' , (req , res) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        const jsonData = JSON.parse(data);
       res.json(jsonData)
      });
})
app.listen(port , () => {
    console.log(`http://localhost:${port}`);
})