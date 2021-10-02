const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    define: {
        underscored: true,
    },
    dialect: 'postgres',
    protocol: 'postgres',
    // pour la prod decommenter dialect Options
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

module.exports = sequelize;


