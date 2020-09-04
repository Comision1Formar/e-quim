const dbproductos = require('../data/productos.json');


module.exports = {
    index: function(req, res) {
        res.render('index', {
                title: "e-Quim",
                productos: dbproductos
            })
    }
}