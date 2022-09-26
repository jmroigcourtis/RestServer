const mongoose = require('mongoose');

const dbConnection = async () => {
    const URL = process.env.MONGODB_ATLAS;
    try {
        await mongoose.connect(URL)
        .then(() => console.log('Conectado a Mongo'))
        .catch(error => console.log(error));
    } catch (error) {
        throw new Error('Error al inicializar el proceso')
    }
}

module.exports = {
    dbConnection
}