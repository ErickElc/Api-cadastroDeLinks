const express = require('express');
const linksController = require('../controllers/linksController.js')
const router = express.Router();


router
    .get('/', linksController.ListarLinks)
    .get('/buscar/:title',linksController.FiltrarLinks)
    .get('/edit/:id',linksController.loadId)

    .post('/cadastrar', express.urlencoded({extended: true}) ,linksController.CadastrarLink)
    .post('/edit/:id',linksController.editLink)


    .delete('/', linksController.deletarLink)
    .delete('/:id', express.json(),linksController.deletarLink)


module.exports = router;
