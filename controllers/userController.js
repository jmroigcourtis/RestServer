const { response, request } = require('express');

const userGet = (req = request, res = response) => {
    const {q, nombre = 'null', apikey, limit, page = 'null'}  = req.query
    res.json({ msg: 'User Get', 
    q,
    nombre,
    apikey,
    limit, 
    page
 })
}

const userPost = (req = request, res = response) => {
    const body = req.body;
    const {nombre, edad, id } = body
    res.json({
        msg: 'User Post',
        nombre,
        edad,
        id
    })
}

const userPut = (req = request, res = response) => {
    const { id } = req.params
    res.json({ msg: 'User Put', id})
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