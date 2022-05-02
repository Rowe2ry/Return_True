const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {
    auth(pass) {
        return bcrypt.compareSync(pass, this.password);
      }
}

User.init (
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate : {
                len: [2],
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },
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

module.exports = User;