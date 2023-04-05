const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        commenter_username: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_created: {
//needs to timestamp when created
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = Comment;