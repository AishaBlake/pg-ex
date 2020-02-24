const express = require("express");
const routes = express.Router();
const pool = require("./connection");

function getTable(req, res) {
    pool.query("select * from Animals order by id").then(result => {
        res.json(result.rows);
    });
}
  
routes.get("/animals", function(req, res) {
    getTable(req, res);
}); 

routes.get("/animals/:id", function(req, res) {
    pool.query("select * from Animals where name=$1::text order by id", [req.params.id]).then(result => {
        res.json(result.rows);
    });
});

routes.post("/animals", function(req, res) {
    pool.query("insert into Animals (name) values($1::text)", [req.body.name]).then(() => {
        getTable(req, res);
    });
});

routes.put("/animals/:id", function(req, res) {
    pool.query("update Animals set name=$1::text where id=$2::int", 
    [req.body.name, req.params.id]).then(() => {
        getTable(req, res);
    });
});

routes.delete("/animals/:id", function(req, res) {
    pool.query("delete from Animals where id=$1::int", [req.params.id]).then(() => {
        getTable(req, res);
    });
});

module.exports = routes;