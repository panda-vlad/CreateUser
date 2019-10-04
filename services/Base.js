const ServiceBase  = require('chista/ServiceBase').default;
module.exports = class Base extends ServiceBase {
    checkPermissions() {
        if (!this.allowedRoles) return;

        const { userRole } = this.context;
        const e = new X({
            code   : 'PERMISSION_DENIED',
            fields : { userRole }
        });

        if (!userRole) throw e;
        if (!this.allowedRoles().includes(userRole)) throw e;
    }
    checkContext(permissions) {
        const { userRole, userId } = this.context;
        const permission = permissions[userRole];

        if (!permission) return;
        if (userId !== permission) {
            throw new X({
                'fields' : { id: userId },
                'code'   : 'PERMISSION_DENIED'
            });
        }
    }
}