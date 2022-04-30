const { Model, DataTypes } = require('sequelize');
const sequalize = require('../config/connection');

class Blogpost extends Model {}

Blogpost.init (
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        body: {
            type: DataTypes.text,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: user,
                key: id
            }
        }
    },
    {
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'blogpost',
	}
);

module.exports = blogpost;