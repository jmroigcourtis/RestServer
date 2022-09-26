const express = require('express')
const CORS = require('cors')
const { router }  = require('../routes/user');
const { dbConnection } = require('../db/config');
require('dotenv').config()
class Server {

    constructor() {
        this.app = express();
        this.PORT = process.env.PORT;
        this.userRoutes = router;
        // DB Connect.
        this.connectDB();
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

    async connectDB () {
        try {
            await dbConnection();
        } catch (error) {
            throw new Error ('Error')
        }
        
    }

    routes() {
        this.app.use('/api/users', this.userRoutes)
    }
    listen () {
        this.app.listen(this.PORT, () => console.log(`On port ${this.PORT}`))
    }
}
module.exports = Server;