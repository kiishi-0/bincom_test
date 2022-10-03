const express = require("express");
const app = express();
const cors = require('cors')
// const mysql = require("mysql")
let port = process.env.PORT || 3000

app.use(cors())

app.get('/', (req, res) =>{
  res.json([
    {
      "id": "1",
      "title":"Book Review: The bear and the nightingale"
    },
    {
      "id": "2",
      "title":"Game Review: Pokemon brilliant diamond"
    },
    {
      "id": "3",
      "title":"Show Review: Alice in Borderland"
    },
  ])
})

app.listen(port, () =>{
  console.log(`listening for requests on port ${port}`)
})