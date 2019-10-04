const ServiceBase = require('../Base')
const User = require('../../models/User.js');
const Action = require('../../models/Action');

class UsersCreate extends ServiceBase {
    static validationRules = {
        data : [ 'required', { 'nested_object' : {
            email           : [ 'required', 'email', 'to_lc' ],
            password        : [ 'required', 'string' ],
        } } ]
    };

    async execute ({data}) {
        console.log(data)
        const isUserExist = await User.findOne({ where: { email: data.email } });
        const user = await User.create(data);

        const actionData = {
            type : 'CONFIRM_EMAIL',
            data : {
                userId : user.id,
                email  : user.email
            }
        };
        console.log(3434343, user)
        const action = await Action.create(actionData);
        return user;
    }
}

module.exports = UsersCreate