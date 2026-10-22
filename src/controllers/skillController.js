const skillService = require('../services/skillService');
const { formatResponse } = require('../common/utils');

const getAll = async (req, res, next) => {
    try {
        const data = await skillService.getAll();
        res.json(formatResponse(data));
    } catch (err) { next(err); }
};

module.exports = { getAll };
