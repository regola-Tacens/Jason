const sequelize = require('./../database');

const {DataTypes, Model} = require('sequelize');

class Argonaute extends Model {}

Argonaute.init({
    username: {
        type: DataTypes.TEXT,
        allowNull: false,    validate: {
            notNull: {args:true, msg: 'le nom ne doit pas etre nul'},
            notEmpty: {args:true, msg: 'le nom ne doit pas etre nul'},
        }
    }
}, {
    sequelize,
    tableName: 'argonaute',
});

module.exports = Argonaute;
