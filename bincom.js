

const express = require("express");
const app = express();
const mysql = require("mysql")


const con = mysql.createConnection({
  host: 'sql10.freemysqlhosting.net',
  user: 'sql10521412',
  password: 'DzDM7mcT1u',
  database: 'sql10521412',
  port: 3306
})

con.connect((err)=>{
  if(err){
      console.log(err)
  }else{
      console.log("CONNECTED !!")
  }
})


app.get("/poll_unit", (req, res)=>{
  con.query("select * from polling_unit", function(err, result,fields){
      if(err){
          console.log(err)
      }else{
        res.json(result)
      }
  })
})
app.get("/ward", (req, res)=>{
  con.query("select * from ward", function(err, result,fields){
      if(err){
          console.log(err)
      }else{
        res.json(result)
      }
  })
})
app.get("/lga", (req, res)=>{
  con.query("select * from lga", function(err, result,fields){
      if(err){
          console.log(err)
      }else{
        res.json(result)
      }
  })
})
app.get("/polling_results", (req, res)=>{
  con.query("select * from announced_pu_results", function(err, result,fields){
      if(err){
          console.log(err)
      }else{
        res.json(result)
      }
  })
})

app.listen(3000)




