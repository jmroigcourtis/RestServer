const { response, request } = require('express');
// Importo el modelo de usuario
const UserModel = require('../models/usuario')

const saveData = async (data) => {
    try {
        data.pass.length < 6
            ? console.error('La contraseña es muy corta')
            : await data.save() && console.log('Usuario creado con éxito');
    } catch ( error ) {
        throw new Error ('Error al crear el usuario')
    }
}


const userGet = (req = request, res = response) => {
    const { q, nombre = 'null', apikey, limit, page = 'null' } = req.query
    res.json({
        msg: 'User Get',
        q,
        nombre,
        apikey,
        limit,
        page
    })
}

const userPost = async (req = request, res = response) => {
    const body = req.body;
    // Creo la instancia del usuario enlazada al modelo e injecto el body la interfaz.
    const usuario = new UserModel(body);
    try {
        await saveData(usuario)
    } catch (error) {
        console.log('ERROR', error)
    }
    res.json({
        msg: 'User Posting',
        usuario
    })
}

const userPut = (req = request, res = response) => {
    const { id } = req.params
    res.json({ msg: 'User Put', id })
}
const userDelete = (req, res = response) => {
    res.json({ msg: 'User Delete' })
}

module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
}