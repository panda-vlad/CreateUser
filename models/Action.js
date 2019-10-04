const { DataTypes } = require('sequelize');
const Base = require('./Base');
const User = require('./User');

const METHODS_BY_TYPE = {
    'CONFIRM_EMAIL'  : 'confirmEmail',
    'RESET_PASSWORD' : 'resetPassword'
};
class Action extends Base {
    static schema = {
        id   : { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
        type : { type: DataTypes.ENUM('CONFIRM_EMAIL', 'RESET_PASSWORD'), allowNull: false },
        data : { type: DataTypes.JSON, allowNull: false, defaultValue: {} }
    };
    static initHooks() {
        this.afterCreate(action => {
            process.env.LAST_ACTION_ID = action.dataValues.id; // For testing
        });
    }
}

module.exports =  Action
