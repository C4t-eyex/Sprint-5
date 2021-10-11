const express = require('express');
const path = require('path');
const router = express.Router();
const mysqlConnection = require("../DataBase/accessData");

router.get('/productos/listar', (req, res) => {
    mysqlConnection.query("Select * from products order by 2", (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            res.send({ error: err.message });
        }
    });

});
router.get('/productos/listarporId/:id', (req, res) => {
    const { id } = req.params
    mysqlConnection.query("Select * from products where id = ?", [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            res.send({ error: err.message });
        }
    });

});
router.post('/productos/add/product', (req, res) => {

    const { id, name, reference } = req.body
    mysqlConnection.query('Insert into products(name,refer) values(?,?)', [name, reference], (err, rows, fields) => {
        if (!err) {
            listarTodos(req, res);
        } else {
            res.json({ error: err.message });
        }
    });

});
router.get('/productos/view/product', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(path.join(__dirname, '../productosView.html'));

});

router.put('/productos/edit', (req, res) => {
    const { id, name, reference } = req.body;
    res.json({ status: "ok" });


});
const listarTodos = (req, res) => {
    mysqlConnection.query("Select * from products order by 2", (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            res.send({ error: err.message });
        }
    });
}
module.exports = router;