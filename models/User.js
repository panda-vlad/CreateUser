const { DataTypes } = require('sequelize');
const Base = require('./Base');

class User extends Base {
    static schema = {
        id             : { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
        email          : { type: DataTypes.STRING, allowNull: false, unique: true },
        password       : { type: DataTypes.STRING }
    }
    static initRelations(sequelize) {
      // unit  smth
    }
}

module.exports = User