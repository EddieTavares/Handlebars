const Sequelize = require( 'sequelize');
const sequelize = new Sequelize('apex4', 'root', 'root',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = {
    Sequelize : Sequelize,
    sequelize : sequelize
};

