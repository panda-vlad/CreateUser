const chista = require('../chista.js');

const UserCreate = require('../services/users/Create.js');

module.exports = {
    create : chista.makeServiceRunner(UserCreate, req => req.body)
}