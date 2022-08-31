const express = require('express')
const CORS = require('cors')
const { router }  = require('../routes/user')
require('dotenv').config()
class Server {

    constructor() {
        this.app = express();
        this.PORT = process.env.PORT;
        this.userRoutes = router;
        // Middlewares
        this.middleWares();
        this.routes();        
    }

    middleWares() {

        //Config CORS
        this.app.use(CORS())
        //Parse y lectura del body
        this.app.use(express.json())
        
        this.app.use(express.static('public'));

    }

    routes() {
        this.app.use('/api/users', this.userRoutes)
    }
    listen () {
        this.app.listen(this.PORT, () => console.log(`On port ${this.PORT}`))
    }
}
module.exports = Server;