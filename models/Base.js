const Sequelize = require('sequelize');

class Base extends Sequelize.Model {
    static init(sequelize, options = {}) {
        super.init(this.schema, { ...options, sequelize });
    }

    static async findById(id) {
        const entity = await this.findOne({ where: { id } });

        if (!entity) {
            console.error('Error')
        }

        return entity;
    }

    static getIncludeMap(includesList) {
        const includeMap = {};

        includesList.forEach(item => {
            if (!this.whiteIncludeList[item]) return;
            if (includeMap[item]) return;

            includeMap[item] = this.whiteIncludeList[item];
        });

        return includeMap;
    }
}

module.exports =  Base
