const path = require('path');
const { createLogger, format, transports } = require('winston');
const logger = createLogger({
	transports: [
		new transports.Console({
			level: 'debug',
			format: format.combine(format.timestamp(), format.json()),
		}),
		new transports.File({
			filename: path.join(__dirname, './log/error.log'),
			level: 'error',
			format: format.combine(format.timestamp(), format.json()),
		}),
	],
});

module.exports = logger;