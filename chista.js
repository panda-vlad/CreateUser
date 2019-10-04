const Chista = require('chista').default;

/* istanbul ignore next */
function getLogger() {
    if (process.env.MODE === 'test') return () => {}; // UGLY.

    return (type, data) => console[type](data);
}

module.exports =  new Chista({
    defaultLogger : getLogger()
});
