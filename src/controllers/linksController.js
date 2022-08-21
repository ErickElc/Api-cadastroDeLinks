const LinkModel = require('../models/Links.js');

class linksController{
    static async ListarLinks (req, res){
        try{
            let links = await LinkModel.find({})
            res.render('index', {links})
        }
        catch(err){
            res.send(err)
        }
    }
    static async FiltrarLinks (req, res){
        let title = req.params.title;
        try{
            let docs = await LinkModel.findOneAndUpdate({title: title}, {$inc: {clicks: 1}})
            if(docs !== undefined){
                res.status(200);
                res.redirect(docs.url)
            }
            else{
                res.status(400)
                res.send(`Não foi possível achar o elemento`)
            }

        }
        catch(err){
            res.status(404)
            res.send(`Houve um erro na sua busca.  erro:  ${err}`)
        }
    }
    static async CadastrarLink(req, res) {
        const link = new LinkModel(req.body);
        try{
            await link.save()
            res.status(201).send('<h1>Link adicionado</h1>')
        }
        catch(error){
            res.status(500).render('cadastro',{error, body: req.body})
        }
    }
    static async deletarLink(req, res){

        let id = req.params.id;
        if(!id){
            id = req.body.id;
        }
        try{
            await LinkModel.findByIdAndDelete(id)
            res.send(id)
        }
        catch(err){
            res.status(404).send(err)
        }   
    }
    static async loadId(req, res){

        let id = req.params.id;
        try{
            let link = await LinkModel.findById(id);
            res.render('edit', { error: false, body: link })
        }
        catch(err){
            res.status(404).send(err)
        } 
    }
    static async editLink(req, res){

        const link = {};
        link.title = req.body.title;
        link.description = req.body.description;
        link.url = req.body.url;

        let id = req.params.id;
        if(!id){
            id = req.body.id;
        }
        try{
            await LinkModel.findByIdAndUpdate(id, link)
            res.status(201).send('<h1>Link adicionado</h1>')
        }
        catch(error){
            res.status(500).render('edit',{error, body: req.body})
        }
    }
}

module.exports = linksController;