const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    define: {
        underscored: true,
    },
    ssl: {
        rejectUnauthorized: false,
    },
});


module.exports = sequelize;

// const sequelize = new Sequelize('argo', 'argo', 'argo', {
//   host: 'localhost',
//   dialect: 'postgres'
// });

////////////////////const Pool = require("pg").Pool;
// const Pool = require('pg').Pool;

// require('dotenv').config();

// const sequelize = new Pool({
//     connectionString: process.env.DATABASE_URL,
//     ssl: {
//         rejectUnauthorized: false,
//     },
// });
// module.exports = sequelize;
