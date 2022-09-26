const {Schema, model} = require('mongoose');

const userSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre obligatorio']
    },
    email: {
        type: String,
        required: [true, 'Email obligatorio']
    },
    pass: {
        type: String,
        required: [true, 'Contraseña obligatoria']
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        required: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    estado: {
        type: Boolean,
        default: true,
    },
    google: {
        type: Boolean,
        default: true
    }
});



module.exports = model('Usuario', userSchema)