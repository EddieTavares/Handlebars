const db = require('./db')

const Resumos = db.sequelize.define(
    'Resumos', {
        titulo: {type: db.Sequelize.STRING(50)},
        resumo: {type: db.Sequelize.TEXT},
    }
)

module.exports = Resumos;

Resumos.sync();