const router = require('./LinksRoutes.js');


const routes = app => {
    router.get('/', (req, res)=>{
        res.render('index')
    })
    router.get('/cadastrar', (req, res)=>{
        res.render('cadastro', {error: false})
    })
    app.use(
        router
    )
};

module.exports = routes;