'use strict';

require('dotenv').load();

if (process.env.NODE_ENV !== 'production') {
    require('@glimpse/glimpse').init();
}

const app    = require('./app');
const logger = require('./lib/logger');

const mongoSettings = {
    host:     process.env.RRHH_API_MONGODB_HOST,
    port:     process.env.RRHH_API_MONGODB_PORT,
    db:       process.env.RRHH_API_MONGODB_DB
};


Promise.all([app.initialize(logger), app.connectMongoose(mongoSettings)])
    .then(([application]) => {
        application.listen(process.env.RRHH_API_SERVER_PORT);
        logger.info('Your server is listening on port ' + process.env.RRHH_API_SERVER_PORT);
    })
    .catch(logger.error);
