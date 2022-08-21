const express = require('express');
const db = require('./src/config/db.js');
const routes = require('./src/routes/index.routes.js')
const path = require('path')


const app = express();

const PORT = process.env.PORT || 3000;


app.use(express.json());
routes(app)

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, './src/views'))


app.listen(PORT, ()=>{
    console.log(`Server rodando na porta: ${PORT}`);
});



db.on('error', console.error.bind('houve um erro'));

db.once('open', () => {console.log("Conexão com o banco de dados feita com sucesso!")})
