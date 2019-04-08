const errorHandler = require('./error_handler');
const notFound = require('./not_found');

module.exports = function (req, res, err, next) {
	errorHandler(res, req, err, next);
	notFound(res, req, next);
};
