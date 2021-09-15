const express = require('express');
const app = express();

app.get('/', (req, res) => res.send({message: "test message"}));

const port = process.env.PORT
app.listen(port, () => console.log(`server started port ${port}`));
