const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    // host:'localhost',
    // port:process.env.PORT,
    define: {
        underscored: true,
    },
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});
// const sequelize = new Sequelize('argo','argo','argo',{
//     host:'localhost',
//     define: {
//         underscored: true,
//     },
//     dialect: 'postgres',
//     protocol: 'postgres',
//     dialectOptions: {
//         ssl: {
//             require: false,
//             rejectUnauthorized: false
//         }
//     }
// });


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
